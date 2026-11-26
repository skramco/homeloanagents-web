import {
  AI_DISCLOSURE,
  BORROWER_COMMUNICATION_POLICY,
  BORROWER_CONTACT_CHANNELS,
  BORROWER_CONTACT_CHANNELS_DETAIL,
} from "./constants";
import { finishPage, type SiblingLink } from "./programTrustContent";

const closingCompliance =
  "HomeLoanAgents is a trade name of United Fidelity Funding Corp., NMLS #34381, a licensed mortgage lender. This page is educational and not a commitment to lend. Rates, payments, and program availability vary and are subject to underwriting.";

function buySiblings(current: string): SiblingLink[] {
  const links: SiblingLink[] = [
    { href: "/buy/pre-approval", title: "Check your readiness", description: "Human-reviewed budget letter before you shop" },
    {
      href: "/buy/first-time-homebuyers",
      title: "First-time buyers",
      description: "Milestones and documents for a first purchase",
    },
    { href: "/loans/conventional", title: "Conventional", description: "Agency purchase guidelines" },
    { href: "/loans/fha", title: "FHA", description: "Flexible down payment paths" },
    { href: "/loans/va", title: "VA", description: "Benefit for eligible service members" },
    { href: "/pricing", title: "Flat lender fee", description: "See our $3,500 origination fee context" },
  ];
  return links.map((link) => ({ ...link, current: link.href === current }));
}

function refiHubSiblings(current: string): SiblingLink[] {
  const links: SiblingLink[] = [
    { href: "/refinance/rate-and-term", title: "Rate-and-term", description: "Change rate or amortization" },
    { href: "/refinance/cash-out", title: "Cash-out", description: "Access equity when guidelines allow" },
    { href: "/learn/mortgage-process", title: "Mortgage process guide", description: "Educational walkthrough of milestones" },
    { href: "/pricing", title: "Refinance pricing", description: "Same flat lender fee on refinances" },
  ];
  return links.map((link) => ({ ...link, current: link.href === current }));
}

export const buyHubProcessTrust = finishPage({
  slug: "buy",
  path: "/buy",
  metadata: {
    title: "Buy a home",
    description:
      "Purchase mortgages with AI agents that organize your file and licensed loan officers and underwriters who review and decide. Flat $3,500 lender origination fee, documents, FAQs, and next steps.",
  },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Buy a home" },
  ],
  hero: {
    eyebrow: "Purchase",
    h1: "Buy a home with a supervised, agent-assisted mortgage process.",
    lead: `Whether you are upgrading, relocating, or buying your first home, we structure purchase financing with clear status updates by ${BORROWER_CONTACT_CHANNELS}. Rates, closing timelines, and credit outcomes depend on underwriting and documentation.`,
    secondaryCta: { href: "/buy/pre-approval", label: "Readiness overview" },
  },
  keyFacts: [
    {
      k: "Lender fee",
      v: "$3,500 flat",
      d: "Covers underwriting, processing, and the credit report on loans we originate.",
      highlight: true,
    },
    { k: "Supervision", v: "Humans decide", d: "Licensed loan officers and underwriters supervise lending decisions." },
    { k: "Updates", v: BORROWER_CONTACT_CHANNELS, d: BORROWER_CONTACT_CHANNELS_DETAIL },
    { k: "Programs", v: "Conventional, FHA, VA, USDA+", d: "Program fit depends on credit, income, property, and investor guidelines." },
  ],
  fit: {
    headline: "When our purchase workflow is a fit",
    lead: "We work best with borrowers who want transparent fees, organized document collection, and licensed professionals accountable for credit decisions.",
    bodyParagraphs: [
      "You may be comparing loan types, finishing a readiness review, or ready to make an offer. AI agents accelerate intake and checklist management; humans review exceptions and underwrite the file.",
      AI_DISCLOSURE,
      "Marketing pages do not quote rates or payments. Your Loan Estimate shows costs and terms after you start an application.",
    ],
    siblings: buySiblings("/buy"),
  },
  eligibility: {
    headline: "Purchase themes we review early",
    cards: [
      { title: "Occupancy", body: "Primary, second home, and investment purchases follow different down payment and reserve rules." },
      { title: "Credit & income", body: "Documented income and acceptable credit history are required; exact thresholds vary by program." },
      { title: "Down payment", body: "Minimums depend on loan type, occupancy, and whether mortgage insurance applies." },
      { title: "Property type", body: "Single-family, condo, and multi-unit homes may qualify with different review steps." },
      { title: "Contract timing", body: "Purchase deadlines affect how quickly documents and appraisal must be completed." },
      { title: "Readiness depth", body: "A budget letter may help your offer; it is subject to underwriting and verification on the home you choose." },
    ],
    footnote:
      "All purchase loans are subject to underwriting, appraisal, investor guidelines, and documentation. Rates, terms, and closing timelines depend on your file and market conditions.",
  },
  faqs: [
    { q: "Should I check readiness before I shop?", a: "Many sellers expect evidence you can finance the purchase. A readiness review may help you set a budget; final terms come from underwriting and your Loan Estimate." },
    { q: "How is your lender fee structured?", a: "We charge a $3,500 flat lender origination fee on purchase loans we originate, disclosed in Section A of your Loan Estimate." },
    { q: "Can agents see my documents?", a: "AI agents organize uploads in your secure file. Licensed staff access documents for underwriting and compliance." },
    { q: "Will I get rate quotes on this website?", a: "No. Rates and payments appear on formal disclosures after you apply, subject to lock policies and market conditions." },
    { q: "Who makes the approval decision?", a: "A human underwriter issues the credit decision after reviewing income, assets, credit, and property." },
    {
      q: "How do I get updates?",
      a: `We provide status updates by ${BORROWER_CONTACT_CHANNELS}. Call our inbound line anytime with questions.`,
    },
    { q: "Do you work with first-time buyers?", a: "Yes, when program guidelines are met. See our first-time buyer page for milestone-oriented education." },
  ],
  closingCompliance,
});

