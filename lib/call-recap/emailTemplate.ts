import {
  NAMING_LINE,
  RECAP_PHONE,
  transactionalFooterHtml,
  transactionalFooterText,
} from "@/lib/call-recap/footers";

export const RECAP_SUBJECT = "Summary of your call with HomeLoanAgents";

export const AI_PREPARED_LINE =
  "This message was prepared by an AI assistant. It may contain mistakes. A licensed loan officer is available to confirm anything in it.";

export const MARK_FOLLOW_UP_LINE =
  "Mark Ramirez, NMLS #1192984, is the licensed loan officer who will follow up with you about your question.";

export type RecapFields = {
  askedAbout: string;
  propertyState: string;
  followUp: string;
};

export function buildRecapEmailDocument(fields: RecapFields, recipientName: string | null): string {
  const salutation = recipientName ? escapeHtml(displayName(recipientName)) : "there";

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(RECAP_SUBJECT)}</title>
  </head>
  <body style="margin:0;padding:0;background:#f4f6f8;font-family:Inter,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#1a1f2c;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;">
            <tr>
              <td style="padding:28px 28px 8px;">
                <img src="https://homeloanagents.com/brand/homeloanagents-wordmark-color.svg" alt="HomeLoanAgents" width="200" height="32" style="display:block;" />
              </td>
            </tr>
            <tr>
              <td style="padding:8px 28px 20px;font-size:15px;line-height:1.6;color:#334155;">
                <p style="margin:0 0 16px;font-size:13px;line-height:1.5;color:#595959;">${escapeHtml(AI_PREPARED_LINE)}</p>
                <p style="margin:0 0 16px;">Hi ${salutation},</p>
                <p style="margin:0 0 8px;"><strong>What you asked about:</strong> ${escapeHtml(fields.askedAbout)}</p>
                <p style="margin:0 0 8px;"><strong>Property state:</strong> ${escapeHtml(fields.propertyState)}</p>
                <p style="margin:0 0 16px;"><strong>How we will follow up:</strong> ${escapeHtml(fields.followUp)}</p>
                <p style="margin:0 0 12px;">${escapeHtml(MARK_FOLLOW_UP_LINE)}</p>
                <p style="margin:0;">Questions about fees are answered at <a href="https://homeloanagents.com/pricing" style="color:#0f4c81;">homeloanagents.com/pricing</a>. You can reply to this email or call <a href="tel:+14175243687" style="color:#0f4c81;">${RECAP_PHONE}</a>.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 28px 28px;border-top:1px solid #e2e8f0;background:#ffffff;">
                ${transactionalFooterHtml()}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function buildRecapPlainText(fields: RecapFields, recipientName: string | null): string {
  const salutation = recipientName ? displayName(recipientName) : "there";

  return `${AI_PREPARED_LINE}

Hi ${salutation},

What you asked about: ${fields.askedAbout}
Property state: ${fields.propertyState}
How we will follow up: ${fields.followUp}

${MARK_FOLLOW_UP_LINE}

Questions about fees are answered at https://homeloanagents.com/pricing. You can reply to this email or call ${RECAP_PHONE}.

${transactionalFooterText()}`;
}

/** The three summary lines the model is allowed to write. Guardrails run on this string only. */
export function recapFieldsAiText(fields: RecapFields): string {
  return [
    `What you asked about: ${fields.askedAbout}`,
    `Property state: ${fields.propertyState}`,
    `How we will follow up: ${fields.followUp}`,
  ].join("\n");
}

export function displayName(name: string): string {
  const first = name.trim().split(/\s+/)[0];
  return first || "there";
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export { NAMING_LINE };
