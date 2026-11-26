import Link from "next/link";
import { FLAT_FEE_LABEL } from "@/lib/constants";
import { flatFeeAmountLabel, flatFeeCoverageParagraph, flatFeeWhyParagraph } from "@/lib/pricingCopy";

type FlatFeeCalloutProps = {
  showWhy?: boolean;
  compact?: boolean;
};

export function FlatFeeCallout({ showWhy = true, compact = false }: FlatFeeCalloutProps) {
  return (
    <div className={`pricing-highlight flat-fee-callout ${compact ? "flat-fee-callout--compact" : ""}`}>
      <div className="pricing-box pricing-box--featured">
        <h3>Lender origination fee</h3>
        <p className="pricing-fee">{flatFeeAmountLabel}</p>
        <p className="text-muted" style={{ margin: 0 }}>
          {FLAT_FEE_LABEL} Covers underwriting, processing, and the credit report.
        </p>
      </div>
      {showWhy ? (
        <div className="flat-fee-explainer">
          <p>{flatFeeWhyParagraph}</p>
          <p style={{ marginBottom: 0 }}>{flatFeeCoverageParagraph}</p>
          {!compact ? (
            <p className="text-muted" style={{ marginTop: "1rem", fontSize: "0.875rem", marginBottom: 0 }}>
              Compare your Loan Estimate and Closing
              Disclosure with other offers.
            </p>
          ) : null}
        </div>
      ) : null}
      {compact ? (
        <div className="btn-row" style={{ marginTop: 0 }}>
          <Link href="/pricing" className="btn btn-secondary">
            Full pricing details
          </Link>
        </div>
      ) : null}
    </div>
  );
}