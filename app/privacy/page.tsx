import type { Metadata } from "next";
import Link from "next/link";
import { LegalContactBlock } from "@/components/legal/LegalContactBlock";
import {
  UFF_CORPORATE_PHONE_OF_RECORD,
  UFF_CORPORATE_PHONE_TEL,
  UFF_PRINCIPAL_OFFICE,
} from "@/lib/constants";

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

      {/* TODO(UFF): replace with Reg P model form (review 4.5) once UFF confirms answers, or link UFF's official GLBA notice PDF. */}
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
              For our everyday business purposes: such as to process your transactions, maintain your account(s),
              respond to court orders and legal investigations, or report to credit bureaus
            </td>
            <td>Yes</td>
            <td>No</td>
          </tr>
          <tr>
            <td>
              For our marketing purposes: to offer our products and services to you (by mail, email, or other channels
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
            <td>For our affiliates&apos; everyday business purposes: information about your transactions and experiences</td>
            <td>No</td>
            <td>We do not share</td>
          </tr>
          <tr>
            <td>For our affiliates&apos; everyday business purposes: information about your creditworthiness</td>
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
        varies. Msg &amp; data rates may apply. Reply STOP to opt out or HELP for help. We do not sell, rent or share
        mobile phone numbers or SMS opt-in data with third parties or affiliates for marketing or promotional purposes.
        Text messaging originator opt-in data and consent are excluded from every information-sharing category in this
        policy and will not be shared with any third party, except with the messaging service providers that deliver our
        texts on our behalf. See our <Link href="/sms-terms">SMS Terms</Link> and <Link href="/terms">Terms of Use</Link>.
      </p>

      <h2>Security</h2>
      <p>
        We maintain administrative, technical, and physical safeguards under the FTC Safeguards Rule (16 CFR 314).
      </p>

      <h2>Retention</h2>
      <p>
        We keep call recordings, transcripts and consent records for the periods listed in our California privacy notice
        below, and loan records as long as the law requires.
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

      <h2 id="california">California privacy notice (including notice at collection)</h2>
      <p>
        This section applies to California residents and supplements the rest of this policy. It does not apply to
        personal information we collect under the Gramm-Leach-Bliley Act (for example, information in a loan
        application), which is covered by our GLBA notice above, or to other information exempt under the California
        Consumer Privacy Act (CCPA).
      </p>

      <p>
        <strong>What we collect and why.</strong> In the last 12 months we collected these categories of personal
        information:
      </p>
      <ul>
        <li>
          <em>Identifiers</em> (name, phone number, email, IP address): to respond to your request, contact you as you
          choose, prevent fraud and keep records.
        </li>
        <li>
          <em>Customer records</em> (contact details you give us): same purposes.
        </li>
        <li>
          <em>Audio and electronic information</em> (call recordings and transcripts): so our licensed team can follow
          up, for quality, and to keep compliance records.
        </li>
        <li>
          <em>Internet or network activity</em> (device and log data our hosting providers collect when you visit): to
          operate and secure the site.
        </li>
        <li>
          <em>Inquiry details</em> (property state, your goal, timing and notes you share): to route and answer your
          request.
        </li>
        <li>
          <em>Sensitive personal information</em> (Social Security number and financial account or income details): only
          if you apply, and only to process your application and meet legal obligations.
        </li>
      </ul>

      <p>
        <strong>Sources.</strong> You, our voice assistant and website forms, and our service providers. If you apply:
        credit bureaus and other parties as described in our GLBA notice.
      </p>

      <p>
        <strong>Disclosures.</strong> We disclose these categories to service providers and contractors (website hosting
        and forms, voice and messaging technology, document storage and loan origination systems) for the business
        purposes above, under contracts that limit their use. We disclose information to regulators and others when the
        law requires.
      </p>

      <p>
        <strong>No sale or sharing.</strong> We do not sell personal information or share it for cross-context behavioral
        advertising, and we have not done so in the last 12 months. We do not knowingly sell or share the personal
        information of consumers under 16. Because we do not sell or share, we do not offer a &quot;Do Not Sell or
        Share&quot; link and do not currently process opt-out preference signals such as Global Privacy Control; if that
        changes, we will honor them. We use sensitive personal information only for purposes permitted by Cal. Code Regs.
        tit. 11, section 7027(m), so we do not offer a right to limit its use.
      </p>

      <p>
        <strong>How long we keep it.</strong> Inquiry and contact records for people who do not apply: [24 months] after
        our last contact. Call recordings and transcripts: [24 months] after the call, unless needed for a loan file,
        complaint or legal hold. SMS and call consent and opt-out records: [5 years] after your last message. Loan files
        and records: as long as federal and state law require (at least 3 years, longer in some states). We may keep
        information longer when the law requires or to resolve disputes.
      </p>

      <p>
        <strong>Your rights.</strong> You may ask us to: tell you what personal information we collected, used and
        disclosed about you (right to know and access); delete it; correct it; and opt out of sale or sharing (we do not
        sell or share). We will not discriminate against you for using these rights.
      </p>

      <p>
        <strong>How to make a request.</strong> Call us toll-free at{" "}
        <a href={UFF_CORPORATE_PHONE_TEL}>{UFF_CORPORATE_PHONE_OF_RECORD}</a> or email{" "}
        <a href="mailto:support@homeloanagents.com">support@homeloanagents.com</a> with the subject &quot;California
        privacy request.&quot; We confirm receipt within 10 business days and respond within 45 calendar days. If we
        need more time (up to 45 more days), we will tell you why. We verify requests by matching information you give us
        with what we hold. An authorized agent may submit a request for you with your signed permission; we may ask you to
        verify your identity directly.
      </p>

      <p>
        <strong>Do Not Track.</strong> Our site does not respond to browser Do Not Track signals. We do not allow third
        parties to collect information about your online activity on our site across other sites.
      </p>

      <p>
        <strong>Updates.</strong> We review this policy at least once a year. Last updated: November 27, 2026 (draft).
      </p>

      <h2>Contact</h2>
      <p>Questions about this policy or to exercise your choices:</p>
      <LegalContactBlock mailAttn="Privacy" />
      <p>
        <Link href="/">Return to home</Link> · <Link href="/terms">Terms of use</Link>
      </p>
    </article>
  );
}