"use client";

import Link from "next/link";
import { useState } from "react";

const tabs = [
  {
    id: "t-buy",
    label: "Buy a home",
    body: "Have a person review where you stand before you start making offers.",
    primary: { href: "/buy/pre-approval", label: "Get started" },
    secondary: { href: "/loans/conventional", label: "Compare purchase loans" },
  },
  {
    id: "t-refi",
    label: "Refinance",
    body: "See whether a new rate or term makes sense, with the break-even math shown.",
    primary: { href: "/get-started", label: "Start my refinance" },
    secondary: { href: "/refinance/rate-and-term", label: "How refinancing works" },
  },
  {
    id: "t-cash",
    label: "Cash out",
    body: "Explore turning some of your home equity into cash, with costs itemized.",
    primary: { href: "/get-started", label: "Explore cash-out" },
    secondary: { href: "/refinance/cash-out", label: "How cash-out works" },
  },
] as const;

export function IntentTabs() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("t-buy");

  return (
    <div className="intent" data-tabs>
      <div className="intent-tabs" role="tablist" aria-label="What are you planning?">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active === tab.id}
            aria-controls={tab.id}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className="intent-panel"
          role="tabpanel"
          id={tab.id}
          hidden={active !== tab.id}
        >
          <p>{tab.body}</p>
          <div className="intent-actions">
            <Link className="btn btn-primary btn-lg" href={tab.primary.href}>
              {tab.primary.label} <span className="arr">→</span>
            </Link>
            <Link className="btn btn-ghost btn-lg" href={tab.secondary.href}>
              {tab.secondary.label}
            </Link>
          </div>
        </div>
      ))}
      <p className="intent-fine">
        Starting online doesn&apos;t affect your credit score. Marketing calls and texts are a separate, optional
        choice, never bundled into &quot;Continue.&quot;
      </p>
    </div>
  );
}