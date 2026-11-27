import { COMPANY_NMLS, NMLS_CONSUMER_ACCESS } from "@/lib/constants";

export function buildRecapEmailDocument(recapHtml: string, recipientName: string | null): string {
  const salutation = recipientName ? escapeHtml(recipientName) : "there";

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Your HomeLoanAgents call recap</title>
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
              <td style="padding:8px 28px 4px;font-size:22px;font-weight:600;line-height:1.3;">
                Thanks for calling HomeLoanAgents
              </td>
            </tr>
            <tr>
              <td style="padding:8px 28px 20px;font-size:15px;line-height:1.6;color:#334155;">
                <p style="margin:0 0 16px;">Hi ${salutation},</p>
                ${recapHtml}
              </td>
            </tr>
            <tr>
              <td style="padding:20px 28px 28px;border-top:1px solid #e2e8f0;font-size:12px;line-height:1.6;color:#64748b;">
                <p style="margin:0 0 12px;">
                  HomeLoanAgents is a DBA of United Fidelity Funding Corp., NMLS #${COMPANY_NMLS}.
                  <a href="${NMLS_CONSUMER_ACCESS}" style="color:#0f4c81;">NMLS Consumer Access</a>.
                </p>
                <p style="margin:0 0 12px;">Equal Housing Opportunity.</p>
                <p style="margin:0;">
                  You received this recap because you shared your email during a call with our voice assistant.
                  To opt out of future recap emails, reply to this message with &quot;unsubscribe&quot; or email
                  <a href="mailto:support@homeloanagents.com" style="color:#0f4c81;">support@homeloanagents.com</a>.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}