import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FeeCalculator } from "@/components/marketing/FeeCalculator";
import { MLO_NMLS, MLO_NAME, UFF_CONSUMER_PHONE, UFF_CONSUMER_PHONE_TEL } from "@/lib/constants";

const MLO_NMLS_URL = `https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/${MLO_NMLS}`;

export const metadata: Metadata = {
  title: "How a flat origination fee works",
  description:
    "What a mortgage origination fee pays for, how flat and percentage pricing compare, when a flat fee costs more, and how to compare Loan Estimates.",
};

export default function Page() {
  return (
    <>
      <section className="a-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb" style={{ margin: 0 }}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/learn">Learn</Link>
            <span>/</span>
            <span>Pricing</span>
          </nav>
          <span className="eyebrow">Guide · Pricing &amp; fees</span>
          <h1>How a flat origination fee works, and when it saves you money</h1>
          <p className="lead muted">
            A plain-English look at what lenders charge to make your loan, how percentage and flat pricing differ, and
            how to compare offers fairly.
          </p>
          <div className="a-meta">
            <span className="av">
              <Image src="/brand/homeloanagents-icon-reversed.svg" alt="" width={40} height={40} style={{ borderRadius: "50%" }} />
            </span>
            <span>
              <b>HomeLoanAgents Learn</b>
              <br />
              Updated Nov 25, 2026 · 6 min read
            </span>
          </div>
        </div>
      </section>

      <div className="wrap a-layout">
        <nav className="toc" aria-label="In this guide">
          <b>In this guide</b>
          <a href="#what">What it is</a>
          <a href="#types">Percentage vs flat</a>
          <a href="#example">An illustrative example</a>
          <a href="#more">When flat costs more</a>
          <a href="#not">What it doesn&apos;t cover</a>
          <a href="#compare">Comparing offers</a>
          <a href="#takeaways">Key takeaways</a>
        </nav>

        <article className="body">
          <div className="tldr">
            <b>The short version</b>
            <ul>
              <li>An origination fee is what a lender charges to process, underwrite and fund your loan.</li>
              <li>Percentage fees grow with your loan amount; a flat fee stays the same.</li>
              <li>A flat fee isn&apos;t always cheaper. Compare full Loan Estimates, not one line.</li>
            </ul>
          </div>

          <h2 id="what">What an origination fee is</h2>
          <p>
            When you get a mortgage, the lender does a lot of work before a dollar changes hands: collecting and
            checking documents, verifying income and assets, ordering the credit report, underwriting the file against the
            program&apos;s guidelines and preparing it to close. The origination fee is how many lenders charge for that
            work.
          </p>
          <p>
            On your Loan Estimate, it appears in <b>Section A, Origination Charges</b>. That section can also include{" "}
            <b>discount points</b>, which are optional upfront payments that lower your interest rate. Points and the
            origination fee are different things, even though they sit in the same section.
          </p>

          <h2 id="types">Percentage vs flat pricing</h2>
          <p>Lenders price origination in a few ways:</p>
          <ul>
            <li>
              <b>As a percentage of the loan amount.</b> For example, 1% of the loan. The bigger the loan, the bigger the
              fee.
            </li>
            <li>
              <b>As a flat fee.</b> One amount regardless of loan size. Ours is $3,500, covering underwriting, processing
              and the credit report.
            </li>
            <li>
              <b>Built into the rate.</b> Some lenders charge little or nothing upfront and earn more through a slightly
              higher interest rate.
            </li>
          </ul>
          <p>None of these is automatically right or wrong. What matters is that you can see what you&apos;re paying and compare it.</p>
          <p className="pull">
            The work to underwrite a $1.5 million loan is about the same as for a $300,000 loan. A flat fee prices the
            work, not the loan size.
          </p>

          <h2 id="example">An illustrative example</h2>
          <p>Here&apos;s how a hypothetical 1% origination fee compares with a flat $3,500 fee. Move the slider to try other loan amounts.</p>
          <FeeCalculator light />
          <p style={{ marginTop: 22 }}>
            At $750,000, 1% is $7,500, which is $4,000 more than the flat fee in this example. At $1,500,000, 1% is
            $15,000, or $11,500 more.
          </p>

          <h2 id="more">When a flat fee costs more</h2>
          <div className="callout honest">
            <b>We&apos;d rather say it up front</b>
            <span>
              On a $300,000 loan, a 1% fee is $3,000, or $500 <i>less</i> than a $3,500 flat fee. The two are equal at
              $350,000. Below that, percentage pricing can cost less.
            </span>
          </div>
          <p>
            A flat fee tends to help most on mid-size and larger loans. If your loan is smaller, look closely at the
            whole offer, including the rate and any lender credits, before choosing.
          </p>

          <h2 id="not">What an origination fee doesn&apos;t cover</h2>
          <p>Even with a flat lender fee, other closing costs remain because they&apos;re paid to other parties or are your own costs of owning the home:</p>
          <ul>
            <li>
              <b>Third-party services</b> like the appraisal, title insurance and settlement or escrow services
            </li>
            <li>
              <b>Government fees</b> such as recording fees and, in some places, transfer taxes
            </li>
            <li>
              <b>Prepaids and escrow</b> such as prepaid interest, homeowners insurance and property tax deposits
            </li>
            <li>
              <b>Optional or program costs</b> like discount points you choose, mortgage insurance or program-specific
              fees
            </li>
          </ul>
          <p>All of these are itemized on your Loan Estimate, so you can see them before you commit.</p>

          <h2 id="compare">How to compare offers fairly</h2>
          <ol>
            <li>
              <b>Get Loan Estimates on the same day</b> for the same loan amount, program and lock period, since prices
              change daily.
            </li>
            <li>
              <b>Compare Section A side by side.</b> Separate the origination fee from any points.
            </li>
            <li>
              <b>Look at the rate and the APR together.</b> The APR folds in certain costs, which helps show the
              trade-off between upfront fees and the rate.
            </li>
            <li>
              <b>Check total closing costs</b> and cash to close, not just one line.
            </li>
            <li>
              <b>Ask what&apos;s included.</b> With us, underwriting, processing and the credit report are inside the
              $3,500.
            </li>
          </ol>

          <h2 id="takeaways">Key takeaways</h2>
          <ul>
            <li>Origination fees pay for the lender&apos;s work; they&apos;re in Section A of your Loan Estimate.</li>
            <li>Percentage fees scale with loan size. A flat fee doesn&apos;t.</li>
            <li>In our illustrative example, a flat $3,500 fee costs less than a 1% fee above $350,000 and more below it.</li>
            <li>The best comparison is the full Loan Estimate: fee, points, rate, APR and total costs.</li>
          </ul>

          <div className="reviewed">
            <span>
              Educational content, not an offer to lend or a commitment. Example numbers are illustrative only. Reviewed
              by a licensed loan officer and compliance before publishing.
            </span>
          </div>
        </article>

        <aside className="a-side">
          <div className="side-cta on-deep">
            <span className="eyebrow">Our fee</span>
            <h3>$3,500 flat, any loan size</h3>
            <p className="small" style={{ color: "var(--text-on-deep-muted)" }}>
              See what it covers and which costs are separate.
            </p>
            <Link className="btn btn-mint btn-sm" href="/pricing" style={{ justifySelf: "start" }}>
              Full fee breakdown →
            </Link>
          </div>
          <div className="card">
            <h3>Related guides</h3>
            <div className="related">
              <Link href="/how-it-works">What AI loan processing means for you</Link>
              <Link href="/learn/closing-costs">Reading your Loan Estimate, line by line</Link>
              <Link href="/learn/what-affects-your-rate">Points vs. lender credits</Link>
            </div>
          </div>
          <div className="card">
            <h3>Prefer to talk?</h3>
            <p className="small">
              Licensed loan officer {MLO_NAME},{" "}
              <a href={MLO_NMLS_URL} target="_blank" rel="noopener noreferrer">
                NMLS #{MLO_NMLS}
              </a>
              .
            </p>
            <a className="btn btn-ghost btn-sm" href={UFF_CONSUMER_PHONE_TEL} style={{ justifySelf: "start" }}>
              {UFF_CONSUMER_PHONE}
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}