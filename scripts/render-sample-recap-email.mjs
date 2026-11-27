import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const recapHtml = `
<p>Thanks for talking through your refinance goals today. You mentioned wanting to understand how our flat lender origination fee works and what documents to collect before you apply.</p>
<p><strong>Next steps</strong></p>
<ol>
  <li>When you are ready, begin at <a href="https://homeloanagents.com/get-started">homeloanagents.com/get-started</a>.</li>
  <li>Gather government ID, recent pay stubs, W-2s or 1099s, federal tax returns, and bank statements.</li>
  <li>Reply here or call our inbound voice agent at <a href="tel:+14175243687">(417) 5-AGENTS (417-524-3687)</a> with any follow-up questions.</li>
</ol>
<p>This summary is for your records only and is not a loan offer or commitment to lend.</p>
`.trim();

const COMPANY_NMLS = "34381";
const NMLS_CONSUMER_ACCESS =
  "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/34381";

const html = `<!DOCTYPE html>
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
                <p style="margin:0 0 16px;">Hi Alex Rivera,</p>
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

const outDir = "/opt/cursor/artifacts";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "sample-call-recap-email.html"), html, "utf8");

const { chromium } = await import("playwright");
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 720, height: 960 } });
await page.setContent(html, { waitUntil: "networkidle" });
await page.screenshot({ path: join(outDir, "sample-call-recap-email.png"), fullPage: true });
await browser.close();

console.log("Wrote sample-call-recap-email.html and sample-call-recap-email.png");