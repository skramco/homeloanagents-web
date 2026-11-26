import { BORROWER_CONTACT_CHANNELS, FLAT_ORIGINATION_FEE } from "./constants";

export type LearnGuideBlock =
  | { type: "h2"; id: string; title: string; paragraphs: string[] }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; body: string; variant?: "honest" };

export type LearnGuideConfig = {
  path: string;
  metadata: { title: string; description: string };
  crumbLabel: string;
  eyebrow: string;
  h1: string;
  lead: string;
  metaLine: string;
  toc: { id: string; label: string }[];
  tldr?: string[];
  blocks: LearnGuideBlock[];
  related: { href: string; title: string }[];
  sideCta: { eyebrow: string; title: string; body: string; href: string; linkLabel: string };
};

const flatFee = `$${FLAT_ORIGINATION_FEE.toLocaleString()}`;

export const mortgageProcessGuide: LearnGuideConfig = {
  path: "/learn/mortgage-process",
  metadata: {
    title: "Mortgage process steps",
    description:
      "From application through underwriting, disclosures, and closing: major milestones on a typical home loan with AI-assisted organization and human supervision.",
  },
  crumbLabel: "Mortgage process",
  eyebrow: "Guide · Process",
  h1: "Mortgage process steps from application to closing",
  lead: "A plain-English map of what usually happens on a purchase or refinance. Timelines vary; nothing here is a promise of approval, rate, or closing date.",
  metaLine: "Updated Nov 26, 2026 · 7 min read",
  toc: [
    { id: "start", label: "Start your file" },
    { id: "disclosures", label: "Disclosures" },
    { id: "processing", label: "Processing" },
    { id: "underwriting", label: "Underwriting" },
    { id: "closing", label: "Closing" },
    { id: "agents", label: "Where AI fits" },
  ],
  tldr: [
    "You apply and upload documents; AI agents organize the file while licensed staff supervise.",
    "Loan Estimate and Closing Disclosure show costs, including our flat lender origination fee when we originate your loan.",
    "A human underwriter issues the credit decision before closing.",
  ],
  blocks: [
    {
      type: "h2",
      id: "start",
      title: "Start your file",
      paragraphs: [
        "You share your goal—buy, refinance, or compare programs—and complete an application. Credit is not pulled until you authorize it on a full application.",
        "At HomeLoanAgents, AI agents structure your checklist and flag missing items. Licensed loan officers review the file for program fit.",
      ],
    },
    {
      type: "h2",
      id: "disclosures",
      title: "Initial disclosures and Loan Estimate",
      paragraphs: [
        "Regulated disclosures explain your loan terms, costs, and consumer rights. The Loan Estimate lists lender charges (Section A), third-party fees, prepaids, and cash to close.",
        `Our lender origination fee is ${flatFee} flat on loans we originate, disclosed in Section A alongside any optional discount points you choose.`,
      ],
    },
    {
      type: "h2",
      id: "processing",
      title: "Processing and verification",
      paragraphs: [
        "Processors and agents verify income, assets, and employment; order appraisal when required; and coordinate title and insurance.",
        `You receive updates by ${BORROWER_CONTACT_CHANNELS}. Missing documents are the most common source of delay.`,
      ],
    },
    {
      type: "h2",
      id: "underwriting",
      title: "Underwriting decision",
      paragraphs: [
        "A human underwriter applies investor and program guidelines to your credit, capacity, and collateral. The outcome may be approval, conditional approval, suspension, or denial.",
        "AI agents do not approve credit. They keep the file organized so underwriters can focus on the decision.",
      ],
    },
    {
      type: "h2",
      id: "closing",
      title: "Closing and funding",
      paragraphs: [
        "You receive a Closing Disclosure at least three business days before consummation on most loans, showing final numbers.",
        "Signing happens with a settlement agent or attorney depending on state. Funding follows your closing schedule and investor requirements.",
      ],
    },
    {
      type: "h2",
      id: "agents",
      title: "Where AI agents fit",
      paragraphs: [
        "Agents label uploads, remind you about missing documents, and keep milestones visible. Licensed loan officers and underwriters remain accountable for credit decisions and disclosures.",
        `Questions and updates go through ${BORROWER_CONTACT_CHANNELS}.`,
      ],
    },
  ],
  related: [
    { href: "/how-it-works", title: "How AI and humans share the work" },
    { href: "/learn/closing-costs", title: "Closing costs explained" },
    { href: "/buy/pre-approval", title: "Pre-approval overview" },
  ],
  sideCta: {
    eyebrow: "Flat fee",
    title: `${flatFee} lender origination`,
    body: "See what the flat fee covers and which costs stay separate.",
    href: "/learn/how-a-flat-origination-fee-works",
    linkLabel: "How the fee works →",
  },
};

