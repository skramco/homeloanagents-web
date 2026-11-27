import type { Metadata } from "next";
import Link from "next/link";
import { LegalContactBlock } from "@/components/legal/LegalContactBlock";
import {
  UFF_CONSUMER_PHONE,
  UFF_CONSUMER_PHONE_TEL,
  UFF_PRINCIPAL_OFFICE,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for homeloanagents.com, including SMS terms.",
};

const DRAFT_NOTICE =
  "Draft pending counsel and compliance review." as const;

export default function TermsPage() {
  return (
    <article className="prose-page">
      <p className="policy-draft-notice" role="note">
        <strong>{DRAFT_NOTICE}</strong>
      </p>

      <h1>Terms of use</h1>
      <p>
        These terms govern your use of homeloanagents.com and related HomeLoanAgents services operated by United
        Fidelity Funding Corp., NMLS #34381, {UFF_PRINCIPAL_OFFICE} (&quot;we,&quot; &quot;us,&quot; or
        &quot;UFF&quot;). HomeLoanAgents is a trade name of UFF.
      </p>
      <p>Last updated: November 26, 2026 (draft).</p>

      <h2>Educational site; not advice</h2>
      <p>
        Content on this site is for general information about our mortgage services. It is not legal, tax, or
        investment advice. Loan terms are established only through official disclosures and agreements you sign with UFF
        when eligible. Marketing pages do not quote rates, APRs, payments, or loan amounts.
      </p>

      <h2>Acceptable use</h2>
      <p>
        You agree not to misuse the site, attempt unauthorized access, interfere with its operation, or use it as the
        sole basis for financial decisions. Automated scraping or harvesting of content without permission is
        prohibited.
      </p>

      <h2>Accounts and applications</h2>
      <p>
        When you start an application or use borrower tools, additional agreements and disclosures apply. You are
        responsible for providing accurate information. We may suspend access for fraud prevention or compliance.
      </p>

      <h2>AI-assisted workflow</h2>
      <p>
        Portions of our intake and servicing workflow use AI agents supervised by licensed staff. AI agents do not make
        credit decisions. See our <Link href="/licensing">licensing and disclosures</Link> page for more context.
      </p>

      <h2>How we contact you</h2>
      <p>
        We communicate with clients by email or text for status, documents and scheduling. We do not make outbound
        sales calls. The only calls we place are two automated voice messages, delivered in an AI-generated voice, to
        tell you when your loan is locked and when it closes. We place those calls only if you agree to them when you
        apply, and agreeing is optional and not a condition of your loan. You can stop them at any time by replying STOP
        to our texts, calling <a href={UFF_CONSUMER_PHONE_TEL}>{UFF_CONSUMER_PHONE}</a> or emailing{" "}
        <a href="mailto:support@homeloanagents.com">support@homeloanagents.com</a>.
      </p>

      <h2>Text messaging</h2>
      <p>
        HomeLoanAgents (United Fidelity Funding Corp., NMLS #34381) texts only people who opt in, either by checking the
        SMS consent box on our website or by agreeing on a call with our voice assistant. Texts are about your request,
        such as documents, status and scheduling with your loan officer. Texts do not include rates, loan terms or
        account details. Message frequency varies. Msg &amp; data rates may apply. Reply STOP to opt out or HELP for
        help. Carriers are not liable for delayed or undelivered messages. Consent is not a condition of any purchase or
        loan. Full details are in our <Link href="/sms-terms">SMS Terms</Link> and <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Site content, branding, and software are owned by UFF or its licensors. You may view and print pages for personal,
        non-commercial use. You may not copy or redistribute materials for commercial purposes without written
        permission.
      </p>

      <h2>Third-party links</h2>
      <p>
        Links to NMLS Consumer Access and other third-party sites are provided for convenience. We are not responsible
        for their content or policies.
      </p>

      <h2>Disclaimer</h2>
      <p>
        The site is provided &quot;as is.&quot; To the extent permitted by law, we disclaim warranties regarding
        uninterrupted operation or error-free content. Nothing on the site is a commitment to lend; credit decisions are
        subject to underwriting and verification.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent permitted by law, UFF is not liable for indirect or consequential damages arising from use of the
        site. Some jurisdictions do not allow certain limitations; in those cases, our liability is limited to the
        maximum extent permitted.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms. The &quot;Last updated&quot; date will change when we publish revisions. Continued use
        after changes constitutes acceptance of the revised terms where allowed by law.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the State of Missouri, without regard to conflict-of-law principles,
        except where federal law applies to mortgage and consumer protections.
      </p>

      <h2>Contact</h2>
      <p>Questions about these terms:</p>
      <LegalContactBlock mailAttn="Terms" />
      <p>
        <Link href="/">Return to home</Link> · <Link href="/privacy">Privacy policy</Link>
      </p>
    </article>
  );
}