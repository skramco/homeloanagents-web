/**
 * Sentinel email footers (transactional Section 2.2 and marketing Section 2.3).
 * Phone in these templates is the HomeLoanAgents consumer line, (417) 524-3687.
 */

export const NAMING_LINE =
  "United Fidelity Funding Corp. d/b/a HomeLoanAgents, NMLS #34381";

export const RECAP_PHONE = "(417) 524-3687";

export const LOAN_OFFICER_LINE = "Loan officer: Mark Ramirez, NMLS #1192984";

export const ADDRESS_LINE =
  "1300 NW Briarcliff Pkwy, Ste 275, Kansas City, MO 64150";

const NMLS_URL = "https://www.nmlsconsumeraccess.org/";
const PRIVACY_URL = "https://homeloanagents.com/privacy";
const LICENSING_URL = "https://homeloanagents.com/licensing";
const TEXAS_NOTICE_URL = "https://homeloanagents.com/licensing#texas";

/** Resend merge tag for marketing unsubscribe links. */
export const RESEND_UNSUBSCRIBE_TAG = "{{{RESEND_UNSUBSCRIBE_URL}}}";

const FOOTER_STYLE =
  "margin:0;padding:0;background:#ffffff;color:#595959;font-size:12px;line-height:1.5;font-family:Inter,Segoe UI,Roboto,Helvetica,Arial,sans-serif;";

const LINK_STYLE = "color:#595959;text-decoration:underline;";

function footerTable(rows: string): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="${FOOTER_STYLE}">
${rows}
</table>`;
}

function row(html: string, padding = "0 0 8px"): string {
  return `  <tr>
    <td style="padding:${padding};font-size:12px;line-height:1.5;color:#595959;background:#ffffff;">
      ${html}
    </td>
  </tr>`;
}

function sharedIdentityRows(): string {
  return [
    row(NAMING_LINE, "0 0 4px"),
    row(LOAN_OFFICER_LINE, "0 0 4px"),
    row(
      `${ADDRESS_LINE} | <a href="tel:+14175243687" style="${LINK_STYLE}">${RECAP_PHONE}</a> | <a href="https://homeloanagents.com" style="${LINK_STYLE}">homeloanagents.com</a>`,
      "0 0 4px",
    ),
    row(
      `For licensing information, go to: <a href="${NMLS_URL}" style="${LINK_STYLE}">www.nmlsconsumeraccess.org</a>`,
      "0 0 12px",
    ),
  ].join("\n");
}

function stateRows(): string {
  return [
    row(
      "California: Loans made or arranged pursuant to a California Financing Law license.",
      "0 0 4px",
    ),
    row(
      `Texas: United Fidelity Funding Corp., NMLS #34381, homeloanagents.com. Texas Consumer Complaint Notice: <a href="${TEXAS_NOTICE_URL}" style="${LINK_STYLE}">${TEXAS_NOTICE_URL}</a>`,
      "0 0 4px",
    ),
    row(
      "Florida: United Fidelity Funding Corp., Mortgage Lender License MLD506, NMLS #34381.",
      "0 0 12px",
    ),
    row("Equal Housing Lender", "0 0 4px"),
    row(
      `<a href="${PRIVACY_URL}" style="${LINK_STYLE}">Privacy Notice</a> | <a href="${LICENSING_URL}" style="${LINK_STYLE}">Licensing and disclosures</a>`,
      "0 0 8px",
    ),
  ].join("\n");
}

/** Section 2.2 transactional footer (HTML). */
export function transactionalFooterHtml(): string {
  return footerTable(
    [
      sharedIdentityRows(),
      row(
        `This message was prepared with AI assistance and may contain mistakes. It is general information. It is not a Loan Estimate, a rate or fee quote, or a loan approval. Not a commitment to lend. All loans are subject to credit and property approval. To reach a licensed loan officer, reply to this email or call <a href="tel:+14175243687" style="${LINK_STYLE}">${RECAP_PHONE}</a>.`,
        "0 0 12px",
      ),
      stateRows(),
      row("To stop receiving emails from us, reply with the word unsubscribe.", "0"),
    ].join("\n"),
  );
}

/** Section 2.2 transactional footer (plain text). Verbatim for this ticket. */
export function transactionalFooterText(): string {
  return `--
${NAMING_LINE}
${LOAN_OFFICER_LINE}
${ADDRESS_LINE} | ${RECAP_PHONE} | homeloanagents.com
For licensing information, go to: www.nmlsconsumeraccess.org (${NMLS_URL})

This message was prepared with AI assistance and may contain mistakes. It is general information. It is not a Loan Estimate, a rate or fee quote, or a loan approval. Not a commitment to lend. All loans are subject to credit and property approval. To reach a licensed loan officer, reply to this email or call ${RECAP_PHONE}.

California: Loans made or arranged pursuant to a California Financing Law license.
Texas: United Fidelity Funding Corp., NMLS #34381, homeloanagents.com. Texas Consumer Complaint Notice: ${TEXAS_NOTICE_URL}
Florida: United Fidelity Funding Corp., Mortgage Lender License MLD506, NMLS #34381.

Equal Housing Lender
Privacy Notice: ${PRIVACY_URL} | Licensing and disclosures: ${LICENSING_URL}
To stop receiving emails from us, reply with the word unsubscribe.`;
}

const MARKETING_DISCLAIMER =
  "Rates, terms and programs are subject to change without notice. This message is general information. It is not a Loan Estimate, a rate or fee quote, or a loan approval. Not a commitment to lend. All loans are subject to credit and property approval. To reach a licensed loan officer, call (417) 524-3687.";

/** Section 2.3 marketing footer (HTML). Not used by the call-recap send path. */
export function marketingFooterHtml(): string {
  return footerTable(
    [
      sharedIdentityRows(),
      row(MARKETING_DISCLAIMER, "0 0 12px"),
      stateRows(),
      row(
        `<a href="${RESEND_UNSUBSCRIBE_TAG}" style="${LINK_STYLE}">Unsubscribe</a>`,
        "0",
      ),
    ].join("\n"),
  );
}

/** Section 2.3 marketing footer (plain text). */
export function marketingFooterText(): string {
  return `--
${NAMING_LINE}
${LOAN_OFFICER_LINE}
${ADDRESS_LINE} | ${RECAP_PHONE} | homeloanagents.com
For licensing information, go to: www.nmlsconsumeraccess.org (${NMLS_URL})

${MARKETING_DISCLAIMER}

California: Loans made or arranged pursuant to a California Financing Law license.
Texas: United Fidelity Funding Corp., NMLS #34381, homeloanagents.com. Texas Consumer Complaint Notice: ${TEXAS_NOTICE_URL}
Florida: United Fidelity Funding Corp., Mortgage Lender License MLD506, NMLS #34381.

Equal Housing Lender
Privacy Notice: ${PRIVACY_URL} | Licensing and disclosures: ${LICENSING_URL}
Unsubscribe: ${RESEND_UNSUBSCRIBE_TAG}`;
}
