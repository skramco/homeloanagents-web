import { FLAT_ORIGINATION_FEE, FLAT_FEE_LABEL } from "./constants";

export const flatFeeAmountLabel = `$${FLAT_ORIGINATION_FEE.toLocaleString()}`;

export const flatFeeWhyParagraph =
  "We charge one flat lender origination fee—not a percentage of your loan amount. With percentage pricing, larger loans paid more to originate, even when the work is similar. Many home loans are straightforward and large; we don't believe you should pay more to originate simply because of loan size.";

export const flatFeeCoverageParagraph = `${FLAT_FEE_LABEL} Covers underwriting, processing, and the credit report—the same whether your loan is about $300,000 or $1,500,000. Third-party costs (appraisal, title, escrow, government fees, prepaids, and similar charges) are separate and disclosed on your Loan Estimate.`;

export const flatFeeShortCallout = FLAT_FEE_LABEL;