export const preApprovalProcessTrust = finishPage({
  slug: "pre-approval",
  path: "/buy/pre-approval",
  metadata: {
    title: "Check your readiness",
    description:
      "Understand readiness review before you shop: income and asset verification, human review, flat lender fee, and what a budget letter does and does not promise.",
  },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Buy a home", href: "/buy" },
    { label: "Check your readiness" },
  ],
  hero: {
    eyebrow: "Before you shop",
    h1: "Check your readiness: know your budget range before you write an offer.",
    lead: "A readiness review verifies income, assets, and credit as needed so you can house-hunt with a clearer picture. Final underwriting still requires a purchase contract, appraisal, and full file review. A budget letter is subject to verification and is not a commitment to lend.",
    secondaryCta: { href: "/pricing", label: "See flat lender fee" },
  },
  keyFacts: [
    {
      k: "Lender fee",
      v: "$3,500 flat",
      d: "Applies when you originate with us; disclosed on your Loan Estimate.",
      highlight: true,
    },
    { k: "Letter", v: "Not final underwriting", d: "Shows a conditional budget range sellers may request with an offer." },
    { k: "Review", v: "Human supervision", d: "Licensed staff review the file before a letter is issued." },
    { k: "Credit", v: "Authorized pull", d: "Full applications include credit authorization explained before any pull." },
  ],
  fit: {
    headline: "Who readiness review helps",
    lead: "Readiness review fits buyers who want a clearer picture of program fit and maximum price range before touring homes.",
    bodyParagraphs: [
      "Sellers and agents often ask for a budget letter with an offer. We review your documentation and credit within program guidelines, then issue a letter stating conditions.",
      "If your scenario changes, job, debts, or scores, refresh your readiness review before you raise your offer price.",
      `We follow up by ${BORROWER_CONTACT_CHANNELS} with document requests and status. Timing depends on documentation and review.`,
    ],
    siblings: buySiblings("/buy/pre-approval"),
  },
  eligibility: {
    headline: "What we verify for readiness review",
    cards: [
      { title: "Income", body: "Pay stubs, W-2s, tax returns, or business documentation depending on employment type." },
      { title: "Assets", body: "Bank and investment statements for down payment and reserves." },
      { title: "Credit", body: "Scores and payment patterns affect program eligibility; major events need explanation." },
      { title: "Debts", body: "Monthly obligations compared to income must fit program debt-to-income limits." },
      { title: "Program selection", body: "Conventional, FHA, VA, USDA, and other options have different floors." },
      { title: "Property assumptions", body: "Letters often assume primary residence; investment or second-home rules differ." },
    ],
    footnote:
      "Budget letters are conditional and expire. Property, appraisal, and final underwriting may change outcomes on your loan.",
  },
  faqs: [
    { q: "Is readiness review the same as final underwriting?", a: "No. Final underwriting requires a complete file, acceptable appraisal, and underwriter sign-off on your specific transaction." },
    { q: "How long is a letter valid?", a: "Expiration dates vary; credit, income, and program guidelines can also change. Refresh if your offer price or debts change." },
    { q: "Will readiness review hurt my credit?", a: "A full application includes a credit pull authorized by you. Exploring marketing content does not pull credit." },
    { q: "Can I get a budget letter without a property?", a: "Yes. Letters often state a maximum purchase price and loan amount subject to finding an eligible property." },
    { q: "What is the lender fee?", a: "Our $3,500 flat origination fee is disclosed when you apply and receive a Loan Estimate." },
    { q: "Who reviews my readiness file?", a: "Licensed loan officers and underwriters supervise; AI agents organize documents." },
    { q: "Is the letter amount fixed?", a: "No. The letter reflects current findings and may change if documentation, credit, or guidelines shift." },
  ],
  closingCompliance,
});

