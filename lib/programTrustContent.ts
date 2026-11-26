import { FLAT_ORIGINATION_FEE } from "./constants";
import { marketingPhotos } from "./marketingPhotos";
import { programPhotoByPath, type ProgramTilePath } from "./programTilePhotos";

export type MarketingPhoto = (typeof marketingPhotos)[keyof typeof marketingPhotos];

export type Breadcrumb = { label: string; href?: string };

export type KeyFact = { k: string; v: string; d: string; highlight?: boolean };

export type SiblingLink = { href: string; title: string; description: string; current?: boolean };

export type EligibilityCard = { title: string; body: string };

export type LaneOwner = "ai" | "hu" | "you";

export type HowItWorksLane = { title: string; body: string; owners: LaneOwner[] };

export type DocumentChecklistGroup = { title: string; items: string[] };

export type TimelineOwner = "ai" | "hu" | "you";

export type TimelineStep = { title: string; body: string; owners: TimelineOwner[] };

export type ReviewerRole = {
  kind: "ai" | "hu";
  title: string;
  initials?: string;
  body: string;
  decides?: boolean;
};

export type FaqItem = { q: string; a: string };

export type IllustrativeFeeRow = { label: string; value: string };

export type ProgramNote = { title: string; body: string; variant?: "honest" | "default" };

export type ProgramTrustConfig = {
  slug: string;
  path: string;
  metadata: { title: string; description: string };
  breadcrumbs: Breadcrumb[];
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    photo: MarketingPhoto;
    primaryCta?: { href: string; label: string };
    secondaryCta?: { href: string; label: string };
  };
  keyFacts: KeyFact[];
  fit: {
    headline: string;
    lead: string;
    bodyParagraphs: string[];
    siblings: SiblingLink[];
  };
  eligibility: {
    headline: string;
    lead?: string;
    cards: EligibilityCard[];
    footnote: string;
  };
  howItWorks: {
    headline: string;
    lead?: string;
    lanes: HowItWorksLane[];
  };
  documentChecklist: {
    headline: string;
    lead: string;
    groups: DocumentChecklistGroup[];
    footnote: string;
  };
  timeline: {
    headline: string;
    lead: string;
    steps: TimelineStep[];
  };
  reviewers: {
    headline: string;
    lead: string;
    roles: ReviewerRole[];
  };
  fees: {
    headline: string;
    lead: string;
    amount: string;
    leftLead: string;
    included: string[];
    excluded: string[];
    footnote?: string;
    illustrativeComparison?: { caption: string; rows: IllustrativeFeeRow[] };
  };
  faqLead: string;
  faqs: FaqItem[];
  programNotes?: ProgramNote[];
  closingCompliance: string;
  subnavCta?: { href: string; label: string };
  embedIllustrativeTool?: "mortgage-payment" | "affordability";
};

const flatFeeAmount = `$${FLAT_ORIGINATION_FEE.toLocaleString()}`;

const flatFeeFact: KeyFact = {
  k: "Lender fee",
  v: `${flatFeeAmount} flat`,
  d: "Covers underwriting, processing, and the credit report on loans we originate.",
  highlight: true,
};

const complianceFootnote =
  "All programs are subject to underwriting, investor guidelines, property appraisal, and documentation. We do not guarantee approval, rates, terms, or closing timelines.";

const closingCompliance =
  "HomeLoanAgents is a trade name of United Fidelity Funding Corp., NMLS #34381, a licensed mortgage lender. This page is educational and not a commitment to lend. Rates, payments, and program availability vary and are not guaranteed.";

const standardDocumentGroups: DocumentChecklistGroup[] = [
  {
    title: "Income & employment",
    items: [
      "Recent pay stubs (typically last 30 days)",
      "W-2s or tax returns if self-employed or commissioned",
      "Two years of federal tax returns when required by guidelines",
      "Employer contact information for verification",
    ],
  },
  {
    title: "Assets & funds to close",
    items: [
      "Two months of bank or investment statements (all pages)",
      "Documentation for large deposits if requested",
      "Gift letter and donor statements when gift funds are used",
      "Ledger for earnest money if already paid",
    ],
  },
  {
    title: "Credit & identity",
    items: [
      "Government-issued photo ID",
      "Authorization to pull credit (provided during application)",
      "Letters of explanation for major credit events if applicable",
    ],
  },
  {
    title: "Property & program-specific",
    items: [
      "Purchase contract and addenda (purchase transactions)",
      "Homeowners insurance quote when available",
      "Program certificates or eligibility docs when required (VA, FHA, etc.)",
      "Condo questionnaire or HOA docs when applicable",
    ],
  },
];

const standardLanes: HowItWorksLane[] = [
  {
    owners: ["you", "ai"],
    title: "Share goals and start your file",
    body: "You tell us whether you are buying, refinancing, or comparing programs. AI agents structure your application and flag the documents needed for your scenario.",
  },
  {
    owners: ["ai", "hu"],
    title: "Organize documents and run initial review",
    body: "Agents gather uploads, label them for underwriting, and surface gaps early. A licensed loan officer reviews the file for program fit before it moves forward.",
  },
  {
    owners: ["hu"],
    title: "Underwrite, disclose, and close with supervision",
    body: "A human underwriter makes the credit decision. You receive Loan Estimate and Closing Disclosure forms with itemized costs before you commit to move forward.",
  },
];

const standardTimeline: TimelineStep[] = [
  {
    title: "Start online",
    body: "Create your file, explore programs, and see requested documents. No obligation to proceed.",
    owners: ["you", "ai"],
  },
  {
    title: "Application & disclosures",
    body: "Complete the loan application and receive initial disclosures, including a Loan Estimate when applicable.",
    owners: ["you", "hu"],
  },
  {
    title: "Processing & verification",
    body: "Income, assets, and identity are verified. The property is appraised when required.",
    owners: ["ai", "hu"],
  },
  {
    title: "Underwriting decision",
    body: "A human underwriter issues approval, suspension, or denial based on guidelines and your documentation.",
    owners: ["hu"],
  },
  {
    title: "Closing & funding",
    body: "You review the Closing Disclosure, sign final documents, and the loan funds according to your closing schedule.",
    owners: ["you", "hu"],
  },
];

