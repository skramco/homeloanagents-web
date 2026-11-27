import Link from "next/link";
import { MarketingLicensingBlock } from "@/components/marketing/MarketingLicensingBlock";
import { UffPhoneLink } from "@/components/UffPhone";
import { BORROWER_CONTACT_CHANNELS } from "@/lib/constants";

const taskRows = [
  ["Organizing your application and flagging questions", "Intake agent", "Loan officer"],
  ["Checking documents for completeness", "Document agent", "Mortgage pro"],
  ["Drafting income and asset worksheets", "Income & asset agent", "Mortgage pro / Underwriter"],
  ["Ordering the appraisal and title work", "Mortgage pro", "Loan officer"],
  ["Recommending a loan and explaining options", "Loan officer", "None"],
  ["Credit decision and conditions", "Human underwriter", "None"],
  ["Loan Estimate and Closing Disclosure", "Loan officer", "None"],
  ["Status updates, any time of day", "Status agent", "Loan officer"],
];

export function PricingPage() {
  return (
    <>
      <section className="price-hero on-deep">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span aria-current="page">Pricing &amp; why us</span>
          </nav>
          <div className="ph-grid">
            <div className="ph-copy">
              <span className="eyebrow">Pricing &amp; why us</span>
              <h1 className="h1">
                One lender fee. <span className="serif-accent em-light">Any loan size.</span>
              </h1>
              <p className="lead">
                Our lender origination fee is flat. It covers underwriting, processing and your credit report, and it
                doesn&apos;t grow with your loan amount. Here&apos;s everything it includes, everything it doesn&apos;t,
                and how we work with you.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-mint btn-lg" href="/get-started">
                  Get started <span className="arr">→</span>
                </Link>
                <a className="btn btn-ghost btn-lg" href="#covers">
                  What the fee covers
                </a>
              </div>
            </div>
            <div className="big-fee">
              <span className="fc-label" style={{ color: "var(--emerald-300)" }}>
                Flat lender origination fee
              </span>
              <span className="amt">Flat</span>
              <span className="sub">Underwriting · Processing · Credit report</span>
              <div className="same">
                <div>
                  <small>Same flat fee on a $300,000 loan</small>
                  <b>Flat</b>
                </div>
                <div>
                  <small>Same flat fee on a $1,500,000 loan</small>
                  <b>Flat</b>
                </div>
              </div>
              <span className="fine">
                Loan amounts shown are examples. Not an offer to lend. Third-party costs and prepaids are separate.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="covers">
        <div className="wrap">
          <PricingCovers />
        </div>
      </section>

      <section className="section section-white" id="separate">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">What&apos;s separate</span>
            <h2 className="h2">Costs that remain, and why.</h2>
            <p className="lead muted">
              Every mortgage has costs that aren&apos;t the lender&apos;s. We can&apos;t set them, but we itemize every
              one on your Loan Estimate before you commit, and we&apos;ll point out which services you&apos;re allowed to
              shop for.
            </p>
          </div>
          <ThirdPartyCosts />
          <p className="fine" style={{ marginTop: 18 }}>
            Program rules can limit what a lender may charge on some loans (for example, VA loans). Where they apply, your
            Loan Estimate will reflect them.
          </p>
        </div>
      </section>

      <section className="section" id="estimate">
        <div className="wrap split">
          <div className="prose">
            <span className="eyebrow">On your Loan Estimate</span>
            <h2 className="h2">Where to find our fee.</h2>
            <p className="lead muted">
              The Loan Estimate is a standard three-page federal form, so you can compare lenders line by line. Our flat
              fee shows up in Section A, Origination Charges.
            </p>
            <ul className="check-list">
              <li>
                <b>Section A</b> holds what the lender charges. Ours: one flat origination fee, plus points only if you
                choose them.
              </li>
              <li>
                <b>Sections B and C</b> are third-party services; C lists the ones you can shop for.
              </li>
              <li>
                <b>Sections E through G</b> are government fees, prepaids and escrow.
              </li>
            </ul>
            <Link className="link-arrow" href="/learn/how-a-flat-origination-fee-works">
              Read: how a flat origination fee works →
            </Link>
          </div>
          <LoanEstimateIllustration />
        </div>
      </section>

      <section className="section" id="oversight">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">AI + human oversight</span>
            <h2 className="h2">Who does the work, and who checks it.</h2>
            <p className="lead muted">
              The flat fee is possible because AI agents take on repetitive processing work. Here&apos;s exactly where
              people stay in charge.
            </p>
          </div>
          <TaskTable />
        </div>
      </section>

      <section className="section section-white" id="why">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Why HomeLoanAgents</span>
            <h2 className="h2">What you can count on.</h2>
          </div>
          <WhyReasons />
        </div>
      </section>

      <section className="section" id="faqs">
        <div className="wrap faq-wrap">
          <div className="section-head">
            <span className="eyebrow">Pricing FAQs</span>
            <h2 className="h2">About the fee.</h2>
            <p className="lead muted">
              Questions about a Loan Estimate? Get updates by {BORROWER_CONTACT_CHANNELS}, or{" "}
              <UffPhoneLink voiceAgent />.
            </p>
          </div>
          <PricingFaqs />
        </div>
      </section>

      <MarketingLicensingBlock />
    </>
  );
}