export const whatAffectsRateGuide: LearnGuideConfig = {
  path: "/learn/what-affects-your-rate",
  metadata: {
    title: "What affects your rate",
    description:
      "Credit, loan program, occupancy, down payment, points, and market conditions influence mortgage pricing—without advertising rates on this page.",
  },
  crumbLabel: "What affects your rate",
  eyebrow: "Guide · Pricing factors",
  h1: "What affects your mortgage rate",
  lead: "No two files are identical. Marketing pages do not quote rates; your Loan Estimate reflects pricing after application.",
  metaLine: "Updated Nov 26, 2026 · 6 min read",
  toc: [
    { id: "credit", label: "Credit" },
    { id: "ltv", label: "Down payment & LTV" },
    { id: "program", label: "Program & occupancy" },
    { id: "points", label: "Points & credits" },
    { id: "market", label: "Market & lock" },
  ],
  tldr: [
    "Credit history, loan-to-value, and program type are core pricing inputs.",
    "Optional discount points buy a lower rate; lender credits may raise the rate to reduce upfront costs.",
    "Compare Loan Estimates on the same day with the same assumptions.",
  ],
  blocks: [
    {
      type: "h2",
      id: "credit",
      title: "Credit history and scores",
      paragraphs: [
        "Investors tier pricing by credit score bands. Recent late payments, collections, or bankruptcies can restrict programs.",
        "Authorized credit pulls during application show the scores lenders use. Checking your own credit is not the same tradeline data underwriters see.",
      ],
    },
    {
      type: "h2",
      id: "ltv",
      title: "Down payment and loan-to-value",
      paragraphs: [
        "Higher equity often improves pricing tiers because default risk falls. Mortgage insurance on low-down loans adds cost beyond the note rate.",
        "Appraised value sets LTV on purchases and refinances; a low appraisal can change pricing or loan amount.",
      ],
    },
    {
      type: "h2",
      id: "program",
      title: "Program type and occupancy",
      paragraphs: [
        "Conventional, FHA, VA, USDA, and jumbo each carry different fees and overlays. Investment properties and second homes typically have stricter guidelines than primary homes.",
      ],
    },
    {
      type: "callout",
      title: "We do not advertise rates here",
      body: "Any rate you see in a calculator or example elsewhere on the site is hypothetical unless it appears on your Loan Estimate after you apply.",
      variant: "honest",
    },
    {
      type: "h2",
      id: "points",
      title: "Points and lender credits",
      paragraphs: [
        "Discount points are optional upfront payments that reduce the interest rate. Lender credits may increase the rate in exchange for lower upfront lender charges.",
        "Section A of the Loan Estimate separates origination charges from points.",
      ],
    },
    {
      type: "h2",
      id: "market",
      title: "Market conditions and rate locks",
      paragraphs: [
        "Mortgage-backed securities markets move daily. A rate lock protects you from increases for a stated period if you qualify and pay any lock fees disclosed upfront.",
        `Licensed loan officers explain lock policies by ${BORROWER_CONTACT_CHANNELS}—not through unsolicited rate ads.`,
      ],
    },
  ],
  related: [
    { href: "/learn/how-a-flat-origination-fee-works", title: "Flat origination fee guide" },
    { href: "/learn/closing-costs", title: "Closing costs explained" },
    { href: "/pricing", title: "Pricing overview" },
  ],
  sideCta: {
    eyebrow: "Compare fairly",
    title: "Use Loan Estimates",
    body: "Same-day comparisons beat marketing snapshots.",
    href: "/learn/closing-costs",
    linkLabel: "Read closing costs guide →",
  },
};