const standardReviewers: ReviewerRole[] = [
  {
    kind: "ai",
    title: "Workflow agent",
    body: "Tracks your checklist, nudges for missing items, and keeps status visible. It does not approve or deny credit.",
  },
  {
    kind: "hu",
    title: "Licensed loan officer",
    initials: "LO",
    body: "Explains program options, reviews your application for completeness, and answers questions about disclosures and timing.",
  },
  {
    kind: "hu",
    title: "Human underwriter",
    initials: "UW",
    body: "Evaluates credit, capacity, collateral, and compliance with investor guidelines. Responsible for the lending decision.",
    decides: true,
  },
];

const standardFeeBlock = {
  headline: "Transparent lender pricing",
  amount: flatFeeAmount,
  included: [
    "Loan processing and file setup",
    "Underwriting review",
    "Credit report (lender-ordered)",
  ],
  excluded: [
    "Appraisal and inspection fees",
    "Title, escrow, and recording charges",
    "Prepaid taxes, insurance, and interest",
    "Government or program fees (FHA UFMIP, VA funding fee, etc.)",
  ],
  leftLead:
    "One flat lender origination fee instead of a percentage of your loan amount, disclosed on your Loan Estimate.",
};

function loanSiblings(current: string): SiblingLink[] {
  const links: SiblingLink[] = [
    { href: "/loans/conventional", title: "Conventional", description: "Agency guidelines for many borrowers" },
    { href: "/loans/fha", title: "FHA", description: "Government-insured purchase and refinance" },
    { href: "/loans/va", title: "VA", description: "Benefit for eligible veterans and service members" },
    { href: "/loans/jumbo", title: "Jumbo", description: "Loan amounts above conforming limits" },
    { href: "/loans/fixed", title: "Fixed-rate", description: "Stable principal and interest payments" },
    { href: "/loans/arm-vs-fixed", title: "ARM vs. fixed", description: "Compare adjustable and fixed structures" },
    { href: "/loans/usda", title: "USDA", description: "Rural and suburban areas for income-qualified borrowers" },
    {
      href: "/loans/non-qm",
      title: "Bank statement & self-employed",
      description: "Alternative documentation when programs are available",
    },
  ];
  return links.map((link) => ({ ...link, current: link.href === current }));
}

function refiSiblings(current: string): SiblingLink[] {
  const links: SiblingLink[] = [
    { href: "/refinance/rate-and-term", title: "Rate-and-term", description: "Change rate, term, or both" },
    { href: "/refinance/cash-out", title: "Cash-out", description: "Access equity when guidelines allow" },
    { href: "/loans/fixed", title: "Fixed-rate loans", description: "Predictable monthly payments" },
    { href: "/loans/conventional", title: "Conventional", description: "Common agency refinance path" },
  ];
  return links.map((link) => ({ ...link, current: link.href === current }));
}

function basePurchaseBreadcrumbs(programLabel: string): Breadcrumb[] {
  return [
    { label: "Home", href: "/" },
    { label: "Loan programs", href: "/loans/conventional" },
    { label: programLabel },
  ];
}

function baseRefiBreadcrumbs(programLabel: string): Breadcrumb[] {
  return [
    { label: "Home", href: "/" },
    { label: "Refinance", href: "/refinance/rate-and-term" },
    { label: programLabel },
  ];
}

type PageSeed = Omit<
  ProgramTrustConfig,
  "howItWorks" | "documentChecklist" | "timeline" | "reviewers" | "fees" | "faqLead" | "hero"
> & {
  hero: Omit<ProgramTrustConfig["hero"], "photo"> & { photo?: MarketingPhoto };
  fees?: Partial<ProgramTrustConfig["fees"]>;
  howItWorks?: Partial<ProgramTrustConfig["howItWorks"]>;
};

function heroPhotoForPath(path: string, fallback?: MarketingPhoto): MarketingPhoto {
  if (path in programPhotoByPath) {
    return programPhotoByPath[path as ProgramTilePath];
  }
  if (fallback) {
    return fallback;
  }
  throw new Error(`Program trust page "${path}" needs a hero photo or an entry in programPhotoByPath.`);
}

export function finishPage(seed: PageSeed): ProgramTrustConfig {
  return {
    ...seed,
    hero: {
      ...seed.hero,
      photo: heroPhotoForPath(seed.path, seed.hero.photo),
    },
    howItWorks: {
      headline: seed.howItWorks?.headline ?? "AI keeps the file moving. Humans decide.",
      lead:
        seed.howItWorks?.lead ??
        "You always know who owns the next step, agents for speed and organization, licensed staff for credit decisions.",
      lanes: seed.howItWorks?.lanes ?? standardLanes,
    },
    documentChecklist: {
      headline: "Documents you may be asked for",
      lead: "Exact items depend on your employment, assets, and transaction type. Use this list to prepare; your licensed loan team confirms what applies via email or text.",
      groups: standardDocumentGroups,
      footnote:
        "Checking items is for your planning only. Uploads and verification happen in your secure loan file after you apply.",
    },
    timeline: {
      headline: "Typical milestones",
      lead: "Timelines vary with market conditions, appraisal scheduling, and how quickly documents are provided. This is a general map, not a guarantee.",
      steps: standardTimeline,
    },
    reviewers: {
      headline: "Who touches your file",
      lead: "AI agents accelerate organization. Mortgage professionals remain accountable for supervised lending decisions.",
      roles: standardReviewers,
    },
    fees: {
      lead:
        seed.fees?.lead ??
        "Our lender fee is flat, not a percentage of your loan amount. Third-party and prepaid charges are listed separately on your Loan Estimate.",
      ...standardFeeBlock,
      ...seed.fees,
      headline: seed.fees?.headline ?? standardFeeBlock.headline,
      amount: seed.fees?.amount ?? standardFeeBlock.amount,
      leftLead: seed.fees?.leftLead ?? standardFeeBlock.leftLead,
      included: seed.fees?.included ?? standardFeeBlock.included,
      excluded: seed.fees?.excluded ?? standardFeeBlock.excluded,
    },
    faqLead: "Straight answers about this program. Your Loan Estimate remains the source of truth for your specific loan.",
  };
}



