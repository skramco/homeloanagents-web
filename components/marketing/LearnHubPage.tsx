import Link from "next/link";
import { learnHubArticles } from "@/lib/learnGuideContent";
import { FLAT_ORIGINATION_FEE } from "@/lib/constants";

export function LearnHubPage() {
  const flatFee = `$${FLAT_ORIGINATION_FEE.toLocaleString()}`;

  return (
    <>
      <section className="p-hero">
        <div className="wrap p-hero-grid">
          <div className="p-hero-copy">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span> / </span>
              <span>Learn</span>
            </nav>
            <p className="eyebrow">Learning center</p>
            <h1 className="h1">Mortgage guides when you want them—not rate ads.</h1>
            <p className="lead">
              Education on process, fees, credit, and affordability. These articles are not loan offers, pre-approvals, or
              guarantees of approval or pricing.
            </p>
            <div className="hero-actions">
              <Link href="/how-it-works" className="btn btn-primary">
                How it works
              </Link>
              <Link href="/calculators" className="btn btn-ghost">
                Illustrative calculators
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow">Featured</p>
            <h2 className="h2">Start with fees and process</h2>
          </header>
          <div className="grid g2">
            <Link href="/learn/how-a-flat-origination-fee-works" className="card lift">
              <span className="eyebrow">Pricing &amp; fees</span>
              <h3>How a flat origination fee works</h3>
              <p className="muted">Our {flatFee} flat lender fee, illustrative comparisons, and what stays separate on your Loan Estimate.</p>
              <span className="text-link">Read guide →</span>
            </Link>
            <Link href="/learn/mortgage-process" className="card lift">
              <span className="eyebrow">Process</span>
              <h3>Mortgage process steps</h3>
              <p className="muted">Milestones from application through underwriting, disclosures, and closing.</p>
              <span className="text-link">Read guide →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow">All guides</p>
            <h2 className="h2">Browse by topic</h2>
          </header>
          <ul className="learn-index learn-index-grid" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {learnHubArticles.map((article) => (
              <li key={article.href} className="card">
                <span className="eyebrow">{article.category}</span>
                <Link href={article.href}>
                  <strong>{article.title}</strong>
                </Link>
                <p className="muted" style={{ margin: "0.35rem 0 0" }}>
                  {article.lead}
                </p>
                <p className="fine" style={{ marginTop: "0.75rem" }}>
                  {article.readTime}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}