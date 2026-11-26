import Image from "next/image";
import Link from "next/link";
import { FeeCalculator } from "@/components/marketing/FeeCalculator";
import { IntentTabs } from "@/components/marketing/IntentTabs";
import { SampleFileFeed } from "@/components/marketing/SampleFileFeed";
import {
  BORROWER_CONTACT_CHANNELS,
  COMPANY_NMLS,
  FLAT_ORIGINATION_FEE,
  NMLS_CONSUMER_ACCESS,
  UFF_CONSUMER_PHONE,
  UFF_CONSUMER_PHONE_TEL,
} from "@/lib/constants";
import { marketingPhotos } from "@/lib/marketingPhotos";
import { programPhotoByPath, type ProgramTilePath } from "@/lib/programTilePhotos";

const MLO_NMLS_URL = "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/1192984";

const programTileMeta: { href: ProgramTilePath; tag: string; title: string; blurb: string }[] = [
  { href: "/loans/conventional", tag: "Buy", title: "Conventional", blurb: "The most common home loan for buyers with steady credit." },
  { href: "/loans/fha", tag: "Buy", title: "FHA", blurb: "Flexible credit and down payment guidelines." },
  { href: "/loans/va", tag: "Buy · Refi", title: "VA", blurb: "For eligible veterans, service members and surviving spouses." },
  { href: "/loans/jumbo", tag: "Buy · Refi", title: "Jumbo", blurb: "For loan amounts above conforming limits." },
  { href: "/loans/fixed", tag: "Any goal", title: "Fixed-rate", blurb: "Principal and interest that stay the same." },
  { href: "/loans/arm-vs-fixed", tag: "Any goal", title: "Adjustable-rate", blurb: "A fixed period first, then periodic adjustments." },
  { href: "/refinance/rate-and-term", tag: "Refinance", title: "Rate-and-term", blurb: "Change your rate, your term or both." },
  { href: "/refinance/cash-out", tag: "Refinance", title: "Cash-out", blurb: "Turn part of your equity into cash." },
];

