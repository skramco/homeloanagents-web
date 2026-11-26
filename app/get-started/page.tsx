import type { Metadata } from "next";
import Link from "next/link";
import { AI_DISCLOSURE, BORROWER_CONTACT_CHANNELS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Get started",
};

export default function GetStartedPage() {
  return (
    <article className="prose-page">
      <h1>Borrower portal coming soon</h1>
      <p>{AI_DISCLOSURE}</p>
      <p>
        The HomeLoanAgents borrower experience at homeloanagents.com is under construction. When it
        launches, you will apply and work your loan here, with transparency about agent-assisted steps,
        human supervision, and updates by {BORROWER_CONTACT_CHANNELS}.
      </p>
      <p>
        This page is a placeholder. We are not collecting applications or personal information on this
        preview site. Check back soon, or review{" "}
        <Link href="/how-it-works">how it works</Link> and <Link href="/pricing">pricing</Link> in the
        meantime.
      </p>
      <div className="cta-panel">
        <Link href="/" className="btn btn-secondary">
          Back to home
        </Link>
      </div>
    </article>
  );
}