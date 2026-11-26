"use client";

import { useMemo, useState } from "react";

function monthlyPayment(principal: number, annualRate: number, years: number): number | null {
  if (principal <= 0 || years <= 0) return null;
  if (annualRate <= 0) return principal / (years * 12);
  const r = annualRate / 100 / 12;
  const n = years * 12;
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

export function MortgagePaymentCalculator() {
  const [homePrice, setHomePrice] = useState("400000");
  const [downPercent, setDownPercent] = useState("20");
  const [rate, setRate] = useState("6.5");
  const [years, setYears] = useState("30");

  const result = useMemo(() => {
    const price = parseFloat(homePrice) || 0;
    const down = (parseFloat(downPercent) || 0) / 100;
    const principal = price * (1 - down);
    const payment = monthlyPayment(principal, parseFloat(rate) || 0, parseInt(years, 10) || 30);
    return { principal, payment };
  }, [homePrice, downPercent, rate, years]);

  return (
    <div className="calculator">
      <p className="calculator-note">
        Estimate principal and interest only. Taxes, insurance, HOA, and mortgage insurance are not
        included. This is not a quote or guarantee of rate or payment.
      </p>
      <div className="calculator-grid">
        <label>
          Home price
          <input type="number" min={0} value={homePrice} onChange={(e) => setHomePrice(e.target.value)} />
        </label>
        <label>
          Down payment (%)
          <input type="number" min={0} max={100} value={downPercent} onChange={(e) => setDownPercent(e.target.value)} />
        </label>
        <label>
          Interest rate (%)
          <input type="number" min={0} step="0.125" value={rate} onChange={(e) => setRate(e.target.value)} />
        </label>
        <label>
          Loan term (years)
          <input type="number" min={1} max={40} value={years} onChange={(e) => setYears(e.target.value)} />
        </label>
      </div>
      <div className="calculator-result" aria-live="polite">
        <p>
          <strong>Loan amount:</strong> ${result.principal.toLocaleString(undefined, { maximumFractionDigits: 0 })}
        </p>
        <p>
          <strong>Est. monthly P&amp;I:</strong>{" "}
          {result.payment != null
            ? `$${result.payment.toLocaleString(undefined, { maximumFractionDigits: 0 })}`
            : "—"}
        </p>
      </div>
    </div>
  );
}