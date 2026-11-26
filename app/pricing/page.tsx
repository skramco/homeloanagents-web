import type { Metadata } from "next";
import Link from "next/link";
import { FlatFeeCallout } from "@/components/FlatFeeCallout";
import { FLAT_FEE_LABEL } from "@/lib/constants";
import { flatFeeCoverageParagraph, flatFeeWhyParagraph } from "@/lib/pricingCopy";

export const metadata: Metadata = {
  title: "Pricing",
};

export default function PricingPage() {
  return (
    <article className="content-page">
      <header className="content-page-header">
        <h1>Transparent mortgage pricing</h1>
        <p className="content-page-lead">
          HomeLoanAgents is a mortgage lender with a flat $3,500 lender origination fee, not a percentage of
          your loan amount. We do not advertise rates or APRs on this site; your pricing depends on your
          loan and market conditions.
        </p>
      </header>

      <FlatFeeCallout />

      <h2>Why flat instead of a percentage?</h2>
      <p>{flatFeeWhyParagraph}</p>
      <p>{flatFeeCoverageParagraph}</p>

      <h2>What&apos;s included in the origination fee</h2>
      <ul>
        <li>Underwriting</li>
        <li>Processing</li>
        <li>Credit report</li>
      </ul>
      <p>
        {FLAT_FEE_LABEL} Using AI agents for routine workflow tasks, with human mortgage professional
        supervision, is designed to reduce overhead so we can offer this structure. Compare your Loan
        Estimate with other offers.
      </p>

      <h2>Third-party costs (separate)</h2>
      <p>
        Appraisal, title, escrow, recording, government fees, prepaids, and similar charges are not
        included in the $3,500 origination fee. They appear separately on your Loan Estimate and Closing
        Disclosure.
      </p>

      <div className="content-page-cta">
        <Link href="/get-started" className="btn btn-primary">
          Get Started
        </Link>
      </div>
    </article>
  );
}