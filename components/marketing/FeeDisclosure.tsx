"use client";

import Link from "next/link";
import { useEffect, useId, useState, type ReactNode } from "react";
import {
  calculatorBasisExample,
  feeExampleConfig,
  formatFeeDollars,
  formatFeePercent,
  isFeeCopyConfirmed,
} from "@/lib/feeExampleConfig";

export function useFeeCopyConfirmed(): boolean {
  const [confirmed, setConfirmed] = useState(false);
  useEffect(() => {
    setConfirmed(isFeeCopyConfirmed());
  }, []);
  return confirmed;
}

function FeeLink({
  children,
  className,
  tone = "disclosure",
}: {
  children: ReactNode;
  className?: string;
  tone?: "disclosure" | "inherit";
}) {
  const toneClass = tone === "disclosure" ? "fee-disclosure-link" : "fee-amount-link";
  return (
    <Link className={className ? `${toneClass} ${className}` : toneClass} href="/pricing#example">
      {children}
    </Link>
  );
}

export function FeeInlineDisclosure({ variant = "full" }: { variant?: "full" | "tight" }) {
  const fee = formatFeeDollars(feeExampleConfig.flatOriginationFee);
  const lowApr = formatFeePercent(feeExampleConfig.inlineAprMinPercent);
  const highApr = formatFeePercent(feeExampleConfig.inlineAprMaxPercent);
  const lowAmount = formatFeeDollars(feeExampleConfig.loanAmountRangeLow);
  const highAmount = formatFeeDollars(feeExampleConfig.loanAmountRangeHigh);
  const fromAmount = formatFeeDollars(feeExampleConfig.sliderMin);

  if (variant === "tight") {
    return (
      <p className="fee-disclosure-inline">
        <FeeLink>{fee} flat lender origination fee.</FeeLink>{" "}
        <FeeLink>
          Example APRs {lowApr} to {highApr}. See terms
        </FeeLink>
      </p>
    );
  }

  return (
    <p className="fee-disclosure-inline">
      <FeeLink>{fee} flat lender origination fee.</FeeLink> Examples: {lowApr} to {highApr} APR on {lowAmount} to{" "}
      {highAmount} 30-year fixed conforming purchase loans, as of {feeExampleConfig.asOfDate}. Loan amounts from{" "}
      {fromAmount}. <FeeLink>See representative example and APR</FeeLink>
    </p>
  );
}

function DisclosureSurface({ children }: { children: ReactNode }) {
  return <div className="fee-disclosure-surface">{children}</div>;
}

/** Closed <details> keeps the disclosure text in the DOM so it stays crawlable. */
function CollapsedFeeTerms({ children }: { children: ReactNode }) {
  return (
    <details className="fee-disclosure-details">
      <summary className="fee-disclosure-toggle">View terms & disclosures</summary>
      {children}
    </details>
  );
}

const conformingClaim = "One flat lender origination fee on conventional conforming loans from $100,000";

export function FeeGate({ mode }: { mode: FeeGateMode }) {
  const confirmed = useFeeCopyConfirmed();
  if (!confirmed) return <FeeGateFallback mode={mode} />;
  return <FeeGateConfirmed mode={mode} />;
}

export type FeeGateMode =
  | "hero-follow"
  | "float-fee"
  | "proof"
  | "pillar-art"
  | "vs-fee"
  | "pricing-amt"
  | "pricing-same"
  | "pricing-disclosure"
  | "section-a"
  | "callout-amount"
  | "callout-extra"
  | "mega-buy"
  | "mega-refi";