export const firstTimeBuyerProcessTrust = finishPage({
  slug: "first-time-homebuyers",
  path: "/buy/first-time-homebuyers",
  metadata: {
    title: "First-time homebuyers",
    description:
      "First-time buyer guide: milestones from readiness review through closing, documents, flat lender fee, FAQs, and supervised AI-assisted processing.",
  },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Buy a home", href: "/buy" },
    { label: "First-time buyers" },
  ],
  hero: {
    eyebrow: "First purchase",
    h1: "First-time homebuyers: milestones, documents, and supervised support.",
    lead: "Buying your first home involves new vocabulary and timelines. We pair AI agents that organize your checklist with licensed loan officers and underwriters who review and decide. Education here is not a loan offer.",
    secondaryCta: { href: "/learn/mortgage-process", label: "Mortgage process guide" },
  },
  keyFacts: [
    {
      k: "Lender fee",
      v: "$3,500 flat",
      d: "Same flat origination fee on loans we originate, regardless of loan size.",
      highlight: true,
    },
    { k: "Programs", v: "FHA, conventional 3%, VA+", d: "Options depend on credit, income, and occupancy." },
    { k: "Education", v: "Learn hub", d: "Guides on credit, closing costs, and affordability without rate pitches." },
    { k: "Supervision", v: "Licensed pros", d: "Underwriters make credit decisions; agents organize tasks." },
  ],
  fit: {
    headline: "What first-time buyers should expect",
    lead: "Expect document collection, disclosures, appraisal, and underwriting, not an instant approval button.",
    bodyParagraphs: [
      "Many first-time buyers use FHA or low-down conventional programs when guidelines allow. Mortgage insurance or FHA premiums may apply depending on structure.",
      "Down payment assistance may exist locally; availability varies by program. Your Loan Estimate shows cash needed to close.",
      `We provide updates by ${BORROWER_CONTACT_CHANNELS} as your file moves from application to closing.`,
    ],
    siblings: buySiblings("/buy/first-time-homebuyers"),
  },
  eligibility: {
    headline: "Common first-time buyer considerations",
    cards: [
      { title: "Credit building", body: "Paying down revolving balances and avoiding new debt before application may help when guidelines allow." },
      { title: "Down payment sources", body: "Savings, gifts, and documented assistance may be allowed per program rules." },
      { title: "Homebuyer education", body: "Some programs require counseling certificates; we note requirements in your file." },
      { title: "Debt-to-income", body: "Student loans and other debts count in monthly obligations." },
      { title: "Property choice", body: "Condos and multi-unit homes may need extra approval steps." },
      { title: "Escrow basics", body: "Taxes and insurance are often collected monthly even when the note rate is fixed." },
    ],
    footnote:
      "Grants, rates, and closing timelines depend on underwriting, investors, and program rules.",
  },
  faqs: [
    { q: "Do I have to be a true first-time buyer?", a: "Program definitions vary. Some government programs define first-time status by years since prior homeownership." },
    { q: "How much do I need for a down payment?", a: "Minimums range from 0% on some VA loans to 3% or more on conventional and FHA when guidelines are met." },
    { q: "What is private mortgage insurance?", a: "When required, it protects the lender if you default. FHA uses mortgage insurance premiums with different rules than conventional PMI." },
    { q: "Can I use gift money?", a: "Gift funds are often allowed when documented with a gift letter and donor statements." },
    { q: "How does the flat fee help first-time buyers?", a: "A $3,500 flat lender origination fee is not tied to loan size, which may help on larger loans; compare full Loan Estimates for smaller balances." },
    { q: "Will agents replace my loan officer?", a: "No. Agents organize tasks; licensed mortgage professionals supervise and decide." },
    { q: "Where can I learn more?", a: "Visit our Learn hub for guides on credit, closing costs, and affordability." },
  ],
  closingCompliance,
});