export const closingCostsGuide: LearnGuideConfig = {
  path: "/learn/closing-costs",
  metadata: {
    title: "Closing costs explained",
    description:
      "Origination, third-party fees, prepaids, and escrows on the Loan Estimate and Closing Disclosure—educational, not a quote.",
  },
  crumbLabel: "Closing costs",
  eyebrow: "Guide · Disclosures",
  h1: "Closing costs explained",
  lead: "Your Loan Estimate groups costs so you can compare offers. This guide walks through the major buckets—not a personalized quote.",
  metaLine: "Updated Nov 26, 2026 · 7 min read",
  toc: [
    { id: "section-a", label: "Section A: origination" },
    { id: "third-party", label: "Third-party services" },
    { id: "prepaids", label: "Prepaids & escrow" },
    { id: "cash", label: "Cash to close" },
    { id: "compare", label: "Comparing offers" },
  ],
  tldr: [
    "Section A includes lender origination and optional discount points.",
        `Our lender origination fee is ${flatFee} flat when we originate your loan.`,
    "Appraisal, title, recording, prepaids, and program fees are separate lines.",
  ],
  blocks: [
    {
      type: "h2",
      id: "section-a",
      title: "Section A: origination charges",
      paragraphs: [
        "Origination pays for the lender's work to process and underwrite. Points, if you choose them, also appear here.",
        `We use a ${flatFee} flat lender origination fee covering underwriting, processing, and the lender-ordered credit report on loans we originate.`,
      ],
    },
    {
      type: "h2",
      id: "third-party",
      title: "Third-party and government charges",
      paragraphs: [
        "Appraisal, credit (if passed through), title, escrow, settlement, recording, and transfer taxes go to third parties or agencies.",
        "FHA UFMIP, VA funding fees, and USDA guarantee fees are program-specific and separate from our lender fee.",
      ],
    },
    {
      type: "h2",
      id: "prepaids",
      title: "Prepaids and initial escrow",
      paragraphs: [
        "Prepaid interest covers interest from closing to the end of the month. Escrow collects property taxes and homeowners insurance ahead of monthly billing.",
        "Escrow cushions may be collected at closing per investor rules.",
      ],
    },
    {
      type: "h2",
      id: "cash",
      title: "Cash to close vs. closing costs",
      paragraphs: [
        "Cash to close includes down payment or payoff of an old loan, closing costs, and prepaids, minus credits such as seller concessions when allowed.",
      ],
    },
    {
      type: "h2",
      id: "compare",
      title: "Comparing Loan Estimates",
      paragraphs: [
        "Request Loan Estimates on the same day for the same loan amount, program, and lock period when possible.",
        "Compare Section A, note rate, APR, total closing costs, and cash to close together—not one line in isolation.",
      ],
    },
  ],
  related: [
    { href: "/learn/how-a-flat-origination-fee-works", title: "How a flat fee works" },
    { href: "/learn/mortgage-process", title: "Mortgage process" },
    { href: "/pricing", title: "Pricing page" },
  ],
  sideCta: {
    eyebrow: "Our fee",
    title: `${flatFee} flat origination`,
    body: "Illustrative examples on the pricing page show how flat compares to percentage fees.",
    href: "/pricing",
    linkLabel: "See pricing →",
  },
};

