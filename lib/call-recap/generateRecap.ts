import { recapViolatesGuardrails } from "@/lib/call-recap/guardrails";
import { buildGenericRecapHtml } from "@/lib/call-recap/genericRecap";
import { UFF_CONSUMER_PHONE } from "@/lib/constants";

type GenerateRecapInput = {
  name: string | null;
  /** Short summary written by the voice agent, not a raw transcript. */
  callSummary: string | null;
};

export async function generateRecapHtml(input: GenerateRecapInput): Promise<string> {
  const apiKey = process.env.XAI_API_KEY;
  if (!apiKey || !input.callSummary?.trim()) {
    return buildGenericRecapHtml(input.name);
  }

  const firstName = input.name?.split(/\s+/)[0] ?? null;

  const systemPrompt = `You write short post-call recap emails for HomeLoanAgents (mortgage education and applications).
Output HTML only: use <p>, <ul>, <ol>, <li>, <strong>, and <a> tags. No markdown.
Tone: warm, professional, conversational, under 220 words.
Must include: brief summary of the call, next step to start at https://homeloanagents.com/get-started, a short list of documents to gather (ID, pay stubs, W-2s/1099s, tax returns, bank statements), and for phone follow-up the inbound voice agent line ${UFF_CONSUMER_PHONE} (do not use any other phone number).
NEVER mention interest rates, APR, specific percentages, approvals, pre-approvals, closing timelines, guarantees, or promises. Do not say the borrower is approved or will close by a date.
End with one sentence that this is informational only, not a loan offer or commitment to lend.`;

  const userPrompt = `Caller name: ${input.name ?? "unknown"}
Short call summary from the voice agent (not a raw transcript):
${input.callSummary}`;

  try {
    const response = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "grok-3-mini",
        temperature: 0.3,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
      }),
    });

    if (!response.ok) {
      return buildGenericRecapHtml(firstName);
    }

    const json = (await response.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const content = json.choices?.[0]?.message?.content?.trim();
    if (!content || recapViolatesGuardrails(content)) {
      return buildGenericRecapHtml(firstName);
    }

    return content;
  } catch {
    return buildGenericRecapHtml(firstName);
  }
}