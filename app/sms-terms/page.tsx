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
      <p>HomeLoanAgents loan updates</p>

      <h2>What messages cover</h2>
      <p>
        If you opt in on our website or agree on a call, we may send text messages about your home loan inquiry,
        application status, requested documents, and scheduling for appointments with your loan team. Texts are related
        to your mortgage request with us, not third-party marketing.
      </p>

      <h2>Message frequency</h2>
      <p>Message frequency varies with your transaction and requests.</p>

      <h2>Message and data rates</h2>
      <p>Message and data rates may apply. Check with your mobile carrier for details on your plan.</p>

      <h2>How to opt out and get help</h2>
      <p>
        Reply <strong>STOP</strong> to cancel text messages from this program. After you send STOP, we send one
        confirmation and stop marketing and follow-up texts unless you opt in again. Reply <strong>HELP</strong> for help.
      </p>

      <h2>Support contact</h2>
      <ul>
        <li>
          Phone: <a href={UFF_CONSUMER_PHONE_TEL}>{UFF_CONSUMER_PHONE}</a>
        </li>
        <li>
          Email: <a href="mailto:hello@homeloanagents.com">hello@homeloanagents.com</a>
        </li>
      </ul>

      <h2>Carriers</h2>
      <p>Carriers are not liable for delayed or undelivered messages.</p>

      <h2>Consent</h2>
      <p>Consent is not a condition of any purchase or loan.</p>

      <h2>Privacy</h2>
      <p>
        See our <Link href="/privacy">privacy policy</Link> for how we handle personal information, including mobile
        numbers and SMS opt-in choices.
      </p>

      <p>
        <Link href="/">Return to home</Link> · <Link href="/terms">Terms of use</Link> · <Link href="/privacy">Privacy</Link>
      </p>
    </article>
  );
}