const programTiles = programTileMeta.map((tile) => ({
  ...tile,
  photo: programPhotoByPath[tile.href],
}));

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="chip">
              <span className="dot" />
              Licensed mortgage lender · NMLS #{COMPANY_NMLS}
            </span>
            <h1 className="h-display">
              AI does the paperwork. <span className="em">People make the decisions.</span>
            </h1>
            <p className="lead">
              HomeLoanAgents is a mortgage lender for buying and refinancing. Specialized AI agents organize and check
              your file around the clock, licensed mortgage pros and human underwriters review every loan, and our lender
              origination fee is a flat <strong>${FLAT_ORIGINATION_FEE.toLocaleString("en-US")}</strong>, whether you
              borrow $300k or $1.5M.
            </p>
            <IntentTabs />
          </div>
          <div className="hero-visual">
            <div className="hero-photo">
              <Image
                src={marketingPhotos.heroKitchen.src}
                alt={marketingPhotos.heroKitchen.alt}
                width={1280}
                height={720}
                priority
              />
            </div>
            <div className="float-fee">
              <span className="ff-label">Lender origination fee</span>
              <span className="ff-amt">${FLAT_ORIGINATION_FEE.toLocaleString("en-US")}</span>
              <span className="ff-sub">Flat. Not a percentage of your loan.</span>
            </div>
            <SampleFileFeed />
          </div>
        </div>
      </section>

      <section className="proof">
        <div className="wrap proof-grid">
          <div className="proof-item">
            <div>
              <b>A licensed lender</b>
              <span>
                Verify us on{" "}
                <a href={NMLS_CONSUMER_ACCESS} target="_blank" rel="noopener noreferrer">
                  NMLS Consumer Access
                </a>
              </span>
            </div>
          </div>
          <div className="proof-item">
            <div>
              <b>Human-reviewed files</b>
              <span>A person underwrites every loan</span>
            </div>
          </div>
          <div className="proof-item">
            <div>
              <b>One flat lender fee</b>
              <span>${FLAT_ORIGINATION_FEE.toLocaleString("en-US")}, any loan size</span>
            </div>
          </div>
          <div className="proof-item">
            <div>
              <b>Purchase &amp; refinance</b>
              <span>For all kinds of borrowers</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Why HomeLoanAgents</span>
            <h2 className="h2">
              A real lender, rebuilt around <span className="serif-accent">clarity.</span>
            </h2>
            <p className="lead">
              Most mortgage costs and timelines hide inside the process. We designed ours so you can see the fee, the
              work and the people before you share a single detail.
            </p>
          </div>
          <div className="pillars">
            <article className="pillar p-fee">
              <span className="p-num mono">01</span>
              <h3>One fee you can see from here</h3>
              <p>
                Our lender origination fee is a flat ${FLAT_ORIGINATION_FEE.toLocaleString("en-US")} and covers
                underwriting, processing and the credit report. It doesn&apos;t grow with your loan amount.
              </p>
              <Link className="link-arrow" href="/pricing">
                The full fee breakdown <span>→</span>
              </Link>
              <div className="p-art">
                <span className="p-big">$3,500</span>
                <span className="p-cap">on a $300k loan</span>
                <span className="p-big">$3,500</span>
                <span className="p-cap">on a $1.5M loan</span>
              </div>
            </article>
            <article className="pillar p-ai">
              <span className="p-num mono">02</span>
              <h3>AI agents on the busywork</h3>
              <p>
                Specialized agents collect documents, check them against your checklist and draft worksheets day and
                night. The process is designed to move faster, without cutting the review.
              </p>
              <Link className="link-arrow" href="#who">
                What the agents do <span>→</span>
              </Link>
              <div className="p-art agents-art">
                <span>intake</span>
                <span>documents</span>
                <span>income</span>
                <span>assets</span>
                <span>conditions</span>
                <span>status</span>
              </div>
            </article>
            <article className="pillar p-human">
              <span className="p-num mono">03</span>
              <h3>People who are accountable</h3>
              <p>
                A licensed loan officer you can name, mortgage pros who verify the agents&apos; work, and a human
                underwriter who makes the credit decision.
              </p>
              <Link className="link-arrow" href="#who">
                Who reviews your file <span>→</span>
              </Link>
              <div className="p-art humans-art">
                <span className="av">MR</span>
                <span className="av alt">MP</span>
                <span className="av alt2">UW</span>
                <small>Your loan officer, mortgage pro and underwriter</small>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section on-deep fee-section" id="fee">
        <div className="wrap fee-grid">
          <div className="fee-copy">
            <span className="eyebrow">How the price works</span>
            <h2 className="h2">
              The work is similar on a big loan. <span className="serif-accent em-light">So is our fee.</span>
            </h2>
            <p className="lead muted">
              Percentage-based origination charges grow with your loan amount. Ours doesn&apos;t. Drag the slider to see
              an illustrative comparison, including where a percentage fee would cost less.
            </p>
            <ul className="check-list">
              <li>Covers underwriting, processing and your credit report</li>
              <li>Same $3,500 on purchase and refinance loans</li>
              <li>Shown in the Origination Charges section of your Loan Estimate</li>
            </ul>
            <Link className="btn btn-mint btn-lg" href="/pricing">
              See what&apos;s included and what isn&apos;t <span className="arr">→</span>
            </Link>
          </div>
          <FeeCalculator />
        </div>
      </section>

      <HomeWhoSection />
      <HomeHowSection />
      <HomeProgramsSection />
      <HomeVsSection />
      <HomeLearnSection />
      <HomeFaqSection />
      <HomeCtaSection />
    </>
  );
}

