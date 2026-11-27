import { createHmac, timingSafeEqual } from "node:crypto";
import { Webhook } from "standardwebhooks";

const WEBHOOK_MAX_AGE_SECONDS = 5 * 60;

export function verifyXaiWebhookRequest(params: {
  rawBody: string;
  headers: Headers;
  secret: string;
}): void {
  const webhookId = params.headers.get("webhook-id");
  const webhookTimestamp = params.headers.get("webhook-timestamp");
  const webhookSignature = params.headers.get("webhook-signature");

  if (webhookId && webhookTimestamp && webhookSignature) {
    const verifier = new Webhook(params.secret);
    verifier.verify(params.rawBody, {
      "webhook-id": webhookId,
      "webhook-timestamp": webhookTimestamp,
      "webhook-signature": webhookSignature,
    });
    return;
  }

  const authHeader = params.headers.get("authorization");
  if (authHeader?.startsWith("Bearer ")) {
    const token = authHeader.slice("Bearer ".length).trim();
    assertTimingSafeEqual(token, params.secret);
    return;
  }

  const signatureHeader =
    params.headers.get("x-homeloanagents-signature") ?? params.headers.get("x-webhook-signature");
  if (signatureHeader) {
    const expected = createHmac("sha256", params.secret).update(params.rawBody, "utf8").digest("hex");
    const provided = signatureHeader.replace(/^sha256=/i, "").trim();
    assertTimingSafeEqual(provided, expected);
    assertWebhookTimestampFresh(params.headers.get("webhook-timestamp"));
    return;
  }

  throw new Error("Missing webhook authentication headers");
}

function assertWebhookTimestampFresh(timestampHeader: string | null): void {
  if (!timestampHeader) {
    return;
  }
  const ts = Number.parseInt(timestampHeader, 10);
  if (!Number.isFinite(ts)) {
    throw new Error("Invalid webhook timestamp");
  }
  const age = Math.abs(Math.floor(Date.now() / 1000) - ts);
  if (age > WEBHOOK_MAX_AGE_SECONDS) {
    throw new Error("Webhook timestamp outside allowed window");
  }
}

function assertTimingSafeEqual(provided: string, expected: string): void {
  const a = Buffer.from(provided, "utf8");
  const b = Buffer.from(expected, "utf8");
  if (a.length !== b.length || !timingSafeEqual(a, b)) {
    throw new Error("Invalid webhook signature");
  }
}

export function parseCallerPhoneFromSipHeaders(
  sipHeaders: { name: string; value: string }[] | undefined,
): string | null {
  if (!sipHeaders?.length) {
    return null;
  }
  const from = sipHeaders.find((h) => h.name.toLowerCase() === "from")?.value;
  if (!from) {
    return null;
  }
  const match = from.match(/\+?\d[\d\s().-]{8,}\d/);
  return match?.[0]?.replace(/[^\d+]/g, "") ?? null;
}