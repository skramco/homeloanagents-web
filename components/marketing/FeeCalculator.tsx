"use client";

import { useEffect, useId, useState, type CSSProperties } from "react";
import { FLAT_ORIGINATION_FEE } from "@/lib/constants";

type FeeCalculatorProps = {
  light?: boolean;
};

const fmt = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;

export function FeeCalculator({ light }: FeeCalculatorProps) {
  const id = useId();
  const rangeId = `${id}-range`;
  const min = 150_000;
  const max = 2_000_000;
  const step = 25_000;
  const [amount, setAmount] = useState(750_000);
  const FLAT = FLAT_ORIGINATION_FEE;
  const PCT = 0.01;
  const maxPct = max * PCT;
  const pctFee = amount * PCT;
  const pctWidth = (pctFee / maxPct) * 100;
  const flatWidth = (FLAT / maxPct) * 100;
  const delta = pctFee - FLAT;

  let resultHtml = "";
  if (delta > 0) {
    resultHtml = `On a ${fmt(amount)} loan, a 1% origination fee would be <b>${fmt(pctFee)}</b>. Our flat lender fee is <b>${fmt(FLAT)}</b>, a difference of <b>${fmt(delta)}</b> in this example.`;
  } else if (delta < 0) {
    resultHtml = `On a ${fmt(amount)} loan, a 1% fee would be <b>${fmt(pctFee)}</b>, which is <b>${fmt(-delta)} less</b> than our flat ${fmt(FLAT)}. We'd rather tell you that up front. Compare Loan Estimates side by side.`;
  } else {
    resultHtml = `At ${fmt(amount)}, a 1% fee and our flat fee are the same: <b>${fmt(FLAT)}</b>.`;
  }

  useEffect(() => {
    const pct = ((amount - min) / (max - min)) * 100;
    document.documentElement.style.setProperty("--fee-range-pct", `${pct}%`);
  }, [amount]);

  return (
    <div className={`fee-calc${light ? " light" : ""}`} data-fee-calc>
      <div className="fc-top">
        <div>
          <div className="fc-label">Loan amount</div>
          <div className="fc-amount">{fmt(amount)}</div>
        </div>
        <span className="tag-illus">Illustrative example</span>
      </div>
      <label className="sr-only" htmlFor={rangeId}>
        Loan amount for the illustrative comparison
      </label>
      <input
        id={rangeId}
        className="fc-range"
        type="range"
        min={min}
        max={max}
        step={step}
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        style={{ "--p": `${((amount - min) / (max - min)) * 100}%` } as CSSProperties}
      />
      <div className="fc-ticks">
        <span>$150k</span>
        <span>$2M</span>
      </div>
      <div className="fc-bars">
        <div className="fc-row">
          <div className="nm">
            1% origination fee<small>Hypothetical percentage pricing</small>
          </div>
          <div className="fc-track">
            <div className="fc-fill pct" style={{ width: `${pctWidth}%` }} />
          </div>
          <div className="val">{fmt(pctFee)}</div>
        </div>
        <div className="fc-row">
          <div className="nm">
            HomeLoanAgents<small>Flat lender origination fee</small>
          </div>
          <div className="fc-track">
            <div className="fc-fill flat" style={{ width: `${flatWidth}%` }} />
          </div>
          <div className="val">{fmt(FLAT)}</div>
        </div>
      </div>
      <div className="fc-result" aria-live="polite" dangerouslySetInnerHTML={{ __html: resultHtml }} />
      <p className="fc-note">
        Illustrative example only, not an offer, quote or Loan Estimate. It compares a hypothetical 1% origination fee
        with our flat ${fmt(FLAT)} lender origination fee. Lenders price differently: some charge a smaller or no
        origination fee and recover costs through the rate, and discount points are separate. Third-party costs, prepaids
        and any points are not included. Compare the Origination Charges section of each Loan Estimate you receive.
      </p>
    </div>
  );
}