export const affordGuide: LearnGuideConfig = {
  path: "/learn/how-much-house-can-i-afford",
  metadata: {
    title: "How much house can I afford",
    description:
      "Income, debts, down payment, and program guidelines shape affordability. Educational only—not a maximum loan offer.",
  },
  crumbLabel: "Affordability",
  eyebrow: "Guide · Budget",
  h1: "How much house can I afford?",
  lead: "Affordability blends verified income, debts, assets, credit, and the payment on your Loan Estimate—not a rule of thumb from a blog.",
  metaLine: "Updated Nov 26, 2026 · 6 min read",
  toc: [
    { id: "dti", label: "Debt-to-income" },
    { id: "down", label: "Down payment" },
    { id: "payment", label: "Total payment" },
    { id: "preapproval", label: "Pre-approval vs. wish list" },
    { id: "tools", label: "Illustrative tools" },
  ],
  tldr: [
    "Lenders compare housing payment and total debts to gross income using program limits.",
    "Taxes, insurance, HOA, and mortgage insurance belong in the payment you stress-test.",
    "Pre-approval letters reflect verified docs; calculators do not.",
  ],
  blocks: [
    {
      type: "h2",
      id: "dti",
      title: "Debt-to-income ratios",
      paragraphs: [
        "Front-end DTI focuses on housing payment versus income. Back-end DTI adds other monthly obligations like car loans, student loans, and minimum credit card payments.",
        "Programs set maximum ratios with room for compensating factors such as reserves or strong credit.",
      ],
    },
    {
      type: "h2",
      id: "down",
      title: "Down payment and reserves",
      paragraphs: [
        "More equity can improve options and reduce mortgage insurance costs when guidelines allow.",
        "Some programs require reserves—cash left after closing—even when the payment fits DTI.",
      ],
    },
    {
      type: "h2",
      id: "payment",
      title: "Think in total payment",
      paragraphs: [
        "Principal and interest are only part of the bill. Property taxes, homeowners insurance, HOA dues, and mortgage insurance change what is affordable month to month.",
      ],
    },
    {
      type: "h2",
      id: "preapproval",
      title: "Pre-approval vs. shopping wish list",
      paragraphs: [
        "A pre-approval review may issue a conditional maximum price. It is not a guarantee to lend at that amount on any home.",
        "Leave cushion for maintenance, savings, and life changes rather than shopping at the absolute maximum.",
      ],
    },
    {
      type: "callout",
      title: "Illustrative calculators",
      body: "Our affordability calculator uses simplified math. Your Loan Estimate after application is the meaningful number.",
      variant: "honest",
    },
    {
      type: "h2",
      id: "tools",
      title: "Next steps",
      paragraphs: [
        `Use calculators for rough scenarios, then read about pre-approval. Questions go through ${BORROWER_CONTACT_CHANNELS}.`,
      ],
    },
  ],
  related: [
    { href: "/calculators/affordability", title: "Affordability calculator (illustrative)" },
    { href: "/buy/pre-approval", title: "Pre-approval overview" },
    { href: "/learn/credit-score-basics", title: "Credit score basics" },
  ],
  sideCta: {
    eyebrow: "Pre-approval",
    title: "Budget before you shop",
    body: "See how human-reviewed pre-approval fits our process.",
    href: "/buy/pre-approval",
    linkLabel: "Pre-approval page →",
  },
};

