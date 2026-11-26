import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
};

export default function PricingPage() {
  return (
    <article className="prose-page">
      <h1>Transparent pricing</h1>
      <p>
        Our fee structure is designed to be easy to understand. We do not guarantee the lowest cost
        for every scenario—compare your Loan Estimate and Closing Disclosure with other offers.
      </p>

      <div className="pricing-highlight">
        <div className="pricing-box">
          <h3>Underwriting fee</h3>
          <p className="pricing-fee">$0</p>
          <p className="text-muted">We do not charge a separate underwriting fee.</p>
        </div>
        <div className="pricing-box">
          <h3>Origination fee</h3>
          <p className="pricing-fee">0.50%</p>
          <p className="text-muted">A flat 50 basis points of the loan amount.</p>
        </div>
      </div>

      <h2>Your choice: rate or out of pocket</h2>
      <p>
        You choose whether to build the origination fee into the rate or pay it out of pocket at
        closing. Either way, we aim to keep the structure visible—not buried in fine print.
      </p>

      <div className="pricing-options">
        <div className="option-card">
          <strong>Option A — Build into the rate</strong>
          <div className="option-visual">
            <div style={{ marginBottom: "0.5rem" }}>Origination: bundled into pricing</div>
            <div>Rate quote → includes 0.50% origination effect</div>
          </div>
          <p className="text-muted" style={{ margin: 0, fontSize: "0.875rem" }}>
            Designed for borrowers who prefer fewer separate fee line items.
          </p>
        </div>
        <div className="option-card">
          <strong>Option B — Pay out of pocket</strong>
          <div className="option-visual">
            <div style={{ marginBottom: "0.5rem" }}>Origination: 0.50% at closing</div>
            <div>Rate quote → without rolling fee into rate</div>
          </div>
          <p className="text-muted" style={{ margin: 0, fontSize: "0.875rem" }}>
            Designed for borrowers who want the fee explicit at closing.
          </p>
        </div>
      </div>

      <h2>Why we share this openly</h2>
      <p>
        Using agents for repetitive tasks, with human supervision, is designed to reduce overhead.
        We can pass those efficiencies through in how we structure workflow and pricing—but your total
        cost still depends on loan amount, product, third-party fees, and taxes or insurance where
        applicable.
      </p>

      <h2>Other costs</h2>
      <p>
        You may still see third-party charges (appraisal, title, recording, etc.) on your disclosures.
        Those are not HomeLoanAgents origination fees. Always review your official loan documents.
      </p>

      <div className="cta-panel">
        <Link href="/get-started" className="btn btn-primary">
          Get started
        </Link>
      </div>
    </article>
  );
}