function HomeWhoSection() {
  return (
    <section className="section" id="who">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow">AI agents + human oversight</span>
          <h2 className="h2">Who&apos;s on your file, and who decides.</h2>
          <p className="lead">
            Agents handle the repetitive work so people can spend their time on judgment. Every hand-off from an agent
            goes through a licensed or trained person.
          </p>
        </div>
        <div className="who-grid">
          <WhoColumns />
        </div>
        <div className="never card">
          <h3>What AI agents don&apos;t do here</h3>
          <ul className="x-list">
            <li>Approve or deny your loan</li>
            <li>Issue your Loan Estimate or Closing Disclosure</li>
            <li>Replace your licensed loan officer</li>
            <li>Contact you for marketing without your separate opt-in</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function WhoColumns() {
  return (
    <>
      <div className="who-col">
        <div className="who-col-h">
          <span className="pill-ai mono">AI agents</span>
          <p>Organize, check and draft. Never decide.</p>
        </div>
        {[
          ["IN", "Intake agent", "Turns your application into a clean, complete file and flags anything a person should ask you about."],
          ["DC", "Document agent", "Matches each upload to your checklist, spots missing pages and tells you exactly what's still needed."],
          ["IA", "Income & asset agent", "Drafts income and asset worksheets from your documents for a mortgage pro to verify."],
          ["ST", "Status agent", "Keeps you updated in plain English, any time of day, on what's done and what's next."],
        ].map(([av, title, body]) => (
          <div className="role" key={title}>
            <div className="who">
              <span className="avatar ai">{av}</span>
              <div>
                <span className="kind">Agent</span>
                <h3>{title}</h3>
              </div>
            </div>
            <p>{body}</p>
          </div>
        ))}
      </div>
      <div className="who-mid" aria-hidden>
        <span>Human checkpoint</span>
      </div>
      <div className="who-col">
        <div className="who-col-h">
          <span className="pill-hu mono">People</span>
          <p>Verify, advise and make the decisions.</p>
        </div>
        <div className="role">
          <div className="who">
            <span className="avatar hu">MR</span>
            <div>
              <span className="kind">Licensed loan officer</span>
              <h3>Mark Ramirez</h3>
            </div>
          </div>
          <p>
            Your licensed mortgage loan originator,{" "}
            <a href={MLO_NMLS_URL} target="_blank" rel="noopener noreferrer">
              NMLS #1192984
            </a>
            . Reviews your options and Loan Estimate; updates by {BORROWER_CONTACT_CHANNELS}.
          </p>
        </div>
        <div className="role">
          <div className="who">
            <span className="avatar hu">MP</span>
            <div>
              <span className="kind">Mortgage professional</span>
              <h3>Processing team</h3>
            </div>
          </div>
          <p>Verifies what the agents prepared, follows up on conditions and keeps the file moving.</p>
        </div>
        <div className="role">
          <div className="who">
            <span className="avatar hu">UW</span>
            <div>
              <span className="kind">Underwriter</span>
              <h3>Human underwriter</h3>
            </div>
          </div>
          <p>Reviews the complete file against the loan program&apos;s guidelines and makes the credit decision.</p>
          <span className="decides">Makes the credit decision</span>
        </div>
      </div>
    </>
  );
}

function HomeHowSection() {
  const steps = [
    { title: "Start online", body: "Tell us your goal. See the fee and process up front, without a credit impact.", owners: ["You", "Intake agent"] },
    { title: "Apply & upload", body: "Submit your application and documents. Agents check each one as it arrives.", owners: ["You", "Document agent"] },
    {
      title: "Processing",
      body: `Worksheets are drafted, verified by a mortgage pro, and questions reach you by ${BORROWER_CONTACT_CHANNELS}.`,
      owners: ["Agents", "Mortgage pro"],
    },
    { title: "Underwriting", body: "A human underwriter reviews the full file and issues the credit decision and conditions.", owners: ["Underwriter"] },
    {
      title: "Closing",
      body: "Your licensed loan officer shares your Closing Disclosure for review, then you sign with your settlement agent.",
      owners: ["Loan officer", "You"],
    },
  ];
  return (
    <section className="section section-warm" id="how">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2 className="h2">Five steps, with an owner on every one.</h2>
          <p className="lead muted">
            You always know who has your file. Our process is designed to move faster by running the paperwork in parallel,
            but timing depends on your situation, the property and third parties like appraisers and title.
          </p>
        </div>
        <ol className="timeline">
          {steps.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              <div className="owner">
                {step.owners.map((o) => (
                  <span key={o} className={o === "You" ? "o-you" : o.includes("agent") || o === "Agents" ? "o-ai" : "o-hu"}>
                    {o}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function HomeProgramsSection() {
  return (
    <section className="section" id="programs">
      <div className="wrap">
        <div className="section-head split-head">
          <div>
            <span className="eyebrow">Loan options</span>
            <h2 className="h2">Loans for the way you live.</h2>
          </div>
          <p className="lead muted">
            Every program gets the same human review, the same upfront pricing and a page that explains who it fits, what
            you&apos;ll need and how it works with us.
          </p>
        </div>
        <div className="tiles">
          {programTiles.map((tile, i) => (
            <Link key={tile.href} className={i === 0 ? "tile tile-lg" : "tile"} href={tile.href}>
              <Image src={tile.photo.src} alt={tile.photo.alt} width={1152} height={864} loading={i === 0 ? undefined : "lazy"} />
              <div className="tile-b">
                <span className="tile-k">{tile.tag}</span>
                <h3>{tile.title}</h3>
                <p>{tile.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeVsSection() {
  const rows = [
    ["Contact details required before you see anything personal or useful", "See our fee, our process and who reviews your file first. No form needed to read any of it."],
    ['Consent to autodialed or AI marketing calls bundled into the "Continue" button', "Marketing consent is its own unchecked box. Saying no doesn't stop your application."],
    ["Headline rates that quietly assume discount points", "No teaser rates on this site. If you choose to buy points, they're itemized on your Loan Estimate as your choice."],
    ["Origination charges that rise with your loan amount", "One flat $3,500 lender fee on any loan size, shown before you apply."],
    ['A hand-off to an unnamed "loan expert"', "A named, licensed loan officer with a verifiable NMLS ID, and a human underwriter on every file."],
  ];
  return (
    <section className="section section-white">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Transparency by design</span>
          <h2 className="h2">Built to be checked, not just trusted.</h2>
          <p className="lead muted">
            We walked through the public sites of eight large online lenders in November 2026. These are the patterns we
            designed against.
          </p>
        </div>
        <div className="vs">
          <div className="vs-head">
            <span>What we often saw</span>
            <span>How HomeLoanAgents is designed</span>
          </div>
          {rows.map(([left, right]) => (
            <div className="vs-row" key={left}>
              <p>{left}</p>
              <p>
                <b>{right}</b>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeLearnSection() {
  return (
    <section className="section">
      <div className="wrap learn-row">
        <div className="section-head split-head">
          <div>
            <span className="eyebrow">Learn</span>
            <h2 className="h2">Plain-English guides, no rate pitch.</h2>
          </div>
          <Link className="btn btn-ghost" href="/learn">
            All guides <span className="arr">→</span>
          </Link>
        </div>
        <div className="grid g3">
          <Link className="guide" href="/learn/how-a-flat-origination-fee-works">
            <span className="g-k mono">Pricing · 6 min</span>
            <h3>How a flat origination fee works</h3>
            <p>What an origination fee pays for, how flat and percentage pricing compare, and when a flat fee costs more.</p>
            <span className="link-arrow">Read the guide →</span>
          </Link>
          <Link className="guide" href="/learn/mortgage-process">
            <span className="g-k mono">AI + people · 5 min</span>
            <h3>What AI loan processing means for you</h3>
            <p>What our agents actually do with your documents, and where people take over.</p>
            <span className="link-arrow">Read the guide →</span>
          </Link>
          <Link className="guide" href="/learn/closing-costs">
            <span className="g-k mono">Closing costs · 8 min</span>
            <h3>Reading your Loan Estimate, line by line</h3>
            <p>Where to find origination charges, points, third-party fees and prepaids, and how to compare offers.</p>
            <span className="link-arrow">Read the guide →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function HomeFaqSection() {
  const faqs = [
    ["Are you a lender or a marketplace?", "We're a mortgage lender. HomeLoanAgents is a DBA of United Fidelity Funding Corp., NMLS #34381. We don't shop your information to a list of other lenders."],
    ["What does the $3,500 fee cover?", "Our flat lender origination fee covers underwriting, processing and the credit report. Third-party services (such as appraisal, title and settlement), government recording fees, prepaid items and escrow deposits are separate and itemized on your Loan Estimate."],
    ["Does AI decide whether I'm approved?", "No. AI agents gather, organize and check documents and draft worksheets. A human underwriter reviews your complete file and makes the credit decision."],
    ["Will starting online affect my credit?", "Exploring and starting online doesn't affect your credit score. If you apply, we'll tell you before a credit report is pulled as part of underwriting."],
    ["How fast can I close?", "Our process is designed to move faster because agents work on your file in parallel and around the clock. We don't promise a closing date, because timing also depends on your documents, the property, the appraisal and title."],
    [
      "Why don't you show rates on the site?",
      `A rate depends on your credit, loan amount, property, down payment and the market on the day you lock. Instead of a teaser number, your Loan Estimate and updates from your licensed loan team by ${BORROWER_CONTACT_CHANNELS} show real options and terms.`,
    ],
  ];
  return (
    <section className="section section-warm">
      <div className="wrap faq-wrap">
        <div className="section-head">
          <span className="eyebrow">Questions</span>
          <h2 className="h2">Straight answers.</h2>
          <p className="lead muted">
            Can&apos;t find yours?{" "}
            <a href={UFF_CONSUMER_PHONE_TEL} aria-label={`Voice agent, ${UFF_CONSUMER_PHONE}`}>
              Reach our voice agent at {UFF_CONSUMER_PHONE}
            </a>
            , or start online for follow-up by {BORROWER_CONTACT_CHANNELS}.
          </p>
        </div>
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
      </div>
    </section>
  );
}

function HomeCtaSection() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="cta-band on-deep">
          <div className="cb-copy">
            <span className="eyebrow">Ready when you are</span>
            <h2 className="h2">See your options, with the fee already on the table.</h2>
            <p className="muted">
              Start online in a few minutes. Licensed mortgage professionals supervise your file and follow up by{" "}
              {BORROWER_CONTACT_CHANNELS}.
            </p>
            <div className="actions">
              <Link className="btn btn-mint btn-lg" href="/get-started">
                Get started <span className="arr">→</span>
              </Link>
              <a
                className="btn btn-ghost btn-lg"
                href={UFF_CONSUMER_PHONE_TEL}
                aria-label={`Voice agent, ${UFF_CONSUMER_PHONE}`}
              >
                Voice agent · {UFF_CONSUMER_PHONE}
              </a>
            </div>
          </div>
          <div className="cb-photo">
            <Image src={marketingPhotos.ctaDoorway.src} alt={marketingPhotos.ctaDoorway.alt} width={1152} height={864} loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}