import { recapFieldsAiText, type RecapFields } from "@/lib/call-recap/emailTemplate";
import { genericRecapFields } from "@/lib/call-recap/genericRecap";
import {
  findRecapGuardrailTerm,
  isFirstPersonAsMark,
} from "@/lib/call-recap/guardrails";

type GenerateRecapInput = {
  name: string | null;
  /** Short summary written by the voice agent, not a raw transcript. */
  callSummary: string | null;
};

export type RecapGeneration = {
  fields: RecapFields;
  /** Model-written summary only. Empty when the fixed template fields are used. */
  aiText: string;
  blockedTerm: string | null;
};

const SYSTEM_PROMPT = `You fill three short fields for a HomeLoanAgents post-call recap email.
Return JSON only, with keys askedAbout, propertyState, and followUp. No markdown, no HTML, no other keys.
askedAbout: the caller's goal in general terms only, for example buying a home. No dollar amounts, percentages, rates, APRs, payments, fee amounts, loan amounts, credit details, or income details.
propertyState: the U.S. state of the property, or "not provided" if the summary does not name one.
followUp: exactly "by email" or "by text".
Never write as Mark Ramirez. Never use first person as Mark. Never write "This is Mark Ramirez" or "I am Mark".
Never use the words qualify, approved, pre-approved, or guarantee.
Never state a rate, an APR, a percentage, or any fee amount. If the caller asked about fees, do not state an amount; the email template points them to https://homeloanagents.com/pricing.`;

export async function generateRecap(input: GenerateRecapInput): Promise<RecapGeneration> {
  const fallback = safeGeneration();
  const apiKey = process.env.XAI_API_KEY;
  if (!apiKey || !input.callSummary?.trim()) {
    return fallback;
  }

  try {
    const response = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "grok-3-mini",
        temperature: 0.2,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          {
            role: "user",
            content: `Caller name: ${input.name ?? "unknown"}\nShort call summary from the voice agent (not a raw transcript):\n${input.callSummary}`,
          },
        ],
      }),
    });

    if (!response.ok) return fallback;

    const json = (await response.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const content = json.choices?.[0]?.message?.content?.trim();
    if (!content) return fallback;

    return generationFromModelText(content);
  } catch {
    return fallback;
  }
}

export function generationFromModelText(content: string): RecapGeneration {
  const fields = parseRecapFields(content);
  const aiText = fields ? recapFieldsAiText(fields) : content;
  const blockedTerm = findRecapGuardrailTerm(aiText);

  if (blockedTerm) {
    return { fields: genericRecapFields(), aiText, blockedTerm };
  }

  if (!fields || isFirstPersonAsMark(aiText)) {
    return safeGeneration();
  }

  return { fields, aiText, blockedTerm: null };
}

function safeGeneration(): RecapGeneration {
  return { fields: genericRecapFields(), aiText: "", blockedTerm: null };
}

export function parseRecapFields(content: string): RecapFields | null {
  const match = content.match(/\{[\s\S]*\}/);
  if (!match) return null;

  try {
    const parsed = JSON.parse(match[0]) as Record<string, unknown>;
    const askedAbout = stringField(parsed.askedAbout);
    const propertyState = stringField(parsed.propertyState);
    const followUp = stringField(parsed.followUp);
    if (!askedAbout || !propertyState || !followUp) return null;
    return { askedAbout, propertyState, followUp };
  } catch {
    return null;
  }
}

function stringField(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}
