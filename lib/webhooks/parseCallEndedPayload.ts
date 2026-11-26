import { createHash } from "node:crypto";
import { parseCallerPhoneFromSipHeaders } from "./verifyXaiWebhook";

export type ParsedCallEndedPayload = {
  callId: string;
  callIdDerived: boolean;
  phone: string | null;
  email: string | null;
  name: string | null;
  /** Short call summary from the voice agent (not a raw transcript). */
  callSummary: string | null;
};

type FlatCallEndedBody = {
  call_id?: string | null;
  phone?: string | null;
  email?: string | null;
  name?: string | null;
  transcript?: string | null;
};

type WrappedCallEndedBody = {
  type?: string;
  data?: {
    call_id?: string | null;
    phone?: string | null;
    email?: string | null;
    name?: string | null;
    transcript?: string | null;
    sip_headers?: { name: string; value: string }[];
  };
};

export function parseCallEndedPayload(
  body: unknown,
  options?: { now?: Date },
): ParsedCallEndedPayload | null {
  if (!body || typeof body !== "object") {
    return null;
  }

  const wrapped = body as WrappedCallEndedBody;
  const flat = body as FlatCallEndedBody;

  let callIdRaw: string | null | undefined;
  let phone: string | null = null;
  let email: string | null = null;
  let name: string | null = null;
  let callSummary: string | null = null;

  const isWrapped =
    wrapped.type === "realtime.call.ended" &&
    wrapped.data &&
    typeof wrapped.data === "object";

  if (isWrapped) {
    callIdRaw = wrapped.data!.call_id;
    phone = wrapped.data!.phone?.trim() || parseCallerPhoneFromSipHeaders(wrapped.data!.sip_headers) || null;
    email = normalizeEmail(wrapped.data!.email);
    name = wrapped.data!.name?.trim() || null;
    callSummary = wrapped.data!.transcript?.trim() || null;
  } else if (isFlatCallEndedBody(flat)) {
    callIdRaw = flat.call_id;
    phone = flat.phone?.trim() || null;
    email = normalizeEmail(flat.email);
    name = flat.name?.trim() || null;
    callSummary = flat.transcript?.trim() || null;
  } else {
    return null;
  }

  const explicitId = callIdRaw?.trim() ?? "";
  let callIdDerived = false;
  let callId = explicitId;
  if (!callId) {
    callId = deriveCallId(email, phone, options?.now ?? new Date());
    callIdDerived = true;
  }

  return {
    callId,
    callIdDerived,
    phone,
    email,
    name,
    callSummary,
  };
}

function isFlatCallEndedBody(body: FlatCallEndedBody): boolean {
  const keys = ["call_id", "phone", "email", "name", "transcript"] as const;
  return keys.some((key) => key in body);
}

export function deriveCallId(
  email: string | null,
  phone: string | null,
  now: Date = new Date(),
): string {
  const date = now.toISOString().slice(0, 10);
  const payload = `${email ?? ""}|${phone ?? ""}|${date}`;
  const hash = createHash("sha256").update(payload, "utf8").digest("hex");
  return `derived_${hash}`;
}

function normalizeEmail(value: string | null | undefined): string | null {
  if (!value) {
    return null;
  }
  const trimmed = value.trim().toLowerCase();
  return trimmed.includes("@") ? trimmed : null;
}