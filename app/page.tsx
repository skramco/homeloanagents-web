import Image from "next/image";
import Link from "next/link";
import { FlatFeeCallout } from "@/components/FlatFeeCallout";
import { FaqSection } from "@/components/FaqSection";
import { homeFaq } from "@/lib/homeFaq";
import { loanTypeTiles } from "@/lib/navigation";
import { flatFeeShortCallout } from "@/lib/pricingCopy";
import { AI_DISCLOSURE, TAGLINE, TAGLINE_SUPPORTING } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <section className="page-hero lender-hero">
        <div className="page-hero-glow" aria-hidden />
        <div className="page-hero-content">
          <p className="hero-eyebrow">Mortgage company · NMLS #34381</p>
          <h1>
            Home loans for <span className="text-emerald">buying</span> or refinancing
          </h1>
          <p className="page-hero-sub">{TAGLINE}</p>
          <p className="hero-supporting">{TAGLINE_SUPPORTING}</p>
          <Image
            src="/brand/homeloanagents-icon-reversed.svg"
            alt=""
            width={280}
            height={280}
            className="hero-icon"
            aria-hidden
          />
          <p className="hero-badge">{AI_DISCLOSURE}</p>
          <div className="btn-row">
            <Link href="/buy" className="btn btn-primary">
              Buy a home
            </Link>
            <Link href="/refinance" className="btn btn-secondary">
              Refinance
            </Link>
          </div>
        </div>
      </section>

      <section className="trust-bar">
        <div className="trust-bar-inner">
          <p>
            <strong>Purchase &amp; refinance</strong> for many borrower types
          </p>
          <p>
            <strong>AI agents + mortgage pros</strong> — underwriters &amp; LOs in the loop
          </p>
          <p>
            <strong>{flatFeeShortCallout}</strong>
          </p>
        </div>
      </section>

      <section className="section" id="loan-types">
        <div className="section-inner">
          <p className="section-label">Loan options</p>
          <h2>Financing for purchases and refinances</h2>
          <p className="section-lead">
            From first-time buyers to jumbo loans and bank-statement programs, we offer home financing
            designed to fit many goals. Eligibility depends on your profile and program guidelines—we do
            not guarantee approval.
          </p>
          <div className="card-grid loan-tile-grid">
            {loanTypeTiles.map((tile) => (
              <Link key={tile.href} href={tile.href} className="card card-link">
                <h3>{tile.title}</h3>
                <p>{tile.blurb}</p>
              </Link>
            ))}
          </div>
          <div className="btn-row">
            <Link href="/loans/conventional" className="btn btn-secondary">
              Explore loan options
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="how-it-works">
        <div className="section-inner">
          <p className="section-label">How it works</p>
          <h2>Where mortgage intelligence meets super intelligence</h2>
          <p className="section-lead">
            Our agents are trained on every part of the mortgage process to deliver high levels of
            professionalism, communication, and transparency. Bots handle heavy tasks that don&apos;t need a
            human; mortgage professionals review the work, underwrite, and approve rate-related
            communications—so files can move faster under supervision, not on autopilot.
          </p>
          <ol className="flow-list">
            <li>
              <span className="flow-step-num">1</span>
              <div>
                <h3>Apply &amp; get organized</h3>
                <p>Start online. Agents help gather documents and keep you informed along the way.</p>
              </div>
            </li>
            <li>
              <span className="flow-step-num">2</span>
              <div>
                <h3>Agents move the file</h3>
                <p>Intake, disclosures support, processing tasks, vendor orders, and closing prep.</p>
              </div>
            </li>
            <li>
              <span className="flow-step-num">3</span>
              <div>
                <h3>Humans review &amp; underwrite</h3>
                <p>Loan officers and underwriters step in on judgment calls, guidelines, and approvals.</p>
              </div>
            </li>
            <li>
              <span className="flow-step-num">4</span>
              <div>
                <h3>Disclose, process, close</h3>
                <p>Clear Loan Estimates and ongoing updates—designed for transparency through closing.</p>
              </div>
            </li>
          </ol>
          <div className="btn-row">
            <Link href="/why-homeloanagents" className="btn btn-secondary">
              Why HomeLoanAgents
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="pricing-preview">
        <div className="section-inner">
          <p className="section-label">Pricing</p>
          <h2>Flat lender origination fee—not a percentage</h2>
          <p className="section-lead">
            Percentage origination fees meant larger loans paid more to originate. We use a flat $3,500
            lender origination fee instead, made possible in part because agents handle routine work with
            human mortgage supervision.
          </p>
          <FlatFeeCallout compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner">
          <p className="section-label">Speed &amp; transparency</p>
          <h2>Designed to move your file forward</h2>
          <div className="proof-grid">
            <article className="card">
              <h3>Clear communication</h3>
              <p>Status updates and next steps—no black box between you and your loan team.</p>
            </article>
            <article className="card">
              <h3>Agent-assisted workflow</h3>
              <p>Routine tasks automated with supervision; professionals handle underwriting and exceptions.</p>
            </article>
            <article className="card">
              <h3>No advertised rates</h3>
              <p>Pricing is personal to your file. A licensed loan officer approves rate-related information.</p>
            </article>
          </div>
        </div>
      </section>

      <FaqSection items={homeFaq} id="faq" />

      <section className="section">
        <div className="section-inner">
          <p className="section-label">Licensing</p>
          <h2>Licensed mortgage lending</h2>
          <p className="section-lead">
            United Fidelity Funding Corp. (NMLS #34381) holds mortgage licenses in multiple states. See the
            full state-by-state license list, mandatory notices, and regulatory text on our licensing page.
          </p>
          <div className="btn-row">
            <Link href="/licensing" className="btn btn-secondary">
              View all licensed states
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner cta-panel">
          <h2>Ready to get started?</h2>
          <p className="text-muted" style={{ margin: "0 auto 1.5rem", maxWidth: "48ch" }}>
            {AI_DISCLOSURE} Tell us about your purchase or refinance goal—we&apos;ll guide you when the
            borrower portal opens.
          </p>
          <Link href="/get-started" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}