export type MegaMenuLink = { href: string; title: string; description: string };

export type MegaMenuColumn = {
  title: string;
  links: MegaMenuLink[];
  feature?: {
    eyebrow: string;
    amount: string;
    body: string;
    href: string;
    hrefLabel: string;
  };
};

export const buyMega: MegaMenuColumn = {
  title: "Buy a home",
  links: [
    {
      href: "/loans/conventional",
      title: "Conventional purchase",
      description: "The most common loan for buyers with steady credit",
    },
    { href: "/buy/pre-approval", title: "Check your readiness", description: "A person reviews where you stand before you shop" },
    { href: "/buy/first-time-homebuyers", title: "First-time buyers", description: "What to expect, step by step" },
    { href: "/loans/fha", title: "FHA loans", description: "Flexible credit and down payment guidelines" },
    { href: "/loans/va", title: "VA loans", description: "For eligible veterans, service members and surviving spouses" },
  ],
  feature: {
    eyebrow: "One lender fee",
    amount: "$3,500",
    body: "Flat lender origination fee covering underwriting, processing and the credit report. Same on a $300k or $1.5M loan.",
    href: "/pricing",
    hrefLabel: "See the full fee breakdown →",
  },
};

export const refiMega: MegaMenuColumn = {
  title: "Refinance",
  links: [
    { href: "/refinance/rate-and-term", title: "Rate-and-term refinance", description: "Change your rate, term or both" },
    { href: "/refinance/cash-out", title: "Cash-out refinance", description: "Turn some of your equity into cash" },
    { href: "/learn/mortgage-process", title: "Is refinancing worth it?", description: "A break-even walkthrough, with no rate pitch" },
  ],
  feature: {
    eyebrow: "Refinance pricing",
    amount: "$3,500",
    body: "The same flat lender fee applies when you refinance. Third-party costs are itemized on your Loan Estimate.",
    href: "/pricing",
    hrefLabel: "How the fee works →",
  },
};

export const loansMega: MegaMenuColumn = {
  title: "Programs",
  links: [
    { href: "/loans/conventional", title: "Conventional", description: "Agency guidelines, flexible property types" },
    { href: "/loans/fha", title: "FHA", description: "Government-insured, flexible guidelines" },
    { href: "/loans/va", title: "VA", description: "Earned benefit for eligible borrowers" },
    { href: "/loans/jumbo", title: "Jumbo", description: "Above conforming loan limits" },
    { href: "/loans/fixed", title: "Fixed-rate", description: "Principal and interest stay the same" },
    { href: "/loans/arm-vs-fixed", title: "Adjustable-rate (ARM)", description: "Fixed period, then adjusts" },
    { href: "/refinance/rate-and-term", title: "Refinance", description: "New rate, new term" },
    { href: "/refinance/cash-out", title: "Cash-out", description: "Access home equity" },
  ],
};

export const drawerSections = [
  { title: "Buy", links: buyMega.links },
  { title: "Refinance", links: refiMega.links },
  { title: "Loan options", links: loansMega.links },
];

export const primaryNavSimple = [
  { href: "/pricing", label: "Pricing" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/learn", label: "Learn" },
  { href: "/licensing", label: "About" },
] as const;