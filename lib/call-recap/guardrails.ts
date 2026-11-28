const FORBIDDEN_TERMS: { term: string; pattern: RegExp }[] = [
  { term: "$", pattern: /\$/ },
  { term: "%", pattern: /%/ },
  { term: "APR", pattern: /\bapr\b/i },
  { term: "rate", pattern: /\brates?\b/i },
  { term: "pre-approved", pattern: /\bpre-?approved\b/i },
  { term: "approved", pattern: /\bapproved\b/i },
  { term: "qualify", pattern: /\bqualif(?:y|ies|ied)\b/i },
  { term: "guarantee", pattern: /\bguarantee[ds]?\b/i },
];

const FIRST_PERSON_MARK: { term: string; pattern: RegExp }[] = [
  { term: "This is Mark Ramirez", pattern: /\bthis is mark ramirez\b/i },
  { term: "I am Mark", pattern: /\bi am mark\b/i },
  { term: "I am Mark", pattern: /\bi'm mark\b/i },
];

/** First forbidden term in AI-written recap content, or null when the text is safe to send. */
export function findRecapGuardrailTerm(text: string): string | null {
  for (const check of FORBIDDEN_TERMS) {
    if (check.pattern.test(text)) return check.term;
  }
  return null;
}

export function recapViolatesGuardrails(text: string): boolean {
  return findRecapGuardrailTerm(text) !== null;
}

/** True when AI text speaks as Mark in the first person. */
export function isFirstPersonAsMark(text: string): boolean {
  return FIRST_PERSON_MARK.some((check) => check.pattern.test(text));
}

export function findFirstPersonMarkTerm(text: string): string | null {
  for (const check of FIRST_PERSON_MARK) {
    if (check.pattern.test(text)) return check.term;
  }
  return null;
}

export type RecapSendPlan =
  | { action: "send" }
  | { action: "block"; term: string };

/**
 * Send-blocking check for AI-written recap content only.
 * Do not pass the fixed 7.1 close or the footer; those include the words "rate" and "approval".
 * First-person-as-Mark also blocks so that text cannot leave this AI path.
 */
export function planRecapSend(aiText: string): RecapSendPlan {
  const term = findRecapGuardrailTerm(aiText) ?? findFirstPersonMarkTerm(aiText);
  if (term) return { action: "block", term };
  return { action: "send" };
}
