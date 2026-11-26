import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
};

export default function TermsPage() {
  return (
    <article className="prose-page">
      <h1>Terms of use</h1>
      <p>
        <strong>Placeholder.</strong> Full terms of use for homeloanagents.com will be published before
        the borrower portal opens. By using this marketing site, you agree not to misuse the site or
        rely on it as the sole basis for financial decisions.
      </p>
      <p>
        Content is provided for general information about HomeLoanAgents. It is not legal, tax, or
        investment advice. Loan terms are only established through official disclosures and agreements
        you sign with United Fidelity Funding Corp. (trade name HomeLoanAgents), when eligible.
      </p>
      <p>Last updated: November 2026 (placeholder).</p>
    </article>
  );
}