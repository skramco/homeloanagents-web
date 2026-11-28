import { Resend } from "resend";
import {
  RECAP_SUBJECT,
  buildRecapEmailDocument,
  buildRecapPlainText,
} from "@/lib/call-recap/emailTemplate";
import { generateRecap } from "@/lib/call-recap/generateRecap";
import { planRecapSend } from "@/lib/call-recap/guardrails";
import { getSupabaseAdmin, type CallLeadRow } from "@/lib/supabase/admin";
import { parseCallEndedPayload } from "@/lib/webhooks/parseCallEndedPayload";
import { verifyXaiWebhookRequest } from "@/lib/webhooks/verifyXaiWebhook";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const secret = process.env.XAI_WEBHOOK_SECRET;
  if (!secret) {
    return Response.json({ error: "Webhook not configured" }, { status: 503 });
  }

  const rawBody = await request.text();

  try {
    verifyXaiWebhookRequest({ rawBody, headers: request.headers, secret });
  } catch {
    return Response.json({ error: "Invalid signature" }, { status: 401 });
  }

  let json: unknown;
  try {
    json = JSON.parse(rawBody) as unknown;
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = parseCallEndedPayload(json);
  if (!parsed) {
    return Response.json(
      {
        error: "Unsupported body shape",
        accepted: [
          "flat: { call_id?, phone?, name?, email?, transcript? }",
          'wrapped: { type: "realtime.call.ended", data: { … } }',
        ],
      },
      { status: 400 },
    );
  }

  const { callId, phone, email, name, callSummary } = parsed;

  const supabase = getSupabaseAdmin();

  const { data: existing, error: fetchError } = await supabase
    .from("call_leads")
    .select("*")
    .eq("call_id", callId)
    .maybeSingle<CallLeadRow>();

  if (fetchError) {
    console.error("call_leads fetch failed", fetchError);
    return Response.json({ error: "Database error" }, { status: 500 });
  }

  if (existing?.recap_sent_at) {
    return Response.json({ status: "already_sent", call_id: callId }, { status: 200 });
  }

  const generated = await generateRecap({ name, callSummary });
  const sendPlan = planRecapSend(generated.aiText);
  const summary = generated.blockedTerm || sendPlan.action === "block"
    ? generated.aiText
    : buildRecapPlainText(generated.fields, name);

  const upsertPayload = {
    call_id: callId,
    phone,
    email,
    name,
    transcript: callSummary,
    summary,
    recap_sent_at: null as string | null,
  };

  const { data: saved, error: upsertError } = await supabase
    .from("call_leads")
    .upsert(upsertPayload, { onConflict: "call_id" })
    .select("*")
    .single<CallLeadRow>();

  if (upsertError || !saved) {
    console.error("call_leads upsert failed", upsertError);
    return Response.json({ error: "Database error" }, { status: 500 });
  }

  if (generated.blockedTerm || sendPlan.action === "block") {
    const term = generated.blockedTerm ?? (sendPlan.action === "block" ? sendPlan.term : "guardrail");
    console.error("call recap blocked_by_guardrail", { term, content: generated.aiText, call_id: callId });
    return Response.json(
      { status: "blocked_by_guardrail", call_id: callId, matched_term: term },
      { status: 200 },
    );
  }

  if (!email) {
    return Response.json(
      { status: "stored_without_email", call_id: callId },
      { status: 200 },
    );
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    return Response.json({ error: "Email not configured" }, { status: 503 });
  }

  const resend = new Resend(resendKey);
  const html = buildRecapEmailDocument(generated.fields, name);
  const text = buildRecapPlainText(generated.fields, name);

  const { error: sendError } = await resend.emails.send(
    {
      from: "HomeLoanAgents <notifications@mail.homeloanagents.com>",
      to: [email],
      replyTo: "support@homeloanagents.com",
      subject: RECAP_SUBJECT,
      html,
      text,
    },
    { idempotencyKey: `call-recap/${callId}` },
  );

  if (sendError) {
    console.error("Resend send failed", sendError);
    return Response.json({ error: "Failed to send recap email" }, { status: 502 });
  }

  const sentAt = new Date().toISOString();
  const { error: markSentError } = await supabase
    .from("call_leads")
    .update({ recap_sent_at: sentAt })
    .eq("call_id", callId)
    .is("recap_sent_at", null);

  if (markSentError) {
    console.error("recap_sent_at update failed", markSentError);
  }

  return Response.json(
    {
      status: "sent",
      call_id: callId,
      recap_sent_at: sentAt,
    },
    { status: 200 },
  );
}