export const conventionalProgramTrust: ProgramTrustConfig = finishPage({
  slug: "conventional",
  path: "/loans/conventional",
  metadata: {
    title: "Conventional loans",
    description:
      "Conventional mortgages follow Fannie Mae and Freddie Mac guidelines with fixed and adjustable options where offered. Compare eligibility, documents, fees, and timeline.",
  },
  breadcrumbs: basePurchaseBreadcrumbs("Conventional"),
  hero: {
    eyebrow: "Agency conventional",
    h1: "Conventional loans for buyers and homeowners who fit agency guidelines.",
    lead: "Conventional financing is the most common path for borrowers with documented income, acceptable credit, and a down payment that meets investor requirements. We help you see how agency guidelines apply before you shop or refinance.",
    secondaryCta: { href: "/pricing", label: "See flat lender fee" },
  },
  keyFacts: [
    flatFeeFact,
    {
      k: "Typical use",
      v: "Purchase or refinance",
      d: "Primary homes, second homes, and investment properties may qualify with different requirements.",
    },
    {
      k: "Down payment",
      v: "Often 3%–20%+",
      d: "Minimums depend on occupancy, credit, and whether mortgage insurance applies.",
    },
    {
      k: "Structure",
      v: "Fixed or ARM",
      d: "Choose a stable payment or a loan with a fixed introductory period, when offered.",
    },
  ],
  fit: {
    headline: "When conventional financing is worth a look",
    lead: "Conventional loans work well when you have verifiable income, manageable debt levels, and funds to close that meet agency rules.",
    bodyParagraphs: [
      "Borrowers with solid credit often use conventional loans to buy a primary home, refinance an existing mortgage, or finance a second home. Loan limits follow conforming caps unless you move to a jumbo program.",
      "If your down payment is below 20% on a primary residence, private mortgage insurance may apply until you reach sufficient equity. We explain how that affects your payment by email or text.",
      "We do not quote rates on marketing pages. After you share your scenario, disclosures will show payments, costs, and whether private mortgage insurance or other conditions apply.",
    ],
    siblings: loanSiblings("/loans/conventional"),
  },
  eligibility: {
    headline: "Common conventional guidelines",
    lead: "Investors set minimum credit, debt-to-income, and documentation standards. Your file is reviewed against the specific program selected.",
    cards: [
      { title: "Credit history", body: "Underwriting reviews credit scores, payment patterns, and major credit events. Higher scores may access more options." },
      { title: "Income documentation", body: "W-2, salaried, self-employed, and commissioned borrowers each follow documented income rules." },
      { title: "Debt-to-income", body: "Monthly obligations compared to gross income must fall within program limits, often with compensating factors considered." },
      { title: "Down payment & reserves", body: "Minimum down payment varies by occupancy and purpose. Reserves may be required for higher-risk profiles." },
      { title: "Property type", body: "Single-family homes, condos, and multi-unit properties may qualify with different review steps." },
      { title: "Loan amount", body: "Balances within conforming limits follow agency conventional guidelines; larger amounts may require jumbo financing." },
    ],
    footnote: complianceFootnote,
  },
  faqs: [
    {
      q: "What is the difference between conforming and conventional?",
      a: "Conventional means not government-insured. Conforming conventional loans fall within FHFA loan limits and follow Fannie Mae or Freddie Mac rules. Larger loans may be conventional jumbo.",
    },
    {
      q: "Can I use gift funds for my down payment?",
      a: "Gift funds are often allowed when documented with a gift letter and evidence the donor had funds to give. Guidelines vary by occupancy and loan-to-value.",
    },
    {
      q: "Do you charge a percentage origination fee?",
      a: `No. Our lender origination fee is ${flatFeeAmount} flat, disclosed on your Loan Estimate. It is not based on your loan size.`,
    },
    {
      q: "Is private mortgage insurance required?",
      a: "When your down payment is less than 20% on many primary-home purchases, mortgage insurance is typically required until equity thresholds are met or you request removal per investor rules.",
    },
    {
      q: "Can I refinance into a conventional loan?",
      a: "Yes, when you meet credit, income, equity, and property guidelines. A rate-and-term or cash-out refinance may be available depending on occupancy and loan-to-value.",
    },
    {
      q: "Will starting online hurt my credit?",
      a: "Exploring options and creating a file does not pull credit. A full application includes credit authorization, which we explain first by email or text.",
    },
    {
      q: "Who makes the approval decision?",
      a: "A human underwriter reviews your file and issues the credit decision. AI agents organize documents but do not approve loans.",
    },
  ],
  closingCompliance,
});