function FeeGateFallback({ mode }: { mode: FeeGateMode }) {
  switch (mode) {
    case "float-fee":
      return <span className="ff-amt">Flat</span>;
    case "proof":
      return <span>Not a percentage of the loan</span>;
    case "pillar-art":
      return (
        <div className="p-art">
          <span className="p-big">Flat</span>
          <span className="p-cap">Same flat fee on a $300k loan</span>
          <span className="p-big">Flat</span>
          <span className="p-cap">Same flat fee on a $600k loan</span>
        </div>
      );
    case "vs-fee":
      return (
        <b>One flat lender origination fee on conventional conforming loans, shown on your Loan Estimate.</b>
      );
    case "pricing-amt":
      return <>Flat</>;
    case "pricing-same":
      return (
        <div className="same">
          <div>
            <small>Same flat fee on a $300,000 loan</small>
            <b>Flat</b>
          </div>
          <div>
            <small>Same flat fee on a $600,000 loan</small>
            <b>Flat</b>
          </div>
        </div>
      );
    case "section-a":
      return <>holds what the lender charges. Ours: one flat origination fee, plus points only if you choose them.</>;
    case "callout-amount":
      return <>Flat</>;
    case "mega-buy":
      return (
        <>
          <strong>Flat</strong>
          <p>
            One flat lender origination fee covering underwriting, processing and the credit report. The same approach
            on a $300k or a $600k conventional conforming loan.
          </p>
        </>
      );
    case "mega-refi":
      return (
        <>
          <strong>Flat</strong>
          <p>The same flat lender fee applies when you refinance. Third-party costs are itemized on your Loan Estimate.</p>
        </>
      );
    default:
      return null;
  }
}

function FeeGateConfirmed({ mode }: { mode: FeeGateMode }) {
  const fee = formatFeeDollars(feeExampleConfig.flatOriginationFee);
  switch (mode) {
    case "hero-follow":
      return (
        <DisclosureSurface>
          <p className="fee-disclosure-inline">
            Same <FeeLink>{fee}</FeeLink> on a $300k or $600k loan.
          </p>
          <CollapsedFeeTerms>
            <FeeInlineDisclosure />
          </CollapsedFeeTerms>
          <p className="fee-disclosure-inline">
            <FeeLink>See representative example and APR</FeeLink>
          </p>
        </DisclosureSurface>
      );
    case "float-fee":
      return (
        <>
          <FeeLink tone="inherit" className="ff-amt">
            {fee}
          </FeeLink>
          <DisclosureSurface>
            <CollapsedFeeTerms>
              <FeeInlineDisclosure variant="tight" />
            </CollapsedFeeTerms>
          </DisclosureSurface>
        </>
      );
    case "proof":
      return (
        <>
          <span>
            Same <FeeLink>{fee}</FeeLink> on a $300k or $600k loan
          </span>
          <DisclosureSurface>
            <FeeInlineDisclosure variant="tight" />
          </DisclosureSurface>
        </>
      );
    case "pillar-art":
      return (
        <>
          <div className="p-art">
            <FeeLink tone="inherit" className="p-big">
              {fee}
            </FeeLink>
            <span className="p-cap">$300k loan</span>
            <FeeLink tone="inherit" className="p-big">
              {fee}
            </FeeLink>
            <span className="p-cap">$600k loan</span>
          </div>
          <DisclosureSurface>
            <p className="fee-disclosure-inline">
              Same <FeeLink>{fee}</FeeLink> on a $300k or $600k loan.
            </p>
            <FeeInlineDisclosure />
          </DisclosureSurface>
        </>
      );
    case "vs-fee":
      return (
        <>
          <b>
            One flat {fee} lender origination fee on conventional conforming loans from{" "}
            {formatFeeDollars(feeExampleConfig.sliderMin)}, shown on your Loan Estimate.
          </b>
          <DisclosureSurface>
            <FeeInlineDisclosure />
          </DisclosureSurface>
        </>
      );
    case "pricing-amt":
      return (
        <FeeLink tone="inherit" className="amt">
          {fee}
        </FeeLink>
      );
    case "pricing-same":
      return (
        <div className="same">
          <div>
            <small>$300,000 loan</small>
            <b>{fee}</b>
          </div>
          <div>
            <small>$600,000 loan</small>
            <b>{fee}</b>
          </div>
        </div>
      );
    case "pricing-disclosure":
      return (
        <DisclosureSurface>
          <p className="fee-disclosure-inline">
            Same <FeeLink>{fee}</FeeLink> on a $300k or $600k loan. {conformingClaim}.
          </p>
          <FeeInlineDisclosure />
        </DisclosureSurface>
      );
    case "section-a":
      return (
        <>
          holds what the lender charges. Ours: one flat <FeeLink>{fee}</FeeLink> origination fee, plus points only if
          you choose them.
          <DisclosureSurface>
            <FeeInlineDisclosure />
          </DisclosureSurface>
        </>
      );
    case "callout-amount":
      return <FeeLink>{fee}</FeeLink>;
    case "callout-extra":
      return (
        <DisclosureSurface>
          <p className="fee-disclosure-inline">
            Same <FeeLink>{fee}</FeeLink> on a $300k or $600k loan. {conformingClaim}.
          </p>
          <FeeInlineDisclosure />
        </DisclosureSurface>
      );
    case "mega-buy":
      return (
        <>
          <strong>
            <FeeLink tone="inherit">{fee}</FeeLink>
          </strong>
          <p>One flat lender origination fee covering underwriting, processing and the credit report.</p>
          <DisclosureSurface>
            <p className="fee-disclosure-inline">
              Same <FeeLink>{fee}</FeeLink> on a $300k or $600k loan.
            </p>
            <FeeInlineDisclosure variant="tight" />
          </DisclosureSurface>
        </>
      );
    case "mega-refi":
      return (
        <>
          <strong>
            <FeeLink tone="inherit">{fee}</FeeLink>
          </strong>
          <p>The same flat lender fee applies when you refinance. Third-party costs are itemized on your Loan Estimate.</p>
          <DisclosureSurface>
            <p className="fee-disclosure-inline">
              {conformingClaim}.
            </p>
            <FeeInlineDisclosure variant="tight" />
          </DisclosureSurface>
        </>
      );
    default:
      return null;
  }
}