export const howItWorksProcessTrust = finishPage({
  slug: "how-it-works",
  path: "/how-it-works",
  metadata: {
    title: "How it works",
    description:
      `How HomeLoanAgents combines AI workflow agents with licensed loan officers and underwriters: documents, disclosures, flat $3,500 lender fee, and borrower updates by ${BORROWER_CONTACT_CHANNELS}.`,
  },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "How it works" },
  ],
  hero: {
    eyebrow: "Process",
    h1: "AI agents organize your file. Licensed professionals review and decide.",
    lead: "HomeLoanAgents is a licensed mortgage lender. Specialized agents handle repetitive workflow tasks while loan officers and underwriters supervise credit decisions, disclosures, and compliance.",
    secondaryCta: { href: "/pricing", label: "Pricing & fee" },
  },
  keyFacts: [
    {
      k: "Lender fee",
      v: "$3,500 flat",
      d: "Underwriting, processing, and lender-ordered credit report on loans we originate.",
      highlight: true,
    },
    { k: "Agents", v: "Workflow automation", d: "Document labeling, checklist nudges, and status visibility." },
    { k: "Humans", v: "Credit decisions", d: "Licensed loan officers and underwriters approve, suspend, or deny." },
    { k: "Contact", v: BORROWER_CONTACT_CHANNELS, d: BORROWER_CONTACT_CHANNELS_DETAIL },
  ],
  fit: {
    headline: "Who this model serves",
    lead: "Borrowers who want faster organization without giving up human accountability for lending decisions.",
    bodyParagraphs: [
      AI_DISCLOSURE,
      "Rates, terms, and closing timelines depend on your file and market conditions. Marketing content is educational; your Loan Estimate and Closing Disclosure govern your transaction.",
      "Agents may draft borrower communications about documents and milestones. Licensed staff review rate-related and credit-related messages before you see them, per our policies.",
    ],
    siblings: [
      { href: "/buy", title: "Buy a home", description: "Purchase path overview" },
      { href: "/refinance", title: "Refinance", description: "Refinance path overview" },
      { href: "/pricing", title: "Flat lender fee", description: "How our $3,500 fee works" },
      { href: "/learn", title: "Learn hub", description: "Mortgage guides without rate pitches" },
    ],
  },
  eligibility: {
    headline: "Workflow stages you will see",
    cards: [
      { title: "Intake", body: "You share goals; agents structure the application and requested documents." },
      { title: "Processing", body: "Income, assets, and identity verified; vendors ordered when required." },
      { title: "Underwriting", body: "Human underwriter applies investor guidelines to your file." },
      { title: "Disclosures", body: "Loan Estimate and Closing Disclosure itemize fees, including our flat origination charge." },
      { title: "Compliance", body: "Licensed staff review exceptions and regulatory requirements." },
      { title: "Closing", body: "Signing and funding follow your closing schedule; timelines vary." },
    ],
    footnote:
      "Steps and timing vary by transaction type, appraisal turnaround, and documentation completeness.",
  },
  howItWorks: {
    headline: "How AI and humans share the work",
    lead: "Every lane shows who is accountable so you are never guessing who owns the next task.",
    lanes: [
      {
        owners: ["you", "ai"],
        title: "Start and upload",
        body: "You apply online and upload documents. Agents label files and flag missing items.",
      },
      {
        owners: ["ai", "hu"],
        title: "Process and pre-check",
        body: "Agents prepare the file for underwriting; loan officers review for program fit and completeness.",
      },
      {
        owners: ["hu"],
        title: "Underwrite and disclose",
        body: "Underwriters decide credit. You receive regulated disclosures with itemized costs before you commit.",
      },
    ],
  },
  programNotes: [
    {
      title: "How we communicate",
      body: BORROWER_COMMUNICATION_POLICY,
    },
  ],
  faqs: [
    { q: "Do AI agents approve loans?", a: "No. Agents organize workflow. Human underwriters make lending decisions." },
    { q: "How will you contact me?", a: BORROWER_COMMUNICATION_POLICY },
    { q: "Is the origination fee a percentage?", a: "No. Our lender origination fee is $3,500 flat on loans we originate, subject to your Loan Estimate." },
    {
      q: "Can I see file status?",
      a: `Your borrower portal experience will show milestones when launched; until then, updates arrive by ${BORROWER_CONTACT_CHANNELS}.`,
    },
    { q: "Who handles rate locks?", a: "Licensed loan officers explain lock policies and disclose terms on formal documents." },
    { q: "What if my file is complex?", a: "Self-employed, jumbo, and non-QM scenarios may need extra documentation; humans review each exception." },
    { q: "Are you a bank?", a: "HomeLoanAgents is a DBA of United Fidelity Funding Corp., NMLS #34381, a licensed mortgage lender." },
  ],
  closingCompliance,
});

export const refinanceHubProcessTrust = finishPage({
  slug: "refinance",
  path: "/refinance",
  metadata: {
    title: "Refinance",
    description:
      "Refinance overview: rate-and-term vs. cash-out, flat $3,500 lender fee, documents, supervised AI processing, and educational break-even thinking without advertised rates.",
  },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Refinance" },
  ],
  hero: {
    eyebrow: "Refinance",
    h1: "Refinance when changing your loan structure or accessing equity makes sense.",
    lead: "Refinancing replaces your existing mortgage with a new loan. We help you compare rate-and-term and cash-out paths with disclosures instead of marketing rate ads.",
    secondaryCta: { href: "/refinance/rate-and-term", label: "Rate-and-term details" },
  },
  keyFacts: [
    {
      k: "Lender fee",
      v: "$3,500 flat",
      d: "Same flat origination on refinances we originate.",
      highlight: true,
    },
    { k: "Paths", v: "Rate-term vs. cash-out", d: "Different LTV limits, seasoning, and cash-back rules." },
    { k: "Appraisal", v: "Often required", d: "Value affects loan amount and available equity." },
    { k: "Break-even", v: "Model on LE", d: "Compare savings to closing costs on your Loan Estimate." },
  ],
  fit: {
    headline: "When to explore a refinance",
    lead: "Consider refinancing when goals, equity, and closing costs align, not because a headline rate moved.",
    bodyParagraphs: [
      "Rate-and-term refinances change your interest rate, amortization, or both without meaningful cash back at closing.",
      "Cash-out refinances may provide funds when equity and loan-to-value guidelines allow; they increase your balance and payment risk.",
      "We do not advertise rates. Your Loan Estimate shows payment, APR, and itemized charges for your scenario.",
    ],
    siblings: refiHubSiblings("/refinance"),
  },
  eligibility: {
    headline: "Refinance factors we review",
    cards: [
      { title: "Seasoning", body: "Many programs require minimum time since the prior loan closed." },
      { title: "Credit & income", body: "Current employment and debts are re-verified." },
      { title: "Property value", body: "Appraisal supports LTV; low values limit proceeds." },
      { title: "Occupancy", body: "Primary, second home, and investment refinances follow different overlays." },
      { title: "Subordinate liens", body: "HELOCs or seconds may need payoff or subordination." },
      { title: "Program fit", body: "FHA, VA, conventional, and jumbo each carry distinct refinance options." },
    ],
    footnote:
      "Refinancing is subject to underwriting and appraisal. Savings and break-even depend on your costs, rate, and how long you keep the loan.",
  },
  faqs: [
    { q: "Is the lender fee the same on a refinance?", a: "Yes. We use a $3,500 flat lender origination fee on refinances we originate, plus third-party charges on your Loan Estimate." },
    { q: "How do I compare break-even?", a: "Divide total closing costs by monthly payment savings on your Loan Estimate. Hold period matters; savings are not certain until you reach break-even." },
    { q: "Can I skip payments?", a: "You may skip one monthly payment timing, but prepaids and per-diem interest still apply." },
    { q: "What is the difference between cash-out and rate-and-term?", a: "Cash-out increases your loan balance to deliver funds at closing when allowed. Rate-and-term focuses on rate or term without large cash back." },
    { q: "Will you quote rates here?", a: "No. Formal disclosures show rate and APR after you apply." },
    { q: "Who approves my refinance?", a: "A human underwriter issues the credit decision." },
    {
      q: "How do I start?",
      a: `Use Get started when the borrower portal launches, or request next steps by ${BORROWER_CONTACT_CHANNELS}.`,
    },
  ],
  closingCompliance,
});