export const fhaProgramTrust: ProgramTrustConfig = finishPage({
  slug: "fha",
  path: "/loans/fha",
  metadata: {
    title: "FHA loans",
    description:
      "FHA-insured mortgages offer flexible down payment and credit guidelines for eligible borrowers. Learn requirements, mortgage insurance, documents, and our flat lender fee.",
  },
  breadcrumbs: basePurchaseBreadcrumbs("FHA"),
  hero: {
    eyebrow: "FHA insured",
    h1: "FHA loans when you want flexible down payment guidelines.",
    lead: "FHA loans are insured by the Federal Housing Administration and originated by licensed lenders like us. They can help qualified borrowers purchase or refinance with down payments that are often lower than many conventional options.",
  },
  keyFacts: [
    flatFeeFact,
    { k: "Insurance", v: "FHA mortgage insurance", d: "Upfront and annual premiums apply per HUD rules for most FHA loans." },
    { k: "Down payment", v: "Often 3.5%+", d: "Minimum depends on credit score and program version; gifts may be allowed when documented." },
    { k: "Use", v: "Primary residences", d: "FHA is designed for homes you intend to occupy; other occupancies follow different rules." },
  ],
  fit: {
    headline: "Who FHA is designed to help",
    lead: "FHA may fit borrowers rebuilding credit, buying a first home, or refinancing an existing FHA loan with limited equity.",
    bodyParagraphs: [
      "FHA guidelines can be more flexible than many conventional programs for credit and down payment, but they still require documented income and an acceptable property.",
      "You will pay FHA mortgage insurance premiums as part of the program. Your Loan Estimate shows how premiums affect your cash to close and monthly payment.",
      "We originate FHA loans; HUD sets the insurance rules. We are not a government agency.",
    ],
    siblings: loanSiblings("/loans/fha"),
  },
  eligibility: {
    headline: "FHA basics we review in underwriting",
    cards: [
      { title: "Occupancy", body: "Generally limited to primary residences you will occupy within required timeframes." },
      { title: "Credit", body: "FHA tolerates lower scores than many conventional programs, subject to lender overlays and automated findings." },
      { title: "Income", body: "Stable, documentable income with two-year history where required; self-employed files need tax returns." },
      { title: "Property standards", body: "Appraisal must show the home meets FHA minimum property requirements." },
      { title: "Loan limits", body: "Maximum loan amounts vary by county and are published annually by FHA." },
      { title: "Mortgage insurance", body: "Upfront and annual MIP are required for most FHA loans; cancellation rules differ from conventional PMI." },
    ],
    footnote: complianceFootnote,
  },
  programNotes: [
    {
      title: "Not a government website",
      body: "United Fidelity Funding Corp. is a private lender. FHA insurance is administered by HUD; we are not affiliated with HUD or FHA.",
      variant: "honest",
    },
  ],
  faqs: [
    { q: "What is FHA mortgage insurance?", a: "FHA charges an upfront mortgage insurance premium at closing and an annual premium paid monthly. Amounts depend on loan amount, term, and loan-to-value." },
    { q: "Can FHA be used on a refinance?", a: "Yes. FHA offers streamline and full credit qualifying refinances when guidelines are met and the loan is FHA-insured." },
    { q: "Are FHA rates lower than conventional?", a: "Rates change daily and depend on your profile. Compare Loan Estimates for the same loan amount and structure rather than relying on marketing claims." },
    { q: "What credit score do I need?", a: "FHA has published minimums, but lenders may set higher floors. We review your full file, not a single number." },
    { q: "Is the $3,500 fee the only cost?", a: `The ${flatFeeAmount} flat fee is our lender origination charge. Appraisal, title, recording, prepaids, and FHA UFMIP are separate line items on your Loan Estimate.` },
    { q: "Can I remove FHA mortgage insurance?", a: "FHA MIP rules differ from conventional PMI. For many FHA loans, MIP remains for the life of the loan unless you refinance out of FHA or meet specific legacy removal rules." },
    { q: "Do you guarantee approval?", a: "No. FHA insurance does not guarantee loan approval; underwriting must still verify eligibility and property condition." },
  ],
  closingCompliance,
});