export function RepresentativeExample({
  defaultOpen = false,
  anchor = false,
}: {
  defaultOpen?: boolean;
  anchor?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();
  const examples = feeExampleConfig.examples;

  useEffect(() => {
    if (window.location.hash !== "#example") return;
    setOpen(true);
    const frame = window.requestAnimationFrame(() => {
      document.getElementById("example")?.scrollIntoView({ block: "start" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="fee-example-block" id={anchor ? "example" : undefined}>
      <button
        type="button"
        className="fee-disclosure-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? "Hide representative example and APR" : "Show representative example and APR"}
      </button>
      <div className="fee-disclosure-panel" id={panelId} hidden={!open}>
        <h3>Representative example and APR</h3>
        <p>
          Lender: United Fidelity Funding Corp. d/b/a HomeLoanAgents, NMLS #34381. Loans made or arranged pursuant to a
          California Financing Law license. State licenses: <Link href="/licensing">homeloanagents.com/licensing</Link>.
        </p>
        <div className="tbl-wrap">
          <table className="tbl fee-example-table">
            <thead>
              <tr>
                <th scope="col" />
                {examples.map((example) => (
                  <th key={example.id} scope="col">
                    {example.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Loan type</th>
                {examples.map((example) => (
                  <td key={example.id}>{example.loanType}</td>
                ))}
              </tr>
              <tr>
                <th scope="row">UFF program</th>
                {examples.map((example) => (
                  <td key={example.id}>{example.programName}</td>
                ))}
              </tr>
              <tr>
                <th scope="row">Purchase price</th>
                {examples.map((example) => (
                  <td key={example.id}>{formatFeeDollars(example.purchasePrice)}</td>
                ))}
              </tr>
              <tr>
                <th scope="row">Down payment</th>
                {examples.map((example) => (
                  <td key={example.id}>
                    {example.downPaymentPercent}% ({formatFeeDollars(example.downPayment)})
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">Loan amount</th>
                {examples.map((example) => (
                  <td key={example.id}>{formatFeeDollars(example.loanAmount)}</td>
                ))}
              </tr>
              <tr>
                <th scope="row">Loan-to-value</th>
                {examples.map((example) => (
                  <td key={example.id}>{example.ltvLabel}</td>
                ))}
              </tr>
              <tr className="apr">
                <th scope="row">Annual percentage rate (APR)</th>
                {examples.map((example) => (
                  <td key={example.id}>{formatFeePercent(example.apr)}</td>
                ))}
              </tr>
              <tr>
                <th scope="row">Interest rate</th>
                {examples.map((example) => (
                  <td key={example.id}>{formatFeePercent(example.rate)}</td>
                ))}
              </tr>
              <tr>
                <th scope="row">Discount points</th>
                {examples.map((example) => (
                  <td key={example.id}>{example.discountPoints}</td>
                ))}
              </tr>
              <tr>
                <th scope="row">Lender origination fee</th>
                {examples.map((example) => (
                  <td key={example.id}>{formatFeeDollars(example.lenderOriginationFee)}</td>
                ))}
              </tr>
              <tr>
                <th scope="row">Repayment</th>
                {examples.map((example) => (
                  <td key={example.id}>
                    {example.termMonths} monthly principal and interest payments of {formatFeeDollars(example.monthlyPI)}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Payments shown do not include taxes and insurance, so your actual monthly payment will be greater.</strong>
        </p>
        <p>
          Assumptions: credit score of 760; single-family detached primary residence in Missouri, with an escrow account
          for taxes and insurance; 30-day rate lock; no mortgage insurance; 0 discount points. The APR includes the{" "}
          {formatFeeDollars(feeExampleConfig.flatOriginationFee)} lender origination fee and prepaid interest for 16 days
          (closing on the 15th of a 30-day month, first payment due the 1st of the second month after closing). Appraisal
          (a separate pass-through charge), title, settlement, recording and other third-party fees, which vary by
          location, are not included in the APR and are itemized on your Loan Estimate.
        </p>
        <p>
          Rates and APRs as of {feeExampleConfig.asOfDateTime}. Rates change daily and are not locked until you lock with
          your loan officer. Pricing varies by state and loan amount. Your rate, APR and payment depend on your credit,
          loan amount, down payment, property, occupancy and location, and may be higher. This is not a commitment to
          lend. All loans are subject to credit, income and property approval. Not all products are available in all
          states. The {formatFeeDollars(feeExampleConfig.flatOriginationFee)} fee offer applies to conventional conforming
          loans of {formatFeeDollars(feeExampleConfig.sliderMin)} or more. Texas home equity (cash-out) loans: fees are
          limited by the Texas Constitution and may differ. Equal Housing Lender.
        </p>
      </div>
    </div>
  );
}

export function calculatorResultLabel(amount: number, percentFee: number, flatFee: number): string {
  const delta = percentFee - flatFee;
  if (delta > 0) {
    return `Hypothetical example. Difference in origination fee: ${formatFeeDollars(delta)}`;
  }
  if (delta === 0) {
    return "Hypothetical example. Difference in origination fee: $0. A 1% origination fee and the flat fee are the same amount.";
  }
  return `Hypothetical example. A 1% origination fee would be ${formatFeeDollars(percentFee)}, which is ${formatFeeDollars(-delta)} lower than the flat ${formatFeeDollars(flatFee)} fee.`;
}

export function calculatorShortQualifier(amount: number, percentFee: number, flatFee: number): string {
  const delta = percentFee - flatFee;
  const difference =
    delta > 0 ? formatFeeDollars(delta) : delta === 0 ? "$0" : formatFeeDollars(delta);
  return `Hypothetical example. Difference in origination fee: ${difference}. Example ${formatFeeDollars(amount)} loan, origination fee only. A lender with a different fee may offer a different rate, APR, points or lender credits.`;
}

export function calculatorFootnote(amount: number): string {
  const basis = calculatorBasisExample();
  const percentFee = amount * 0.01;
  const flatFee = feeExampleConfig.flatOriginationFee;
  const atBasis = amount === basis.loanAmount;
  const comparison = atBasis
    ? `Compares a hypothetical 1% origination fee (${formatFeeDollars(percentFee)}) with our flat ${formatFeeDollars(flatFee)} lender origination fee on an example ${formatFeeDollars(amount)} loan (Example 2 in our representative example: ${formatFeePercent(basis.apr)} APR, ${formatFeePercent(basis.rate)} interest rate, 30-year fixed, ${basis.downPaymentPercent}% down, ${basis.termMonths} monthly principal and interest payments of ${formatFeeDollars(basis.monthlyPI)}; taxes and insurance not included, so the actual payment will be greater; as of ${feeExampleConfig.asOfDate}).`
    : `Compares a hypothetical 1% origination fee (${formatFeeDollars(percentFee)}) with our flat ${formatFeeDollars(flatFee)} lender origination fee on an example ${formatFeeDollars(amount)} loan. For a representative example with APR, see our examples. As of ${feeExampleConfig.asOfDate}.`;
  return `Hypothetical example only, not an offer, quote or Loan Estimate. ${comparison} Origination fee only. Lenders price differently, and a lender with a different fee may offer a different interest rate, APR, discount points or lender credits, so your total cost depends on the rate as well as fees. Third-party costs, prepaid items and any points you choose are not included. Compare Section A, Origination Charges, and the APR on each Loan Estimate you receive. Lender: United Fidelity Funding Corp. d/b/a HomeLoanAgents, NMLS #34381.`;
}
