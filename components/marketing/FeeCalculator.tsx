"use client";

import { useId, useState, type CSSProperties } from "react";
import Link from "next/link";
import { FLAT_ORIGINATION_FEE } from "@/lib/constants";
import { feeExampleConfig, formatFeeDollars } from "@/lib/feeExampleConfig";
import {
  RepresentativeExample,
  calculatorFootnote,
  calculatorResultLabel,
  calculatorShortQualifier,
  useFeeCopyConfirmed,
} from "@/components/marketing/FeeDisclosure";

type FeeCalculatorProps = {
  light?: boolean;
  panelDefaultOpen?: boolean;
  anchorExample?: boolean;
  framed?: boolean;
};

const fmt = formatFeeDollars;

export function FeeCalculator({
  light,
  panelDefaultOpen = false,
  anchorExample = false,
  framed = false,
}: FeeCalculatorProps) {
  const confirmed = useFeeCopyConfirmed();
  if (!confirmed) return null;
  const calculator = (
    <ConfirmedFeeCalculator light={light} panelDefaultOpen={panelDefaultOpen} anchorExample={anchorExample} />
  );
  if (!framed) return calculator;
  return (
    <section className="section section-white">
      <div className="wrap">{calculator}</div>
    </section>
  );
}

function ConfirmedFeeCalculator({
  light,
  panelDefaultOpen,
  anchorExample,
}: {
  light?: boolean;
  panelDefaultOpen: boolean;
  anchorExample: boolean;
}) {
  const id = useId();
  const rangeId = `${id}-range`;
  const min = feeExampleConfig.sliderMin;
  const max = feeExampleConfig.sliderMax;
  const step = feeExampleConfig.sliderStep;
  const [amount, setAmount] = useState<number>(feeExampleConfig.sliderDefault);
  const flatFee = FLAT_ORIGINATION_FEE;
  const percentFee = amount * 0.01;
  const maxPercentFee = max * 0.01;
  const percentWidth = (percentFee / maxPercentFee) * 100;
  const flatWidth = (flatFee / maxPercentFee) * 100;
  const flatLabel = fmt(flatFee);

  return (
    <div>
      <div className={`fee-calc${light ? " light" : ""}`} data-fee-calc>
        <h3 className="fc-heading">Hypothetical example: 1% origination fee vs our flat {flatLabel} fee</h3>
        <div className="fc-top">
          <div>
            <div className="fc-label">Loan amount</div>
            <div className="fc-amount">{fmt(amount)}</div>
          </div>
          <span className="tag-illus">Hypothetical example</span>
        </div>
        <label className="sr-only" htmlFor={rangeId}>
          Loan amount for the hypothetical comparison
        </label>
        <input
          id={rangeId}
          className="fc-range"
          type="range"
          min={min}
          max={max}
          step={step}
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
          style={{ "--p": `${((amount - min) / (max - min)) * 100}%` } as CSSProperties}
        />
        <div className="fc-ticks">
          <span>{fmt(min)}</span>
          <span>{fmt(max)}</span>
        </div>
        <div className="fc-bars">
          <div className="fc-row">
            <div className="nm">
              1% origination fee<small>Hypothetical percentage pricing</small>
            </div>
            <div className="fc-track">
              <div className="fc-fill pct" style={{ width: `${percentWidth}%` }} />
            </div>
            <div className="val">{fmt(percentFee)}</div>
          </div>
          <div className="fc-row">
            <div className="nm">
              HomeLoanAgents<small>Flat lender origination fee</small>
            </div>
            <div className="fc-track">
              <div className="fc-fill flat" style={{ width: `${flatWidth}%` }} />
            </div>
            <div className="val">{flatLabel}</div>
          </div>
        </div>
        <div className="fc-result" aria-live="polite">
          <p>{calculatorResultLabel(amount, percentFee, flatFee)}</p>
          <div className="fee-disclosure-surface">
            <p className="fee-disclosure-inline">
              {calculatorShortQualifier(amount, percentFee, flatFee)}{" "}
              <Link className="fee-disclosure-link" href="/pricing#example">
                See representative example and APR
              </Link>
            </p>
          </div>
        </div>
        <div className="fee-disclosure-surface">
          <p className="fee-disclosure-inline">{calculatorFootnote(amount)}</p>
        </div>
      </div>
      <RepresentativeExample defaultOpen={panelDefaultOpen} anchor={anchorExample} />
    </div>
  );
}
