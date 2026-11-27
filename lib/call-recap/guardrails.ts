const FORBIDDEN_PATTERNS: RegExp[] = [
  /\bapr\b/i,
  /\bannual percentage rate\b/i,
  /\brate(s)?\b/i,
  /\bpercent(age)?\b/i,
  /\b\d+(\.\d+)?\s*%/,
  /\bapproved\b/i,
  /\bpre-?approved\b/i,
  /\bguarantee(d|s)?\b/i,
  /\bclosing (in|within|by)\b/i,
  /\b\d+\s*(business\s*)?days?\s+to\s+close\b/i,
  /\blocked\s+(rate|in)\b/i,
  /\bcommit(ment)?\s+to\s+lend\b/i,
];

export function recapViolatesGuardrails(text: string): boolean {
  return FORBIDDEN_PATTERNS.some((pattern) => pattern.test(text));
}