export const usdaProgramTrust = finishPage({
  slug: "usda",
  path: "/loans/usda",
  metadata: {
    title: "USDA loans",
    description:
      "USDA Rural Development loans for eligible properties and income-qualified borrowers: zero down payment may be available, flat lender fee, documents, and human underwriting supervision.",
  },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Loan programs", href: "/loans/conventional" },
    { label: "USDA" },
  ],
  hero: {
    eyebrow: "USDA Rural Development",
    h1: "USDA loans for eligible rural and suburban properties.",
    lead: "USDA Rural Development loans support income-qualified borrowers in USDA-eligible areas. Benefits may include no down payment when guidelines and capacity are met. We originate USDA loans; USDA sets eligibility maps and income limits.",
    secondaryCta: { href: "/buy/first-time-homebuyers", label: "First-time buyer guide" },
  },
  keyFacts: [
    {
      k: "Lender fee",
      v: "$3,500 flat",
      d: "Our origination charge on USDA loans we originate.",
      highlight: true,
    },
    { k: "Location", v: "Eligible areas", d: "USDA maps define eligible rural and suburban addresses." },
    { k: "Income", v: "Household limits", d: "Combined household income must fall within USDA caps for the area." },
    { k: "Down payment", v: "Often $0", d: "When guidelines and capacity are met; subject to underwriting." },
  ],
  fit: {
    headline: "When USDA may fit",
    lead: "USDA suits moderate-income households buying in eligible areas who want low or no down payment when program rules allow.",
    bodyParagraphs: [
      "Properties must be in USDA-eligible locations and meet occupancy requirements. Income calculations include all adult household earners in many cases.",
      "USDA loans include upfront and annual program fees separate from our lender fee. Your Loan Estimate lists each charge.",
      "We are not a government agency. USDA Rural Development backs a portion of the loan; we underwrite and originate.",
    ],
    siblings: [
      { href: "/loans/conventional", title: "Conventional", description: "Agency loans outside USDA areas" },
      { href: "/loans/fha", title: "FHA", description: "Another low-down option in non-USDA areas" },
      { href: "/buy/pre-approval", title: "Check your readiness", description: "Check budget before you shop" },
      { href: "/loans/non-qm", title: "Bank statement", description: "Alternative documentation when offered" },
    ].map((l) => ({ ...l, current: l.href === "/loans/usda" })),
  },
  eligibility: {
    headline: "USDA factors we verify",
    cards: [
      { title: "Property eligibility", body: "Address must appear in USDA eligibility maps for the purchase date." },
      { title: "Household income", body: "Income limits vary by county and household size." },
      { title: "Occupancy", body: "Generally must be your primary residence." },
      { title: "Credit", body: "USDA expects acceptable credit history; lenders apply overlays." },
      { title: "USDA program fees", body: "Upfront and annual fees apply per USDA rules in addition to lender and third-party costs." },
      { title: "Property condition", body: "Homes must meet safety and livability standards on appraisal." },
    ],
    footnote:
      "USDA eligibility, income limits, and program fees change with program rules. Outcomes depend on underwriting.",
  },
  programNotes: [
    {
      title: "Not a government website",
      body: "United Fidelity Funding Corp. is a private lender. USDA Rural Development administers the program; we are not affiliated with USDA.",
      variant: "honest",
    },
  ],
  fees: {
    lead: "Our $3,500 flat lender origination fee applies to USDA loans we originate. USDA program fees and third-party closing costs are separate line items on your Loan Estimate.",
  },
  faqs: [
    { q: "How do I check if an address is eligible?", a: "USDA publishes eligibility maps. We verify eligibility during your application; maps can change." },
    { q: "Is there really no down payment?", a: "Many USDA loans allow zero down when income, credit, and property guidelines are met. Closing costs and USDA program fees may still require cash." },
    { q: "What are USDA program fees?", a: "Upfront and annual USDA fees fund the program. They appear on your Loan Estimate separate from our lender fee." },
    { q: "Can I use USDA on a refinance?", a: "USDA offers refinance options when guidelines are met; availability depends on your current loan and occupancy." },
    { q: "Does USDA backing mean automatic underwriting clearance?", a: "No. USDA program rules do not replace underwriting. We must verify income, credit, and property." },
    { q: "Who makes the decision?", a: "A human underwriter at our company issues the credit decision." },
    {
      q: "How do I ask questions?",
      a: `Licensed staff respond by ${BORROWER_CONTACT_CHANNELS}. Call our inbound line anytime with questions.`,
    },
  ],
  closingCompliance,
});