export const vaProgramTrust: ProgramTrustConfig = finishPage({
  slug: "va",
  path: "/loans/va",
  metadata: {
    title: "VA loans",
    description:
      "VA loans for eligible veterans, active-duty service members, and surviving spouses. Understand COE requirements, funding fees, our lender fee, and underwriting supervision.",
  },
  breadcrumbs: basePurchaseBreadcrumbs("VA"),
  hero: {
    eyebrow: "VA benefit",
    h1: "VA loans for borrowers with eligible military service.",
    lead: "VA loans are guaranteed by the U.S. Department of Veterans Affairs for qualifying borrowers. Benefits can include no down payment on many purchases and no monthly mortgage insurance, subject to program rules and lender guidelines.",
  },
  keyFacts: [
    {
      ...flatFeeFact,
      d: "Flat lender origination on loans we originate. VA program limits, exemption status, and seller credits may affect cash to close.",
    },
    { k: "Eligibility", v: "Certificate of Eligibility", d: "We help verify VA entitlement; COE confirms benefit use." },
    { k: "Down payment", v: "Often $0", d: "When entitlement covers the price and guidelines are met; exceptions apply." },
    { k: "Funding fee", v: "May apply", d: "VA funding fee can be financed or paid at closing; some borrowers are exempt." },
  ],
  fit: {
    headline: "When the VA benefit is a strong match",
    lead: "VA financing rewards eligible service with flexible guidelines and competitive structures when the property and occupancy qualify.",
    bodyParagraphs: [
      "Eligible veterans and active-duty members frequently use VA for a first purchase, a subsequent home with restored entitlement, or a VA streamline refinance (IRRRL) when available.",
      "You may need a Certificate of Eligibility and must occupy the home as your primary residence for most VA purchase loans.",
      "Seller concessions and VA appraisal requirements can affect your transaction; we cover those early by email or text.",
    ],
    siblings: loanSiblings("/loans/va"),
  },
  eligibility: {
    headline: "VA eligibility factors",
    cards: [
      { title: "Service history", body: "Minimum active-duty or guard/reserve service lengths apply; surviving spouses may qualify under specific rules." },
      { title: "Certificate of Eligibility", body: "Documents available entitlement. We can often obtain it electronically during your application." },
      { title: "Occupancy", body: "Generally must certify you will occupy the home as your primary residence within VA timeframes." },
      { title: "Credit & income", body: "VA focuses on residual income and credit history; we apply investor overlays and AUS findings." },
      { title: "Property", body: "Must pass VA minimum property requirements and appraisal review." },
      { title: "Loan limits", body: "VA does not cap loan amounts, but entitlement and down payment may be needed above county limits without full entitlement." },
    ],
    footnote: complianceFootnote,
  },
  programNotes: [
    {
      title: "VA affiliation disclaimer",
      body: "HomeLoanAgents and United Fidelity Funding Corp. are private mortgage lenders. We are not affiliated with the U.S. Department of Veterans Affairs, the VA, or any government agency.",
      variant: "honest",
    },
    {
      title: "Lender fee and program limits",
      body: `Our ${flatFeeAmount} flat lender origination fee applies to VA loans we originate, but total cash to close still depends on VA funding fees, third-party charges, and any program or entitlement limits on your transaction. Your Loan Estimate lists each charge.`,
    },
  ],
  fees: {
    lead: `We charge a ${flatFeeAmount} flat lender origination fee on VA loans we originate. The VA funding fee is a separate government charge that may be financed or paid at closing and is subject to exemption rules.`,
    footnote:
      "VA funding fee percentages depend on service type, down payment, and whether this is your first use of the benefit. Exempt veterans may not pay a funding fee.",
  },
  faqs: [
    { q: "Is there really no down payment?", a: "Many eligible borrowers purchase with no down payment when entitlement covers the sales price and underwriting approves the file. Higher prices or partial entitlement may require cash down." },
    { q: "What is the VA funding fee?", a: "A one-time fee that helps sustain the VA loan program. It may be added to the loan amount or paid at closing. Some borrowers are exempt based on disability status." },
    { q: "Do you charge $3,500 on every VA loan?", a: `We use a ${flatFeeAmount} flat lender origination fee on VA loans we originate, subject to program limits, state rules, and your specific Loan Estimate. Third-party and VA fees are listed separately.` },
    { q: "Can I reuse my VA benefit?", a: "Entitlement can be restored after paying off a VA loan and disposing of the property, or when another qualified veteran assumes your loan, subject to VA rules." },
    { q: "What is a VA IRRRL?", a: "An Interest Rate Reduction Refinance Loan streamlines refinancing an existing VA loan when guidelines are met. Credit and appraisal rules differ from a purchase." },
    { q: "Who approves my VA loan?", a: "We originate the loan; the VA guarantees a portion against loss. A human underwriter at our company makes the credit decision." },
    { q: "Are VA loans only for first-time buyers?", a: "No. Eligible borrowers may use the benefit multiple times when entitlement is available." },
    { q: "Will I pay monthly mortgage insurance?", a: "VA loans do not have monthly mortgage insurance like FHA or conventional PMI, though the funding fee and lender fees still apply." },
  ],
  closingCompliance,
});


export const jumboProgramTrust: ProgramTrustConfig = finishPage({
  slug: "jumbo",
  path: "/loans/jumbo",
  metadata: {
    title: "Jumbo loans",
    description:
      "Jumbo mortgages finance loan amounts above conforming limits with documented income and assets. See eligibility, flat lender fee vs percentage pricing, and underwriting flow.",
  },
  breadcrumbs: basePurchaseBreadcrumbs("Jumbo"),
  hero: {
    eyebrow: "Above conforming limits",
    h1: "Jumbo loans when your balance exceeds agency caps.",
    lead: "Jumbo financing is designed for high-balance mortgages that do not fit conforming loan limits. Underwriting is often documentation-heavy, with emphasis on reserves, credit depth, and property type.",
  },
  keyFacts: [
    flatFeeFact,
    { k: "Loan size", v: "Above conforming", d: "Limits update annually; your county and occupancy determine the threshold." },
    { k: "Documentation", v: "Full financial picture", d: "Income, assets, and sometimes multiple appraisals or condo reviews." },
    { k: "Reserves", v: "Often required", d: "Months of housing payments in liquid assets after closing may be needed." },
  ],
  fit: {
    headline: "When jumbo financing makes sense",
    lead: "Jumbo programs fit borrowers purchasing or refinancing high-value homes who can document income and assets to investor standards.",
    bodyParagraphs: [
      "If your loan amount exceeds the conforming limit in your area, a jumbo loan may be the appropriate structure. Options exist for primary homes, second homes, and investment properties with stricter overlays.",
      "Because jumbo investors take more risk, expect deeper scrutiny of employment history, asset sources, and credit depth.",
      "Our flat lender fee is designed so you do not pay more to originate simply because your loan is larger.",
    ],
    siblings: loanSiblings("/loans/jumbo"),
  },
  eligibility: {
    headline: "Typical jumbo underwriting themes",
    cards: [
      { title: "Credit depth", body: "Higher scores and clean payment histories are common expectations; recent credit events require explanation." },
      { title: "Income", body: "Salaried, bonus, RSU, and self-employed borrowers need thorough documentation and sometimes two appraisals of business stability." },
      { title: "Assets & reserves", body: "Large down payments and post-closing reserves are frequently required." },
      { title: "Loan-to-value", body: "Lower LTV ratios may be required than on conforming loans, especially for condos or second homes." },
      { title: "Property", body: "Non-warrantable condos, unique properties, or acreage may need exception review." },
      { title: "Debt-to-income", body: "Tighter DTI caps than conforming are common, though compensating factors may help." },
    ],
    footnote: complianceFootnote,
  },
  fees: {
    lead: `Jumbo loans often carry percentage-based origination fees at other lenders. Our ${flatFeeAmount} flat lender fee is the same whether your balance is modestly above conforming or in the multi-million range.`,
    illustrativeComparison: {
      caption: "Illustrative comparison only. Actual charges on your Loan Estimate may differ based on program, state, and third-party providers.",
      rows: [
        { label: "Hypothetical $1.2M loan at 1% origination (other lender)", value: "$12,000" },
        { label: `Our flat lender origination fee (illustrative)`, value: flatFeeAmount },
        { label: "Illustrative difference", value: "$8,500" },
      ],
    },
    footnote: "The illustrative table uses rounded figures for education. Your Loan Estimate is the binding disclosure of lender and third-party charges.",
  },
  faqs: [
    { q: "What is the conforming loan limit?", a: "FHFA publishes annual limits by county. Amounts above that threshold generally require jumbo or other non-conforming financing." },
    { q: "Why do jumbo loans need more documentation?", a: "Investors who buy jumbo loans take property and recession risk without agency guarantees, so they require stronger proof of repayment ability." },
    { q: "Is your fee still $3,500 on a jumbo?", a: `Yes. Our lender origination fee is ${flatFeeAmount} flat on jumbo loans we originate, not a percentage of the loan amount.` },
    { q: "Are jumbo rates always higher?", a: "Pricing depends on market conditions, credit, LTV, and investor appetite. Compare formal offers rather than assumptions." },
    { q: "Can I refinance into a jumbo?", a: "Yes, when your balance and equity meet investor guidelines for rate-and-term or cash-out refinances." },
    { q: "Do you portfolio jumbo loans?", a: "Loans may be sold to investors or held according to our operating model; your note and servicing transfer disclosures explain what to expect." },
    { q: "How long does jumbo underwriting take?", a: "Extra documentation and appraisal steps can add time. Your loan team provides status updates in your file." },
  ],
  closingCompliance,
});

