import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <article className="prose-page">
      <h1>Privacy policy</h1>
      <p>
        <strong>Placeholder.</strong> A full privacy policy for HomeLoanAgents will be published
        before the borrower portal collects personal information. This marketing site does not include
        forms that collect personal data.
      </p>
      <p>
        When the portal launches, we will describe what information we collect, how we use it, how AI
        agents and human supervisors access data, and your choices. Questions can be directed through
        contact channels listed in your loan disclosures once you apply.
      </p>
      <p>Last updated: November 2026 (placeholder).</p>
    </article>
  );
}