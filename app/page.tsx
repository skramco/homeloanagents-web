import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { AI_DISCLOSURE, LAUNCH_STATES, TAGLINE } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <PageHero
        title={
          <>
            AI <span className="text-emerald">agents.</span> Human supervision.
          </>
        }
        subtitle={TAGLINE}
      >
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
          <Link href="/get-started" className="btn btn-primary">
            Apply
          </Link>
          <Link href="/how-it-works" className="btn btn-secondary">
            See how it works
          </Link>
        </div>
      </PageHero>

      <section className="section" id="approach">
        <div className="section-inner">
          <p className="section-label">Our approach</p>
          <h2>Specialized agents. People in the loop.</h2>
          <p className="section-lead">
            We use AI agents to handle intake, your application, disclosures, processing, vendor
            orders, and closing coordination—with human supervision throughout. People review the
            work and step in when a bot flags something. A licensed loan officer approves anything
            about rates before it goes out. Being open about AI is designed to reduce human
            overhead, and we can pass those savings on through transparent workflow, costs, and
            pricing.
          </p>
          <div className="card-grid">
            <article className="card">
              <h3>Intake &amp; application</h3>
              <p>
                Agents guide document collection and application steps while keeping you informed at
                homeloanagents.com.
              </p>
            </article>
            <article className="card">
              <h3>Processing &amp; vendors</h3>
              <p>
                Agents coordinate processing tasks and vendor orders; people verify exceptions and
                compliance-sensitive items.
              </p>
            </article>
            <article className="card">
              <h3>Rates &amp; closing</h3>
              <p>
                Rate options are reviewed and approved by a licensed loan officer before you see them.
                Agents help coordinate through closing.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="how-it-works-preview">
        <div className="section-inner">
          <p className="section-label">How it works</p>
          <h2>A transparent path from apply to close</h2>
          <p className="section-lead">
            Apply online, agents work your file, a human reviews, you receive rate options approved
            by a licensed loan officer, then disclosures, processing, underwriting, and closing.
          </p>
          <ol className="flow-list">
            <li>
              <span className="flow-step-num">1</span>
              <div>
                <h3>Apply online</h3>
                <p>Start at homeloanagents.com—you&apos;ll know you&apos;re working with AI agents.</p>
              </div>
            </li>
            <li>
              <span className="flow-step-num">2</span>
              <div>
                <h3>Agents work your file</h3>
                <p>Specialized agents handle remedial tasks across the loan workflow.</p>
              </div>
            </li>
            <li>
              <span className="flow-step-num">3</span>
              <div>
                <h3>Human review &amp; rate options</h3>
                <p>
                  People review agent output; a licensed loan officer approves rate-related
                  communications.
                </p>
              </div>
            </li>
            <li>
              <span className="flow-step-num">4</span>
              <div>
                <h3>Disclosures through closing</h3>
                <p>Disclosures, processing, underwriting, and closing coordination—with supervision.</p>
              </div>
            </li>
          </ol>
          <div className="btn-row">
            <Link href="/how-it-works" className="btn btn-secondary">
              Full how-it-works page
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="pricing-preview">
        <div className="section-inner">
          <p className="section-label">Pricing</p>
          <h2>Simple, transparent fees</h2>
          <p className="section-lead">
            No underwriting fee. A flat 0.50% (50 bps) origination fee—with your choice of how to pay
            it. This structure is designed to reflect savings from efficient, agent-assisted
            workflow; your costs will depend on your loan and choices.
          </p>
          <div className="pricing-highlight">
            <div className="pricing-box">
              <h3>Underwriting fee</h3>
              <p className="pricing-fee">$0</p>
              <p className="text-muted">No separate underwriting fee.</p>
            </div>
            <div className="pricing-box">
              <h3>Origination fee</h3>
              <p className="pricing-fee">0.50%</p>
              <p className="text-muted">Flat 50 basis points—your choice below.</p>
            </div>
          </div>
          <div className="pricing-options">
            <div className="option-card">
              <strong>Build into the rate</strong>
              <div className="option-visual">
                Origination fee reflected in pricing presented after LO approval—not a separate
                out-of-pocket line item.
              </div>
              <p className="text-muted" style={{ margin: 0, fontSize: "0.875rem" }}>
                May suit borrowers who prefer fewer upfront fees.
              </p>
            </div>
            <div className="option-card">
              <strong>Pay out of pocket</strong>
              <div className="option-visual">
                Pay the 0.50% origination at closing; rate pricing shown without rolling the fee in.
              </div>
              <p className="text-muted" style={{ margin: 0, fontSize: "0.875rem" }}>
                May suit borrowers who want fee transparency at closing.
              </p>
            </div>
          </div>
          <div className="btn-row">
            <Link href="/pricing" className="btn btn-secondary">
              Pricing details
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner">
          <p className="section-label">Availability</p>
          <h2>Launching in select states</h2>
          <p className="section-lead">
            We are launching in California, Texas, and Florida, with more states coming. Licensing
            details and NMLS information are on our disclosures page.
          </p>
          <div className="states-pills">
            {LAUNCH_STATES.map((state) => (
              <span key={state}>{state}</span>
            ))}
            <span style={{ opacity: 0.7 }}>More states coming</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner cta-panel">
          <h2>Ready to start?</h2>
          <p className="text-muted" style={{ margin: "0 auto 1.5rem", maxWidth: "42ch" }}>
            {AI_DISCLOSURE} Our borrower portal is coming soon—you can get on the list today.
          </p>
          <Link href="/get-started" className="btn btn-primary">
            Get started
          </Link>
        </div>
      </section>
    </>
  );
}