export const fixedProgramTrust: ProgramTrustConfig = finishPage({
  slug: "fixed",
  path: "/loans/fixed",
  metadata: {
    title: "Fixed-rate mortgages",
    description:
      "Fixed-rate loans keep principal and interest steady for the life of the term. Learn how fixed rates fit purchase and refinance goals, documents, fees, and supervision.",
  },
  breadcrumbs: basePurchaseBreadcrumbs("Fixed-rate"),
  hero: {
    eyebrow: "Payment stability",
    h1: "Fixed-rate mortgages with the same principal and interest each month.",
    lead: "A fixed-rate loan locks your note rate for the full term so principal and interest payments do not change with index movements. Taxes and insurance in escrow can still adjust.",
  },
  keyFacts: [
    flatFeeFact,
    { k: "Terms", v: "10–30 years", d: "Common terms include 30-, 20-, and 15-year amortization when offered." },
    { k: "Predictability", v: "Stable P&I", d: "Budgeting is easier when your core housing payment does not reset with market indices." },
    { k: "Programs", v: "Conventional, FHA, VA", d: "Fixed rates are available across multiple loan types when guidelines are met." },
  ],
  fit: {
    headline: "Why borrowers choose a fixed rate",
    lead: "Fixed rates appeal when you plan to stay in the home, value payment certainty, or want to lock in financing while rates are acceptable to you.",
    bodyParagraphs: [
      "If you are comparing a fixed loan with an adjustable-rate mortgage, consider how long you will keep the loan and how payment changes would affect your budget.",
      "Shorter fixed terms build equity faster but carry higher monthly principal and interest than a 30-year loan at the same rate.",
      "Your rate is not guaranteed until it is locked according to our process and disclosed on your Loan Estimate.",
    ],
    siblings: loanSiblings("/loans/fixed"),
  },
  eligibility: {
    headline: "What affects your fixed-rate options",
    cards: [
      { title: "Program type", body: "Conventional, FHA, VA, and jumbo each set credit, down payment, and mortgage insurance rules." },
      { title: "Rate lock", body: "Locks protect against market movement for a defined period; extensions may carry fees." },
      { title: "Discount points", body: "Optional points can buy a lower rate; cost and benefit are shown on your Loan Estimate." },
      { title: "Loan term", body: "Longer terms lower the payment but increase total interest over time." },
      { title: "Occupancy", body: "Primary, second home, and investment loans carry different pricing and guidelines." },
      { title: "Escrow", body: "Property taxes and homeowners insurance are often collected monthly even when the note rate is fixed." },
    ],
    footnote: complianceFootnote,
  },
  faqs: [
    { q: "Does fixed mean my payment never changes?", a: "Principal and interest stay the same, but escrowed taxes and insurance can change, which adjusts your total monthly payment." },
    { q: "When should I lock my rate?", a: "Timing depends on your purchase contract, market movement, and tolerance for risk. Licensed loan officers explain lock policies in your disclosures and file updates." },
    { q: "Can I choose a 15-year fixed?", a: "Yes, when offered and affordable within debt-to-income guidelines. Shorter terms usually have lower rates but higher payments." },
    { q: "Is a fixed rate better than an ARM?", a: "It depends on how long you keep the loan and future rate paths. See our ARM vs. fixed page for a side-by-side structure comparison." },
    { q: "Are refinance fixed rates the same as purchase?", a: "Pricing differs by occupancy, equity, credit, and market. Compare Loan Estimates for each purpose." },
    { q: "What fees apply besides the lender fee?", a: "Appraisal, title, recording, prepaids, and optional points are listed separately on disclosures." },
    { q: "Who sets my final rate?", a: "Market pricing plus your credit, LTV, and program determine the rate offered, subject to lock and underwriting approval." },
  ],
  closingCompliance,
});

