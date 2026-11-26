import type { Metadata } from "next";
import Link from "next/link";
import { UFF_CONSUMER_PHONE, UFF_PRINCIPAL_OFFICE } from "@/lib/constants";

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
        We communicate with clients by <strong>email or text</strong> for status, documents, and scheduling. We do not
        use outbound live sales calls.
      </p>
      <p>
        The only calls clients receive from us are <strong>recorded voice messages from Mark Ramirez</strong> at two
        milestones: when the loan is officially locked and when it officially closes. We make no other calls.
      </p>

      <h2>Text messaging</h2>
      <p>
        HomeLoanAgents (United Fidelity Funding Corp., NMLS #34381) sends texts only to people who agree during a call to
        our inbound voice agent. Texts are about your request, such as scheduling a conversation with your loan officer.
        Texts never include loan terms, rates, or account details.
      </p>
      <ul>
        <li>
          <strong>Consent.</strong> On each inbound call, our voice agent asks whether it is OK for Mark to text you at
          your number about your question. Message and data rates may apply. Reply STOP to opt out anytime. Only callers
          who agree are texted.
        </li>
        <li>
          <strong>If you decline texting.</strong> We follow up by email instead.
        </li>
        <li>
          <strong>Frequency.</strong> Message frequency varies with your transaction and requests.
        </li>
        <li>
          <strong>STOP and HELP.</strong> Reply <strong>STOP</strong> to cancel; you will receive one confirmation and
          no further marketing or follow-up texts unless you consent again. Reply <strong>HELP</strong> for help.
        </li>
        <li>
          <strong>Carriers.</strong> Carriers are not liable for delayed or undelivered messages.
        </li>
      </ul>
      <p>
        Privacy: <Link href="/privacy">https://homeloanagents.com/privacy</Link>
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
      <p>
        Questions about these terms:
      </p>
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:support@homeloanagents.com">support@homeloanagents.com</a> (draft contact — counsel to
          confirm)
        </li>
        <li>Phone: {UFF_CONSUMER_PHONE} (draft — new HomeLoanAgents line to be confirmed at launch)</li>
        <li>Mail: United Fidelity Funding Corp., Attn: Terms, {UFF_PRINCIPAL_OFFICE}</li>
      </ul>
      <p>
        <Link href="/">Return to home</Link> · <Link href="/privacy">Privacy policy</Link>
      </p>
    </article>
  );
}