function PricingCovers() {
  const items = [
    ["Underwriting", "A human underwriter reviews your complete file against the program's guidelines and makes the credit decision."],
    ["Processing", "AI agents organize and check your documents and draft worksheets; mortgage pros verify them and manage conditions through closing."],
    ["Credit report", "The credit report used in underwriting. We'll always tell you before a credit report is pulled."],
  ];
  return (
    <>
      <div className="section-head">
        <span className="eyebrow">What the flat fee covers</span>
        <h2 className="h2">Our part of the work, in one place.</h2>
        <p className="lead muted">No separate underwriting, processing or credit report charges from us. They&apos;re all inside the flat fee.</p>
      </div>
      <div className="cover-grid">
        {items.map(([title, body]) => (
          <div className="cover" key={title}>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function ThirdPartyCosts() {
  const cards: [string, string, string[]][] = [
    ["Third-party services", "Paid to the companies doing the work", ["Appraisal of the home", "Title insurance and title search", "Settlement or escrow services", "Other services your loan requires, such as flood certification or a survey"]],
    ["Government fees", "Set by state and local governments", ["Recording fees for your deed and mortgage", "Transfer taxes, where they apply"]],
    ["Prepaids & escrow", "Your own costs of owning the home, paid in advance", ["Prepaid interest from closing to your first payment", "Homeowners insurance premium", "Initial deposits into your escrow account for property taxes and insurance"]],
    ["Situational or optional", "Only when your loan or your choices call for them", ["Mortgage insurance, when your program or down payment requires it", "Program fees such as an FHA upfront premium or VA funding fee", "Discount points, only if you choose to buy down your rate"]],
  ];
  return (
    <div className="third">
      {cards.map(([tag, h, list]) => (
        <div className="card" key={tag}>
          <span className="tagline">{tag}</span>
          <h3>{h}</h3>
          <ul>
            {list.map((li) => (
              <li key={li}>{li}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function LoanEstimateIllustration() {
  return (
    <div className="le" aria-label="Illustrative Loan Estimate layout">
      <div className="le-head">
        <span>Loan Estimate · Closing Cost Details</span>
        <span className="tag-illus">Illustrative layout</span>
      </div>
      <div className="le-sec">
        <h4>A. Origination Charges</h4>
        <div className="le-line hl">
          <span>Origination fee (HomeLoanAgents flat lender fee)</span>
          <span className="num">Disclosed on your Loan Estimate</span>
        </div>
        <div className="le-line">
          <span>Points (% of loan amount)</span>
          <span className="num">Only if you choose</span>
        </div>
      </div>
      <div className="le-sec dim">
        <h4>B. Services You Cannot Shop For</h4>
        <div className="le-line">
          <span>Appraisal and other required services</span>
          <span className="num">Itemized</span>
        </div>
      </div>
      <div className="le-sec dim">
        <h4>C. Services You Can Shop For</h4>
        <div className="le-line">
          <span>Title and settlement services</span>
          <span className="num">Itemized</span>
        </div>
      </div>
    </div>
  );
}

function TaskTable() {
  return (
    <div className="tbl-wrap">
      <table className="tbl task-tbl">
        <thead>
          <tr>
            <th>Task</th>
            <th>Who does it</th>
            <th>Who checks it</th>
          </tr>
        </thead>
        <tbody>
          {taskRows.map((row) => (
            <tr key={row[0]}>
              <td>{row[0]}</td>
              <td>
                <span className={`who-tag ${row[1].includes("agent") ? "ai" : "hu"}`}>{row[1]}</span>
              </td>
              <td>
                {row[2] === "None" ? (
                  "None"
                ) : (
                  <span className="who-tag hu">{row[2]}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function WhyReasons() {
  const reasons = [
    ["A fee you see first", "Our flat lender fee is published here, before you share any contact details."],
    ["A person decides", "A human underwriter makes every credit decision. AI never approves or denies a loan."],
    ["A name and a license", "Your loan officer is named, with an NMLS ID you can verify yourself."],
    ["No teaser rates", "We don't advertise rates that assume points. Your terms come on your Loan Estimate."],
    ["Consent stays yours", 'Marketing calls and texts are a separate, optional choice, never part of "Continue."'],
    ["Designed to move faster", "Agents work your file in parallel, around the clock, so questions reach you sooner."],
  ];
  return (
    <div className="reasons">
      {reasons.map(([title, body], i) => (
        <div className="reason" key={title}>
          <span className="p-num mono">{String(i + 1).padStart(2, "0")}</span>
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
      ))}
    </div>
  );
}

function PricingFaqs() {
  const faqs = [
    ["Why a flat fee instead of a percentage?", "Underwriting and processing a $1.5M loan takes about the same work as a $300k loan. AI agents make that work more efficient, so we price it as one flat fee instead of charging more just because a loan is bigger."],
    ["Is a flat fee always cheaper?", "No. On smaller loan amounts, percentage-based origination fees from other lenders may be lower, and some lenders charge little or no origination fee but price it into the rate. Compare full Loan Estimates, not just one line."],
    ["Are there any other lender charges?", "We don't charge separately for underwriting, processing or the credit report; those are inside the flat fee. Discount points appear only if you choose to buy them. Third-party costs and prepaids are separate and itemized."],
    ["When do I pay the fee?", "The origination fee is part of your closing costs. Some third-party costs, like an appraisal, may be collected earlier; we'll disclose them before you're asked to pay."],
    ["Is the fee the same for a refinance?", "Yes. The same flat lender origination fee applies to purchase and refinance loans, subject to any limits a loan program sets."],
    ["Does using AI mean less care with my file?", "No. Agents handle repetitive checks and drafting; mortgage pros verify the work and a human underwriter makes the decision. The goal is more attention on judgment, not less."],
  ];
  return (
    <div className="faq">
      {faqs.map(([q, a], i) => (
        <details key={q} open={i === 0}>
          <summary>{q}</summary>
          <div className="faq-a">
            <p>{a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}