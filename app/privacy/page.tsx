import type { Metadata } from "next";
import Link from "next/link";
import { UFF_CONSUMER_PHONE, UFF_PRINCIPAL_OFFICE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy policy and GLBA privacy notice for HomeLoanAgents, a trade name of United Fidelity Funding Corp., NMLS #34381.",
};

const DRAFT_NOTICE =
  "Draft pending counsel and compliance review." as const;

export default function PrivacyPage() {
  return (
    <article className="prose-page">
      <p className="policy-draft-notice" role="note">
        <strong>{DRAFT_NOTICE}</strong>
      </p>

      <h1>HomeLoanAgents privacy policy</h1>
      <p>
        HomeLoanAgents is a trade name of United Fidelity Funding Corp., NMLS #34381, {UFF_PRINCIPAL_OFFICE}.
      </p>
      <p>Last updated: November 26, 2026 (draft).</p>

      <h2>What we collect</h2>
      <p>
        When you call, text, or use our site, we may collect your name, phone number, email, the state of the property,
        your goal (buying or refinancing), and the timing you share. If you apply for a loan, we collect what the
        application requires, such as income, assets, employment, and credit information.
      </p>

      <h2>Calls are recorded</h2>
      <p>
        Our phone line is answered by an AI assistant. Calls are recorded and transcribed so our licensed team can
        follow up and for quality and compliance. Our voice technology provider processes call audio and transcripts on
        our behalf and, under its terms, does not use them to train its models.
      </p>

      <h2>How we use it</h2>
      <p>
        We use personal information to respond to your request, schedule time with your loan officer, process an
        application you choose to submit, meet legal obligations, and prevent fraud.
      </p>

      <h2>How we share it (GLBA privacy notice)</h2>
      <p>
        Federal law gives you the right to limit some but not all sharing. Federal law also requires us to tell you how
        we collect, share, and protect your personal information. Please read this notice carefully to understand what
        we do.
      </p>
      <p>
        <strong>Who we are.</strong> United Fidelity Funding Corp., doing business as HomeLoanAgents, is the company
        responsible for the personal information we describe in this notice.
      </p>
      <p>
        <strong>What we do.</strong> United Fidelity Funding Corp. provides mortgage lending and related services.
      </p>

      <table className="privacy-sharing-table">
        <caption>Reasons we can share your personal information</caption>
        <thead>
          <tr>
            <th scope="col">Reasons we can share your personal information</th>
            <th scope="col">Does UFF share?</th>
            <th scope="col">Can you limit this sharing?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              For our everyday business purposes — such as to process your transactions, maintain your account(s),
              respond to court orders and legal investigations, or report to credit bureaus
            </td>
            <td>Yes</td>
            <td>No</td>
          </tr>
          <tr>
            <td>
              For our marketing purposes — to offer our products and services to you (by mail, email, or other channels
              we control)
            </td>
            <td>Yes</td>
            <td>No</td>
          </tr>
          <tr>
            <td>For joint marketing with other financial companies</td>
            <td>No</td>
            <td>We do not share</td>
          </tr>
          <tr>
            <td>For our affiliates&apos; everyday business purposes — information about your transactions and experiences</td>
            <td>No</td>
            <td>We do not share</td>
          </tr>
          <tr>
            <td>For our affiliates&apos; everyday business purposes — information about your creditworthiness</td>
            <td>No</td>
            <td>We do not share</td>
          </tr>
          <tr>
            <td>For our affiliates to market to you</td>
            <td>No</td>
            <td>We do not share</td>
          </tr>
          <tr>
            <td>For nonaffiliates to market to you</td>
            <td>No</td>
            <td>We do not share</td>
          </tr>
        </tbody>
      </table>

      <p>
        <strong>How we share.</strong> We share personal information with service providers that perform services on
        our behalf (for example, credit reporting, document storage, voice and messaging technology, and loan
        origination systems). They may use your information only as we direct. We may also share information when
        required by law, with regulators, or in connection with a corporate transaction as permitted by law.
      </p>

      <h2>Text messages</h2>
      <p>
        If you agree on a call or on our website to receive texts, we text you about your request. Message frequency
        varies. Message and data rates may apply. Reply <strong>STOP</strong> to opt out or <strong>HELP</strong> for
        help. Mobile phone numbers and SMS opt-in data are never shared with or sold to third parties for marketing or
        promotional purposes.
      </p>
      <p>
        See our <Link href="/sms-terms">SMS terms</Link> and <Link href="/terms">terms of use</Link> for more detail on
        text messaging.
      </p>

      <h2>Security</h2>
      <p>
        We maintain administrative, technical, and physical safeguards under the FTC Safeguards Rule (16 CFR 314).
      </p>

      <h2>Retention</h2>
      <p>
        We keep call recordings, transcripts, and consent records for the period set by our counsel and compliance
        policy, and loan records as the law requires.
      </p>

      <h2>Your choices and state rights</h2>
      <p>
        <strong>Opt-out of marketing.</strong> You may opt out of certain marketing communications from us by following
        the instructions in those messages or by contacting us below. We may still send transactional or legally
        required notices.
      </p>
      <p>
        <strong>Limit sharing for marketing.</strong> Because we do not share personal information with nonaffiliates for
        their marketing or with affiliates except as allowed by law, there is no additional opt-out for those
        categories.
      </p>
      <p>
        <strong>State privacy rights.</strong> Residents of certain states may have additional rights regarding access,
        deletion, or correction of personal information. Counsel will complete state-specific notices (including
        California) before publication.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy or to exercise your choices:
      </p>
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:support@homeloanagents.com">support@homeloanagents.com</a> (draft contact — counsel to
          confirm)
        </li>
        <li>
          Phone: {UFF_CONSUMER_PHONE} (draft — new HomeLoanAgents line to be confirmed at launch)
        </li>
        <li>Mail: United Fidelity Funding Corp., Attn: Privacy, {UFF_PRINCIPAL_OFFICE}</li>
      </ul>
      <p>
        <Link href="/">Return to home</Link> · <Link href="/terms">Terms of use</Link>
      </p>
    </article>
  );
}