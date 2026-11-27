import type { Metadata } from "next";
import Link from "next/link";
import { UFF_CONSUMER_PHONE, UFF_CONSUMER_PHONE_TEL, UFF_PRINCIPAL_OFFICE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "SMS terms",
  description:
    "Text messaging program terms for HomeLoanAgents loan updates from United Fidelity Funding Corp., NMLS #34381.",
};

const DRAFT_NOTICE = "Draft pending counsel and compliance review." as const;

export default function SmsTermsPage() {
  return (
    <article className="prose-page">
      <p className="policy-draft-notice" role="note">
        <strong>{DRAFT_NOTICE}</strong>
      </p>

      <h1>SMS terms</h1>
      <p>
        HomeLoanAgents is a trade name of United Fidelity Funding Corp., NMLS #34381, {UFF_PRINCIPAL_OFFICE}.
      </p>
      <p>Last updated: November 27, 2026 (draft).</p>

      <h2>Program name</h2>
      <p>HomeLoanAgents loan updates.</p>

      <h2>What you will receive</h2>
      <p>
        If you opt in on our website or agree on a call with our voice assistant, HomeLoanAgents (United Fidelity
        Funding Corp.) will text you at the mobile number you provided about your home loan inquiry, application
        status, requested documents and scheduling with your loan officer, Mark Ramirez, NMLS #1192984. These texts are
        informational. We do not send marketing or promotional texts in this program, and we never share your number
        for others to text you.
      </p>

      <h2>How you opt in</h2>
      <p>
        On our website, by checking the unchecked SMS consent box on our contact, get-started or loan-review forms. On
        a call, by saying yes when our voice assistant asks whether Mark may text you at your number. After you opt in,
        we send one confirmation text.
      </p>

      <h2>Message frequency</h2>
      <p>Message frequency varies with your loan and your requests.</p>

      <h2>Cost</h2>
      <p>Msg &amp; data rates may apply. Check with your mobile carrier for details on your plan.</p>

      <h2>Opt out</h2>
      <p>
        Reply STOP to any message to stop texts from this program. We also accept QUIT, END, REVOKE, OPT OUT, CANCEL or
        UNSUBSCRIBE, or you can tell us on a call at{" "}
        <a href={UFF_CONSUMER_PHONE_TEL}>{UFF_CONSUMER_PHONE}</a> or email{" "}
        <a href="mailto:support@homeloanagents.com">support@homeloanagents.com</a>. We will send one text confirming your
        opt-out and then no further texts unless you opt in again. To opt back in, reply START.
      </p>

      <h2>Help</h2>
      <p>
        Reply HELP for help, call <a href={UFF_CONSUMER_PHONE_TEL}>{UFF_CONSUMER_PHONE}</a> or email{" "}
        <a href="mailto:support@homeloanagents.com">support@homeloanagents.com</a>.
      </p>

      <h2>Carriers</h2>
      <p>Carriers are not liable for delayed or undelivered messages.</p>

      <h2>Consent is optional</h2>
      <p>Consent to texts is not a condition of any purchase or loan. If you do not want texts, we follow up by email.</p>

      <h2>Privacy</h2>
      <p>
        We do not sell, rent or share mobile numbers or SMS opt-in data with third parties or affiliates for marketing
        or promotional purposes. See our <Link href="/privacy">Privacy Policy</Link> and <Link href="/terms">Terms of Use</Link>.
      </p>

      <p>
        <Link href="/">Return to home</Link> · <Link href="/terms">Terms of use</Link> · <Link href="/privacy">Privacy</Link>
      </p>
    </article>
  );
}