export const nonQmProgramTrust = finishPage({
  slug: "non-qm",
  path: "/loans/non-qm",
  metadata: {
    title: "Bank statement & self-employed",
    description:
      "Non-QM and bank statement programs for self-employed and alternative-documentation borrowers when available: accurate, non-promissory overview, flat lender fee, and human underwriting.",
  },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Loan programs", href: "/loans/conventional" },
    { label: "Bank statement & self-employed" },
  ],
  hero: {
    eyebrow: "Alternative documentation",
    h1: "Bank statement and non-QM financing when programs are available.",
    lead: "Self-employed borrowers and others whose tax returns do not reflect full cash flow may qualify for alternative documentation programs when investors offer them. We do not promise approval or advertise rates on this page.",
    secondaryCta: { href: "/loans/jumbo", label: "Jumbo overview" },
  },
  keyFacts: [
    {
      k: "Lender fee",
      v: "$3,500 flat",
      d: "Flat origination on non-QM loans we originate.",
      highlight: true,
    },
    { k: "Documentation", v: "Bank statements+", d: "Personal or business statements may qualify per program." },
    { k: "Availability", v: "Investor-driven", d: "Programs open and close with investor appetite." },
    { k: "Underwriting", v: "Full human review", d: "Deep asset and income analysis; no automated approval promise." },
  ],
  fit: {
    headline: "Who may consider non-QM paths",
    lead: "Fit for business owners, contractors, and borrowers with complicated returns when traditional documentation does not tell the full story.",
    bodyParagraphs: [
      "Non-QM does not mean subprime marketing. It means the loan may not meet all qualified mortgage boxes or uses alternate income calculation methods allowed by investors.",
      "Expect heavier documentation of deposits, business ownership, and reserves. Pricing and terms depend on credit, LTV, and program, disclosed on your Loan Estimate.",
      "We will not suggest you misstate income. Underwriters verify sources and sustainability.",
    ],
    siblings: [
      { href: "/loans/jumbo", title: "Jumbo", description: "High-balance documentation-heavy loans" },
      { href: "/loans/conventional", title: "Conventional", description: "Full-doc path when tax returns qualify" },
      { href: "/loans/fha", title: "FHA", description: "Self-employed still need tax returns" },
      { href: "/buy/pre-approval", title: "Check your readiness", description: "Start with a realistic budget review" },
    ].map((l) => ({ ...l, current: l.href === "/loans/non-qm" })),
  },
  eligibility: {
    headline: "Common non-QM underwriting themes",
    cards: [
      { title: "Bank statements", body: "Typically 12–24 months personal or business statements with expense analysis." },
      { title: "Credit depth", body: "Higher scores and clean recent history are often expected." },
      { title: "Reserves", body: "Months of payments in liquid assets after closing may be required." },
      { title: "Loan-to-value", body: "Lower LTV caps than agency loans are common." },
      { title: "Property types", body: "Primary, second home, and investment may have different overlays." },
      { title: "Compliance", body: "Ability-to-repay rules still apply; documentation must support repayment." },
    ],
    footnote:
      "Non-QM programs vary by investor. Availability, pricing, and outcomes depend on underwriting.",
  },
  programNotes: [
    {
      title: "No approval promises",
      body: "We offer financing for many borrower types when guidelines allow. This page is educational and not an offer to lend.",
      variant: "honest",
    },
  ],
  faqs: [
    { q: "Is non-QM the same as hard money?", a: "No. We originate residential mortgage loans subject to ability-to-repay and investor guidelines, not bridge hard-money marketing." },
    { q: "Can I use only bank statements?", a: "Some programs allow statement-based income calculation when deposits are consistent and business expenses are documented." },
    { q: "Are rates higher than conventional?", a: "Pricing depends on credit, LTV, and investor overlays. Compare Loan Estimates rather than assumptions." },
    { q: "What is the lender fee?", a: "Our $3,500 flat lender origination fee applies to non-QM loans we originate when we offer them." },
    { q: "Do AI agents approve non-QM files?", a: "No. Agents organize documents; human underwriters decide." },
    { q: "Can W-2 employees use this page?", a: "W-2 borrowers usually use full-documentation conventional, FHA, or VA programs instead." },
    { q: "How do I know if a program is available?", a: `Start an application or ask by ${BORROWER_CONTACT_CHANNELS}; availability changes with investors.` },
  ],
  closingCompliance,
});