export const armProgramTrust: ProgramTrustConfig = finishPage({
  slug: "arm-vs-fixed",
  path: "/loans/arm-vs-fixed",
  metadata: {
    title: "ARM vs. fixed-rate mortgages",
    description:
      "Compare adjustable-rate mortgages with fixed-rate loans: introductory periods, caps, and when each structure may fit. Documents, fees, and human underwriting explained.",
  },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Loan programs", href: "/loans/conventional" },
    { label: "ARM vs. fixed" },
  ],
  hero: {
    eyebrow: "Rate structure",
    h1: "ARM vs. fixed: know how your payment can change.",
    lead: "Adjustable-rate mortgages (ARMs) typically offer a fixed-rate introductory period, then adjust on a schedule based on an index plus margin. Fixed-rate loans keep the same principal and interest for the life of the loan.",
    secondaryCta: { href: "/loans/fixed", label: "Fixed-rate overview" },
  },
  keyFacts: [
    flatFeeFact,
    { k: "ARM intro", v: "Fixed period first", d: "Common structures include 5/6, 7/6, and 10/6 ARMs when offered." },
    { k: "Caps", v: "Limits on adjustments", d: "Periodic and lifetime caps constrain how much the rate can move after the fixed period." },
    { k: "Fixed option", v: "Stable P&I", d: "No scheduled rate changes on the note for the chosen term." },
  ],
  fit: {
    headline: "Choosing between adjustable and fixed",
    lead: "The right structure depends on how long you expect to keep the loan, your appetite for payment risk, and current market pricing.",
    bodyParagraphs: [
      "ARMs may offer a lower initial payment during the fixed period, which can help if you plan to sell or refinance before adjustments begin.",
      "Fixed rates trade some upfront savings for long-term certainty, which many primary-home buyers prefer.",
      "We explain index, margin, caps, and worst-case scenarios on your disclosures rather than marketing snapshots.",
    ],
    siblings: loanSiblings("/loans/arm-vs-fixed"),
  },
  eligibility: {
    headline: "Underwriting considerations for ARMs and fixed loans",
    cards: [
      { title: "Qualifying rate", body: "ARMs are often underwritten using a higher qualifying rate after the introductory period, per investor rules." },
      { title: "Program availability", body: "Not every ARM term is offered on every program; conventional ARMs differ from government-insured options." },
      { title: "Caps & floors", body: "Disclosures list initial adjustment, periodic, and lifetime caps so you can model payment risk." },
      { title: "Index & margin", body: "After the fixed period, your rate moves with the specified index plus a fixed margin disclosed upfront." },
      { title: "Conversion options", body: "Some ARMs allow conversion to fixed rates for a fee; availability varies by investor." },
      { title: "Refinance timing", body: "Many borrowers plan to refinance before adjustments; there is no guarantee rates or equity will allow it." },
    ],
    footnote: complianceFootnote,
  },
  faqs: [
    { q: "What does 5/6 ARM mean?", a: "A common structure: the rate is fixed for five years, then can adjust every six months thereafter, subject to caps in your note." },
    { q: "Can my payment go down?", a: "If indexes fall after the fixed period, your rate and payment could decrease, but there is no guarantee of future rate paths." },
    { q: "Is an ARM cheaper than fixed?", a: "Introductory ARM rates are often lower than fixed rates at the same time, but long-term cost depends on adjustments and how long you keep the loan." },
    { q: "Do you charge the same lender fee on ARMs?", a: `Yes. Our ${flatFeeAmount} flat lender origination fee applies to ARMs and fixed-rate loans we originate.` },
    { q: "How do I compare offers?", a: "Review the Loan Estimate, note rate, APR, caps, and projected payments. We do not provide rate quotes on this page." },
    { q: "Who explains caps and indexes?", a: "Your licensed loan officer shares program disclosures and adjustable-rate details by email or text before you lock." },
    { q: "Can I refinance out of an ARM later?", a: "Refinancing may be available if you qualify and market conditions allow; it is not guaranteed before adjustments begin." },
    { q: "Which is better for a first-time buyer?", a: "Many first-time buyers prefer fixed rates for predictability, but the best choice depends on your timeline and budget stress tests." },
  ],
  closingCompliance,
});

export const rateAndTermRefiProgramTrust: ProgramTrustConfig = finishPage({
  slug: "rate-and-term-refi",
  path: "/refinance/rate-and-term",
  metadata: {
    title: "Rate-and-term refinance",
    description:
      "Rate-and-term refinances change your interest rate, loan term, or both without taking cash out at closing. Review eligibility, break-even thinking, documents, and flat lender fee.",
  },
  breadcrumbs: baseRefiBreadcrumbs("Rate-and-term"),
  hero: {
    eyebrow: "Refinance",
    h1: "Rate-and-term refinance without cash out at closing.",
    lead: "A rate-and-term refinance replaces your existing mortgage with a new loan to change the rate, amortization, or both. Closing costs and prepaids apply; cash back at closing is limited to minor amounts per guidelines.",
  },
  keyFacts: [
    flatFeeFact,
    { k: "Purpose", v: "Rate or term change", d: "Not designed to access large amounts of home equity." },
    { k: "Equity", v: "LTV limits apply", d: "Appraisal and program rules set how much you can borrow against value." },
    {
      k: "MI removal",
      v: "May be a goal",
      d: "Refinancing can remove FHA MIP or conventional PMI when equity and program rules allow.",
    },
  ],
  fit: {
    headline: "When a rate-and-term refi is worth modeling",
    lead: "Consider refinancing when lower rates, shorter terms, or removing mortgage insurance could improve your long-term cost after accounting for closing charges.",
    bodyParagraphs: [
      "Break-even analysis compares monthly savings with total closing costs, including lender and third-party fees. We help you see those numbers on disclosures, not hypothetical rate ads.",
      "Shortening your term can build equity faster even if the monthly payment rises.",
      "If you plan to move soon, closing costs may outweigh benefits; there is no one-size-fits-all answer.",
    ],
    siblings: refiSiblings("/refinance/rate-and-term"),
  },
  eligibility: {
    headline: "Refinance guidelines we review",
    cards: [
      { title: "Seasoning", body: "Some programs require time since the last loan closed or since payments began." },
      { title: "Credit & income", body: "Current credit, employment, and debt-to-income are re-verified." },
      { title: "Appraisal", body: "Property value is confirmed; low appraisals can affect LTV and approval." },
      { title: "Occupancy", body: "Primary, second home, and investment refinances follow different overlays." },
      { title: "Cash back limits", body: "Rate-and-term refinances limit cash returned at closing, often to the lesser of closing costs or a small dollar amount." },
      { title: "Subordinate liens", body: "Existing second liens may need to be paid off or subordinated." },
    ],
    footnote: complianceFootnote,
  },
  faqs: [
    { q: "How is this different from cash-out?", a: "Rate-and-term is for changing rate or length without meaningful cash back. Cash-out refinances let you tap equity when LTV guidelines allow." },
    { q: "What is a break-even point?", a: "When cumulative monthly savings equal closing costs. It depends on your rate, term, fees, and how long you keep the loan." },
    { q: "Will I skip payments?", a: "Refinances include per-diem interest and prepaid items; you may skip one monthly payment but not all housing costs." },
    { q: "Is the lender fee still flat?", a: `Yes. Refinances use the same ${flatFeeAmount} flat lender origination fee, plus third-party charges on your Loan Estimate.` },
    { q: "Can I refinance from FHA to conventional?", a: "Sometimes, to remove mortgage insurance or change terms when equity and credit meet guidelines." },
    { q: "Does starting a refi application affect my credit?", a: "A full application includes credit authorization. Exploring options online first does not pull credit." },
    { q: "How long does a refi take?", a: "Timelines vary with appraisal turnaround, title work, and document collection. Your file shows status as it moves." },
  ],
  closingCompliance,
});

