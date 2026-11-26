"use client";

import { useMemo, useState } from "react";

export function AffordabilityCalculator() {
  const [income, setIncome] = useState("120000");
  const [monthlyDebts, setMonthlyDebts] = useState("500");
  const [downPayment, setDownPayment] = useState("80000");
  const [rate, setRate] = useState("6.5");
  const [years, setYears] = useState("30");

  const result = useMemo(() => {
    const annual = parseFloat(income) || 0;
    const debts = parseFloat(monthlyDebts) || 0;
    const down = parseFloat(downPayment) || 0;
    const r = (parseFloat(rate) || 0) / 100 / 12;
    const n = (parseInt(years, 10) || 30) * 12;
    const grossMonthly = annual / 12;
    // Conservative illustrative DTI, not a lending decision
    const housingBudget = Math.max(0, grossMonthly * 0.28 - debts * 0.1);
    let maxLoan = 0;
    if (r > 0 && n > 0) {
      maxLoan = (housingBudget * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n));
    } else if (n > 0) {
      maxLoan = housingBudget * n;
    }
    const maxPrice = maxLoan + down;
    return { housingBudget, maxLoan, maxPrice };
  }, [income, monthlyDebts, downPayment, rate, years]);

  return (
    <div className="calculator">
      <p className="calculator-note">
        Illustrative only, not a pre-approval or affordability guarantee. We use a simple housing
        budget estimate; your situation may differ.
      </p>
      <div className="calculator-grid">
        <label>
          Annual household income
          <input type="number" min={0} value={income} onChange={(e) => setIncome(e.target.value)} />
        </label>
        <label>
          Monthly debt payments
          <input type="number" min={0} value={monthlyDebts} onChange={(e) => setMonthlyDebts(e.target.value)} />
        </label>
        <label>
          Down payment available
          <input type="number" min={0} value={downPayment} onChange={(e) => setDownPayment(e.target.value)} />
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
          <strong>Illustrative housing payment budget:</strong> $
          {result.housingBudget.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          /mo (P&amp;I focus)
        </p>
        <p>
          <strong>Rough max price range:</strong> $
          {result.maxPrice.toLocaleString(undefined, { maximumFractionDigits: 0 })}
        </p>
      </div>
    </div>
  );
}