export const creditScoreGuide: LearnGuideConfig = {
  path: "/learn/credit-score-basics",
  metadata: {
    title: "Credit score basics",
    description:
      "How credit scores affect mortgage program eligibility and pricing tiers—with no score guarantees or rate offers.",
  },
  crumbLabel: "Credit scores",
  eyebrow: "Guide · Credit",
  h1: "Credit score basics for mortgages",
  lead: "Scores influence which programs you may qualify for and which pricing tier an investor offers. Improving credit before you apply may help when guidelines allow.",
  metaLine: "Updated Nov 26, 2026 · 5 min read",
  toc: [
    { id: "which", label: "Which scores matter" },
    { id: "history", label: "History vs. score" },
    { id: "improve", label: "Before you apply" },
    { id: "pulls", label: "Credit pulls" },
  ],
  tldr: [
    "Mortgage lenders typically use tri-merge credit with multiple score models.",
    "Payment history, utilization, and recent inquiries all matter to underwriters.",
    "Rapid rescore may apply in limited cases; planning ahead is safer.",
  ],
  blocks: [
    {
      type: "h2",
      id: "which",
      title: "Which scores lenders use",
      paragraphs: [
        "Residential mortgage credit reports often include scores from Experian, Equifax, and TransUnion. Investors may use the middle score or a specific bureau's model.",
        "Free consumer scores from apps may differ from mortgage scores underwriters see.",
      ],
    },
    {
      type: "h2",
      id: "history",
      title: "History beyond the number",
      paragraphs: [
        "Bankruptcies, foreclosures, collections, and recent late payments can require waiting periods or explanation letters even when the score recovers.",
        "Authorized user accounts and disputed tradelines may need documentation.",
      ],
    },
    {
      type: "h2",
      id: "improve",
      title: "Steps before you apply",
      paragraphs: [
        "Pay down revolving balances to reduce utilization. Avoid opening new credit or financing large purchases before closing once you are in process.",
        "Pay bills on time—payment history is the largest score factor.",
      ],
    },
    {
      type: "h2",
      id: "pulls",
      title: "When credit is pulled",
      paragraphs: [
        "Exploring marketing pages does not pull credit. A full application includes authorization first.",
        "Multiple mortgage inquiries within a short shopping window may count as one inquiry for scoring in many cases; still, shop with purpose.",
      ],
    },
  ],
  related: [
    { href: "/learn/what-affects-your-rate", title: "What affects your rate" },
    { href: "/learn/mortgage-process", title: "Mortgage process" },
    { href: "/buy/first-time-homebuyers", title: "First-time buyers" },
  ],
  sideCta: {
    eyebrow: "Education only",
    title: "No score promises",
    body: "Underwriters review the full file, not a single number.",
    href: "/how-it-works",
    linkLabel: "How it works →",
  },
};

export const learnGuideByPath: Record<string, LearnGuideConfig> = {
  "/learn/mortgage-process": mortgageProcessGuide,
  "/learn/what-affects-your-rate": whatAffectsRateGuide,
  "/learn/closing-costs": closingCostsGuide,
  "/learn/how-much-house-can-i-afford": affordGuide,
  "/learn/credit-score-basics": creditScoreGuide,
};

export const learnHubArticles = [
  {
    href: "/learn/how-a-flat-origination-fee-works",
    category: "Pricing & fees",
    title: "How a flat origination fee works",
    lead: "Percentage vs. flat pricing, illustrative comparisons, and what Section A includes.",
    readTime: "6 min read",
  },
  {
    href: mortgageProcessGuide.path,
    category: "Process",
    title: mortgageProcessGuide.metadata.title,
    lead: mortgageProcessGuide.lead,
    readTime: "7 min read",
  },
  {
    href: whatAffectsRateGuide.path,
    category: "Pricing factors",
    title: whatAffectsRateGuide.metadata.title,
    lead: whatAffectsRateGuide.lead,
    readTime: "6 min read",
  },
  {
    href: closingCostsGuide.path,
    category: "Disclosures",
    title: closingCostsGuide.metadata.title,
    lead: closingCostsGuide.lead,
    readTime: "7 min read",
  },
  {
    href: affordGuide.path,
    category: "Budget",
    title: affordGuide.metadata.title,
    lead: affordGuide.lead,
    readTime: "6 min read",
  },
  {
    href: creditScoreGuide.path,
    category: "Credit",
    title: creditScoreGuide.metadata.title,
    lead: creditScoreGuide.lead,
    readTime: "5 min read",
  },
];