export const cashOutRefiProgramTrust: ProgramTrustConfig = finishPage({
  slug: "cash-out-refi",
  path: "/refinance/cash-out",
  metadata: {
    title: "Cash-out refinance",
    description:
      "Cash-out refinances replace your mortgage with a larger loan and deliver cash at closing when guidelines allow. Learn LTV limits, uses, documents, and lender fee disclosure.",
  },
  breadcrumbs: baseRefiBreadcrumbs("Cash-out"),
  hero: {
    eyebrow: "Equity access",
    h1: "Cash-out refinance when you need funds from home equity.",
    lead: "Cash-out refinancing pays off your existing mortgage and provides cash at closing based on available equity, credit, and program loan-to-value limits. Uses include debt payoff, renovations, or other goals you document.",
  },
  keyFacts: [
    flatFeeFact,
    { k: "Equity", v: "LTV caps", d: "Maximum cash-out depends on occupancy, credit, and program; appraisal sets value." },
    { k: "Uses", v: "Your goals", d: "Lenders may ask how funds will be used; certain prohibited uses apply." },
    { k: "Payment", v: "New loan payment", d: "A larger balance can raise principal and interest even if the rate falls." },
  ],
  fit: {
    headline: "When cash-out can fit, and when to pause",
    lead: "Cash-out works when you have equity, a clear purpose, and a payment that fits your budget after closing.",
    bodyParagraphs: [
      "Consolidating higher-rate debt may reduce monthly obligations, but it converts unsecured debt into debt secured by your home.",
      "Home improvements can add value, but projects are not guaranteed to return every dollar spent.",
      "We do not recommend cash-out solely because rates moved; your Loan Estimate shows the true cost and payment.",
    ],
    siblings: refiSiblings("/refinance/cash-out"),
  },
  eligibility: {
    headline: "Cash-out underwriting themes",
    cards: [
      { title: "Loan-to-value", body: "Maximum LTV is lower than many rate-and-term refinances, especially on investment properties." },
      { title: "Credit", body: "Stronger credit profiles often access better LTV and pricing tiers." },
      { title: "Seasoning", body: "Many programs require you to own the home for a minimum period before cash-out." },
      { title: "Appraisal", body: "Value must support the new loan amount; low appraisals limit cash available." },
      { title: "Debt-to-income", body: "New payment plus other debts must fit program DTI limits." },
      { title: "Occupancy", body: "Primary residence cash-out typically allows more equity access than investment properties." },
    ],
    footnote: complianceFootnote,
  },
  faqs: [
    { q: "How much cash can I take out?", a: "It depends on appraised value, existing liens, program LTV limits, and closing costs. Your Loan Estimate shows cash to borrower." },
    { q: "Is cash-out the same as a HELOC?", a: "No. Cash-out replaces your first mortgage with a new loan. A HELOC is a separate line of credit; licensed mortgage professionals help you compare options by email or text when you apply." },
    { q: "Are there tax implications?", a: "We do not provide tax advice. Consult a tax professional about deductibility of mortgage interest on cash-out proceeds." },
    { q: "What is the lender fee?", a: `Our ${flatFeeAmount} flat origination fee applies to cash-out refinances we originate, in addition to third-party closing costs.` },
    { q: "Can I use cash-out on an investment property?", a: "Some programs allow it with lower LTV limits and stricter reserves. Availability varies by investor." },
    { q: "Will my payment go up?", a: "Often yes, because the loan balance increases. Rate changes can offset or add to that effect." },
    { q: "How soon can I do cash-out after a purchase?", a: "Seasoning rules vary by program; we confirm timelines when we know your occupancy and prior closing date." },
    { q: "Who approves the transaction?", a: "A human underwriter issues the credit decision after reviewing income, assets, appraisal, and program rules." },
  ],
  closingCompliance,
});

export const programTrustByPath: Record<string, ProgramTrustConfig> = {
  "/loans/conventional": conventionalProgramTrust,
  "/loans/fha": fhaProgramTrust,
  "/loans/va": vaProgramTrust,
  "/loans/jumbo": jumboProgramTrust,
  "/loans/fixed": fixedProgramTrust,
  "/loans/arm-vs-fixed": armProgramTrust,
  "/refinance/rate-and-term": rateAndTermRefiProgramTrust,
  "/refinance/cash-out": cashOutRefiProgramTrust,
};

export const allProgramTrustPages = Object.values(programTrustByPath);