export const calculatorsHubProcessTrust = finishPage({
  slug: "calculators",
  path: "/calculators",
  metadata: {
    title: "Mortgage calculators",
    description:
      "Illustrative mortgage payment and affordability calculators. Educational tools only, not loan offers or readiness letters.",
  },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Calculators" },
  ],
  hero: {
    eyebrow: "Illustrative tools",
    h1: "Mortgage calculators for rough planning—not loan offers.",
    lead: "Use these tools to explore hypothetical payments and budgets. They do not pull credit, issue readiness letters, or quote rates. Your Loan Estimate is the official disclosure.",
    secondaryCta: { href: "/learn", label: "Read mortgage guides" },
  },
  keyFacts: [
    { k: "Purpose", v: "Education", d: "Hypothetical math for planning conversations with your file team.", highlight: true },
    { k: "Not a", v: "Readiness letter", d: "Starting a calculator does not apply you for a loan." },
    { k: "Rates", v: "You enter them", d: "Default numbers are placeholders, not advertised offers." },
    { k: "Next step", v: "Loan Estimate", d: "Formal disclosures show real payments and costs." },
  ],
  fit: {
    headline: "When calculators help",
    lead: "They are useful for comparing scenarios before you commit to an application, not for shopping rates on a marketing site.",
    bodyParagraphs: [
      "Payment calculators estimate principal and interest from price, down payment, term, and a rate you type in.",
      "Affordability calculators use simplified income and debt assumptions. Lenders use verified income and full guidelines.",
      `We follow up on applications by ${BORROWER_CONTACT_CHANNELS}—calculators do not submit personal data.`,
    ],
    siblings: [
      { href: "/calculators/mortgage-payment", title: "Payment calculator", description: "Principal and interest estimator" },
      { href: "/calculators/affordability", title: "Affordability calculator", description: "Rough budget from income and debts" },
      { href: "/learn/how-much-house-can-i-afford", title: "Affordability guide", description: "How lenders think about DTI" },
      { href: "/pricing", title: "Flat lender fee", description: "Our $3,500 origination fee" },
    ].map((l) => ({ ...l, current: l.href === "/calculators" })),
  },
  eligibility: {
    headline: "What calculators leave out",
    cards: [
      { title: "Taxes & insurance", body: "Escrowed property taxes and homeowners insurance can change total payment materially." },
      { title: "Mortgage insurance", body: "FHA MIP, PMI, or VA funding fees are not modeled unless you add them." },
      { title: "HOA dues", body: "Condo and HOA fees count in affordability but may be omitted here." },
      { title: "Points & credits", body: "Optional points and lender credits change rate and fees on your Loan Estimate." },
      { title: "Program rules", body: "FHA, VA, USDA, and jumbo programs have different floors and reserves." },
      { title: "Credit impact", body: "Scores affect pricing tiers; calculators use only the rate you supply." },
    ],
    footnote: "Illustrative results are not offers to lend.",
  },
  faqs: [
    { q: "Are these rates real?", a: "No. Rates you enter are hypothetical. We do not advertise rates on marketing pages." },
    { q: "Will using a calculator apply me?", a: "No. Apply through Get started when available; calculators run entirely in your browser." },
    { q: "Can I get a Loan Estimate from a calculator?", a: "No. A Loan Estimate requires an application and disclosures." },
    { q: "Why include calculators at all?", a: "They help you sanity-check budget conversations before you share documents." },
    { q: "What lender fee should I assume?", a: "Our flat lender origination fee is $3,500 on loans we originate; third-party costs are additional." },
    { q: "Who can explain my results?", a: `Licensed staff can help by ${BORROWER_CONTACT_CHANNELS} after you start a file.` },
  ],
  closingCompliance,
});

