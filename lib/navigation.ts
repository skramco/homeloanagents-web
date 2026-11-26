export type NavChild = { href: string; label: string; description?: string };

export type NavGroup = {
  label: string;
  href?: string;
  children?: NavChild[];
};

export const primaryNav: NavGroup[] = [
  {
    label: "Buy a Home",
    children: [
      { href: "/buy", label: "Buying a home", description: "Purchase overview" },
      { href: "/buy/first-time-homebuyers", label: "First-time homebuyers" },
      { href: "/buy/pre-approval", label: "Pre-approval" },
    ],
  },
  {
    label: "Refinance",
    children: [
      { href: "/refinance", label: "Refinance overview" },
      { href: "/refinance/rate-and-term", label: "Rate-and-term refinance" },
      { href: "/refinance/cash-out", label: "Cash-out refinance" },
    ],
  },
  {
    label: "Loan Options",
    children: [
      { href: "/loans/conventional", label: "Conventional" },
      { href: "/loans/fha", label: "FHA" },
      { href: "/loans/va", label: "VA" },
      { href: "/loans/usda", label: "USDA" },
      { href: "/loans/jumbo", label: "Jumbo" },
      { href: "/loans/arm-vs-fixed", label: "ARM vs fixed" },
      { href: "/loans/non-qm", label: "Bank statement & self-employed" },
    ],
  },
  {
    label: "Resources",
    children: [
      { href: "/learn", label: "Learning center" },
      { href: "/learn/mortgage-process", label: "Mortgage process steps" },
      { href: "/learn/what-affects-your-rate", label: "What affects your rate" },
      { href: "/learn/closing-costs", label: "Closing costs explained" },
      { href: "/learn/how-much-house-can-i-afford", label: "How much house can I afford" },
      { href: "/learn/credit-score-basics", label: "Credit score basics" },
      { href: "/calculators", label: "Calculators" },
    ],
  },
  { label: "Why HomeLoanAgents", href: "/why-homeloanagents" },
  { label: "Pricing", href: "/pricing" },
];

export const loanTypeTiles = [
  { href: "/loans/conventional", title: "Conventional", blurb: "Traditional financing for many buyers." },
  { href: "/loans/fha", title: "FHA", blurb: "Government-backed options with flexible guidelines." },
  { href: "/loans/va", title: "VA", blurb: "For eligible veterans and service members." },
  { href: "/loans/usda", title: "USDA", blurb: "Rural and eligible-area programs." },
  { href: "/loans/jumbo", title: "Jumbo", blurb: "Higher loan amounts above conforming limits." },
  { href: "/loans/non-qm", title: "Self-employed & bank statement", blurb: "We offer financing for many borrower types." },
];