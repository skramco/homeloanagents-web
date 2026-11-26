import type { Metadata } from "next";
import type { JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import { AffordabilityCalculator } from "@/components/AffordabilityCalculator";
import { MortgagePaymentCalculator } from "@/components/MortgagePaymentCalculator";
import type { ProgramTrustConfig } from "@/lib/programTrustContent";
import { BORROWER_CONTACT_CHANNELS } from "@/lib/constants";
import { ProgramDocumentChecklist } from "./ProgramDocumentChecklist";
import { ProgramSubnav, type ProgramSubnavItem } from "./ProgramSubnav";
import { MarketingLicensingBlock } from "./MarketingLicensingBlock";

const SUBNAV_ITEMS: ProgramSubnavItem[] = [
  { id: "fit", label: "Is it a fit?" },
  { id: "eligibility", label: "Eligibility" },
  { id: "process", label: "How it works" },
  { id: "documents", label: "Documents" },
  { id: "timeline", label: "Timeline" },
  { id: "team", label: "Who reviews" },
  { id: "fees", label: "Fees" },
  { id: "faq", label: "FAQ" },
];

type ProgramTrustPageProps = {
  config: ProgramTrustConfig;
};

export function ProgramTrustPage({ config }: ProgramTrustPageProps) {
  const subnavCta = config.subnavCta ?? { href: "/get-started", label: "Get started" };

  return (
    <>
      <header className="p-hero">
        <div className="wrap p-hero-grid">
          <div className="p-hero-copy">
            <nav className="crumbs" aria-label="Breadcrumb">
              {config.breadcrumbs.map((crumb, index) => (
                <span key={`${crumb.label}-${index}`}>
                  {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : <span>{crumb.label}</span>}
                  {index < config.breadcrumbs.length - 1 ? " / " : null}
                </span>
              ))}
            </nav>
            <p className="eyebrow">{config.hero.eyebrow}</p>
            <h1 className="h1">{config.hero.h1}</h1>
            <p className="lead">{config.hero.lead}</p>
            <div className="hero-actions">
              <Link href={config.hero.primaryCta?.href ?? "/get-started"} className="btn btn-primary">
                {config.hero.primaryCta?.label ?? "Get started"}
              </Link>
              {config.hero.secondaryCta ? (
                <Link href={config.hero.secondaryCta.href} className="btn btn-ghost">
                  {config.hero.secondaryCta.label}
                </Link>
              ) : (
                <Link href="#fees" className="btn btn-ghost">
                  See lender fees
                </Link>
              )}
            </div>
          </div>
          <div className="p-hero-photo">
            <Image
              src={config.hero.photo.src}
              alt={config.hero.photo.alt}
              fill
              priority
              sizes="(max-width: 1080px) 100vw, 45vw"
            />
          </div>
        </div>
        <div className="wrap">
          <div className="facts" role="list">
            {config.keyFacts.map((fact) => (
              <div key={fact.k} className={fact.highlight ? "fact hl" : "fact"} role="listitem">
                <span className="k">{fact.k}</span>
                <span className="v">{fact.v}</span>
                <span className="d">{fact.d}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <ProgramSubnav items={SUBNAV_ITEMS} cta={subnavCta} />

      {config.programNotes?.length ? (
        <section className="section section-warm">
          <div className="wrap narrow">
            {config.programNotes.map((note) => (
              <div key={note.title} className={`callout ${note.variant === "honest" ? "honest" : ""}`}>
                <b>{note.title}</b>
                <p>{note.body}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="section" id="fit">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow">Program fit</p>
            <h2 className="h2">{config.fit.headline}</h2>
            <p className="lead">{config.fit.lead}</p>
          </header>
          <div className="split">
            <div className="prose">
              {config.fit.bodyParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <aside className="side-cta">
              <h3>Explore your options</h3>
              <p className="fine">
                Start online with no obligation. Licensed loan officers compare programs after we learn about your
                goals, with guidance by {BORROWER_CONTACT_CHANNELS}. Call our inbound line anytime with questions.
              </p>
              <Link href="/get-started" className="btn btn-mint">
                Get started
              </Link>
            </aside>
          </div>
          <div className="fit" role="navigation" aria-label="Related loan programs">
            {config.fit.siblings.map((sibling) =>
              sibling.current ? (
                <div key={sibling.href} className="cur">
                  <b>{sibling.title}</b>
                  <span>{sibling.description}</span>
                </div>
              ) : (
                <Link key={sibling.href} href={sibling.href}>
                  <b>{sibling.title}</b>
                  <span>{sibling.description}</span>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="section section-warm" id="eligibility">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow">Guidelines</p>
            <h2 className="h2">{config.eligibility.headline}</h2>
            {config.eligibility.lead ? <p className="lead">{config.eligibility.lead}</p> : null}
          </header>
          <div className="grid g3 elig3">
            {config.eligibility.cards.map((card) => (
              <div key={card.title} className="card">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
          <p className="fine" style={{ marginTop: "1.5rem" }}>
            {config.eligibility.footnote}
          </p>
        </div>
      </section>

      <section className="section" id="process">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow">Process</p>
            <h2 className="h2">{config.howItWorks.headline}</h2>
            {config.howItWorks.lead ? <p className="lead">{config.howItWorks.lead}</p> : null}
          </header>
          <div className="lanes">
            {config.howItWorks.lanes.map((lane) => (
              <article key={lane.title} className="lane">
                <div className="owner">
                  {lane.owners.map((owner) => (
                    <span
                      key={owner}
                      className={
                        owner === "ai" ? "pill-ai" : owner === "hu" ? "pill-hu" : "pill-hu"
                      }
                      style={owner === "you" ? { background: "var(--cream-200)", color: "var(--ink-700)" } : undefined}
                    >
                      {owner === "ai" ? "AI agent" : owner === "hu" ? "Human" : "You"}
                    </span>
                  ))}
                </div>
                <div>
                  <h3>{lane.title}</h3>
                  <p>{lane.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-warm" id="documents">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow">Paperwork</p>
            <h2 className="h2">{config.documentChecklist.headline}</h2>
            <p className="lead">{config.documentChecklist.lead}</p>
          </header>
          <ProgramDocumentChecklist
            groups={config.documentChecklist.groups.map((group, groupIndex) => ({
              title: group.title,
              items: group.items.map((label, itemIndex) => ({
                id: `${groupIndex}-${itemIndex}`,
                label,
              })),
            }))}
            footnote={config.documentChecklist.footnote}
          />
        </div>
      </section>

      <section className="section on-deep" id="timeline">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow">Milestones</p>
            <h2 className="h2">{config.timeline.headline}</h2>
            <p className="lead">{config.timeline.lead}</p>
          </header>
          <ol className="timeline">
            {config.timeline.steps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                <div className="owner">
                  {step.owners.map((owner) => (
                    <span
                      key={owner}
                      className={owner === "ai" ? "o-ai" : owner === "hu" ? "o-hu" : "o-you"}
                    >
                      {owner === "ai" ? "AI agent" : owner === "hu" ? "Human" : "You"}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="team">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow">Supervision</p>
            <h2 className="h2">{config.reviewers.headline}</h2>
            <p className="lead">{config.reviewers.lead}</p>
          </header>
          <div className="grid g3">
            {config.reviewers.roles.map((role) => (
              <article key={role.title} className="role">
                <div className="who">
                  <div className={role.kind === "ai" ? "avatar ai" : "avatar hu"} aria-hidden>
                    {role.kind === "ai" ? "AI" : role.initials ?? "HU"}
                  </div>
                  <div>
                    <span className="kind">{role.kind === "ai" ? "AI agent" : "Human professional"}</span>
                    <h3>{role.title}</h3>
                  </div>
                </div>
                <p>{role.body}</p>
                {role.decides ? <span className="decides">Final credit decision</span> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      {config.embedIllustrativeTool ? (
        <section className="section" id="calculator">
          <div className="wrap narrow">
            <header className="section-head">
              <p className="eyebrow">Illustrative example only</p>
              <h2 className="h2">Try the calculator</h2>
              <p className="lead">
                This tool is for education only. It is not a loan offer, readiness letter, or rate quote. Actual payments and
                affordability depend on underwriting, taxes, insurance, and program guidelines.
              </p>
            </header>
            {config.embedIllustrativeTool === "mortgage-payment" ? (
              <MortgagePaymentCalculator />
            ) : (
              <AffordabilityCalculator />
            )}
          </div>
        </section>
      ) : null}

      <section className="section section-warm" id="fees">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow">Pricing</p>
            <h2 className="h2">{config.fees.headline}</h2>
            <p className="lead">{config.fees.lead}</p>
          </header>
          <div className="feebox">
            <div className="fb-l">
              <p className="eyebrow">Lender origination</p>
              <p className="fb-amt">{config.fees.amount}</p>
              <p className="fine">{config.fees.leftLead}</p>
            </div>
            <div className="fb-r">
              <div>
                <h3>Included in our lender fee</h3>
                <ul>
                  {config.fees.included.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Separate on your Loan Estimate</h3>
                <ul>
                  {config.fees.excluded.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {config.fees.footnote ? (
            <p className="fine" style={{ marginTop: "1.25rem" }}>
              {config.fees.footnote}
            </p>
          ) : null}
          {config.fees.illustrativeComparison ? (
            <div className="tbl-wrap" style={{ marginTop: "1.5rem" }}>
              <table className="tbl">
                <thead>
                  <tr>
                    <th scope="col">Scenario</th>
                    <th scope="col" className="num">
                      Illustrative lender charge
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {config.fees.illustrativeComparison.rows.map((row) => (
                    <tr key={row.label}>
                      <td>{row.label}</td>
                      <td className="num">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
                <caption>{config.fees.illustrativeComparison.caption}</caption>
              </table>
            </div>
          ) : null}
        </div>
      </section>

      <section className="section" id="faq">
        <div className="wrap faq-wrap">
          <header className="section-head">
            <p className="eyebrow">Questions</p>
            <h2 className="h2">Frequently asked questions</h2>
            <p className="lead">{config.faqLead}</p>
          </header>
          <div className="faq">
            {config.faqs.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <div className="faq-a">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <MarketingLicensingBlock />

      <section className="section section-warm">
        <div className="wrap narrow reviewed">
          <p className="fine">{config.closingCompliance}</p>
        </div>
      </section>
    </>
  );
}

export function createProgramPage(config: ProgramTrustConfig): {
  metadata: Metadata;
  ProgramPage: () => JSX.Element;
} {
  const metadata: Metadata = {
    title: config.metadata.title,
    description: config.metadata.description,
  };

  function ProgramPage() {
    return <ProgramTrustPage config={config} />;
  }

  return { metadata, ProgramPage };
}