export const mortgagePaymentCalculatorTrust = finishPage({
  slug: "mortgage-payment-calculator",
  path: "/calculators/mortgage-payment",
  metadata: {
    title: "Mortgage payment calculator",
    description: "Illustrative principal and interest payment estimator. Not a loan offer or rate quote.",
  },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Calculators", href: "/calculators" },
    { label: "Mortgage payment" },
  ],
  hero: {
    eyebrow: "Illustrative example",
    h1: "Estimate a principal and interest payment.",
    lead: "Type a home price, down payment, term, and hypothetical rate. The result is math only—not an underwriting decision, APR quote, or promised payment.",
    secondaryCta: { href: "/calculators/affordability", label: "Affordability calculator" },
  },
  keyFacts: [
    { k: "Includes", v: "P&I only", d: "Taxes, insurance, HOA, and mortgage insurance are extra.", highlight: true },
    { k: "Rate", v: "Your input", d: "Not sourced from live pricing." },
    { k: "Offer", v: "Not a loan", d: "Education only." },
    { k: "Lender fee", v: "$3,500 flat", d: "Disclosed separately on a real Loan Estimate." },
  ],
  fit: {
    headline: "How to use this tool",
    lead: "Test multiple down payments and terms to see how principal and interest move—not to pick a lender from a headline.",
    bodyParagraphs: [
      "Compare scenarios you control: 15-year vs. 30-year amortization, different down payments, or optional points you might choose later.",
      "Add mentally for taxes, insurance, and mortgage insurance when judging affordability.",
    ],
    siblings: [
      { href: "/calculators", title: "All calculators", description: "Tool index" },
      { href: "/calculators/affordability", title: "Affordability", description: "Income-based rough budget" },
      { href: "/learn/closing-costs", title: "Closing costs guide", description: "Fees beyond principal and interest" },
    ].map((l) => ({ ...l, current: l.href === "/calculators/mortgage-payment" })),
  },
  eligibility: {
    headline: "Remember: real loans include more",
    cards: [
      { title: "Escrow", body: "Most borrowers escrow taxes and insurance, changing the monthly bill." },
      { title: "MI & MIP", body: "Low-down programs may require monthly or upfront mortgage insurance." },
      { title: "APR", body: "APR reflects some costs and timing; this tool does not calculate APR." },
      { title: "Locks", body: "Your note rate is set only when disclosed lock terms apply." },
      { title: "DTI", body: "Underwriting compares payment to verified income and debts." },
      { title: "Reserves", body: "Assets after closing may be required even if the payment looks affordable." },
    ],
    footnote: complianceFootnote(),
  },
  embedIllustrativeTool: "mortgage-payment",
  faqs: [
    { q: "Is this payment exact?", a: "No. It is hypothetical principal and interest from your inputs." },
    { q: "Does it include our lender fee?", a: "No. Origination and other closing costs appear on a Loan Estimate, not in this monthly math." },
    { q: "What rate should I enter?", a: "Use a placeholder for planning. We do not publish live rates on marketing pages." },
    { q: "Why is my real payment higher?", a: "Taxes, insurance, mortgage insurance, and HOA dues are commonly added to P&I." },
    { q: "Can this issue a readiness letter?", a: "No. A readiness letter requires application, credit authorization, and human review." },
  ],
  closingCompliance,
});

export const affordabilityCalculatorTrust = finishPage({
  slug: "affordability-calculator",
  path: "/calculators/affordability",
  metadata: {
    title: "Affordability calculator",
    description: "Illustrative affordability estimator using simplified income and debt assumptions. Not a loan offer.",
  },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Calculators", href: "/calculators" },
    { label: "Affordability" },
  ],
  hero: {
    eyebrow: "Illustrative example",
    h1: "Roughly model how much home might fit your income.",
    lead: "This tool applies simplified debt-to-income thinking. Lenders verify income, use program-specific guidelines, and issue decisions through underwriting—not through calculators.",
    secondaryCta: { href: "/learn/how-much-house-can-i-afford", label: "Affordability guide" },
  },
  keyFacts: [
    { k: "Method", v: "Simplified DTI", d: "Conservative illustration, not underwriting.", highlight: true },
    { k: "Income", v: "Gross estimate", d: "Lenders use verified taxable income rules." },
    { k: "Debts", v: "You list them", d: "Missing debts skew results." },
    { k: "Lender fee", v: "$3,500 flat", d: "Disclosed on your Loan Estimate when you apply." },
  ],
  fit: {
    headline: "Pair the calculator with education",
    lead: "Use results as a conversation starter before readiness review, not as a maximum offer amount.",
    bodyParagraphs: [
      "Read our affordability guide for how reserves, gift funds, and program choice change what you can finance.",
      "Your licensed loan team confirms numbers on your Loan Estimate after you apply.",
    ],
    siblings: [
      { href: "/calculators/mortgage-payment", title: "Payment calculator", description: "Test payment at a given price" },
      { href: "/buy/pre-approval", title: "Check your readiness", description: "Human-reviewed budget letter" },
      { href: "/learn/credit-score-basics", title: "Credit basics", description: "How scores affect options" },
    ].map((l) => ({ ...l, current: l.href === "/calculators/affordability" })),
  },
  eligibility: {
    headline: "What underwriting adds",
    cards: [
      { title: "Verified income", body: "Self-employed and variable income need documentation." },
      { title: "Program limits", body: "FHA, VA, and USDA apply different floors and fees." },
      { title: "Credit", body: "Scores influence maximum DTI and pricing." },
      { title: "Property costs", body: "Taxes, insurance, and HOA affect payment ratios." },
      { title: "Reserves", body: "Cash after closing may be required." },
      { title: "Appraisal", body: "Value caps the loan regardless of income math." },
    ],
    footnote: "Illustrative output is not an approval or maximum loan amount.",
  },
  embedIllustrativeTool: "affordability",
  faqs: [
    { q: "Is this my approval amount?", a: "No. It is a simplified illustration." },
    { q: "What DTI do lenders use?", a: "Programs set front-end and back-end ratio limits with overlays; this tool uses a conservative illustrative approach." },
    { q: "Should I max out the result?", a: "Many borrowers stay below the illustrative cap to leave room for maintenance and savings." },
    { q: "Does it include the flat lender fee?", a: "Closing costs affect cash to close; this tool focuses on payment affordability, not fee lines." },
    { q: "What's the next step?", a: "Explore readiness education or start an application when the portal launches." },
  ],
  closingCompliance,
});

function complianceFootnote() {
  return "All loans are subject to underwriting, documentation, and program guidelines. Illustrative calculator output is not an offer to lend.";
}