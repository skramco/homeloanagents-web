import type { Metadata } from "next";
import type { JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import type { LearnGuideConfig } from "@/lib/learnGuideContent";
import { MLO_NMLS, MLO_NAME, UFF_CONSUMER_PHONE, UFF_CONSUMER_PHONE_TEL } from "@/lib/constants";

const MLO_NMLS_URL = `https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/${MLO_NMLS}`;

export function LearnGuidePage({ config }: { config: LearnGuideConfig }) {
  return (
    <>
      <section className="a-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb" style={{ margin: 0 }}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/learn">Learn</Link>
            <span>/</span>
            <span>{config.crumbLabel}</span>
          </nav>
          <span className="eyebrow">{config.eyebrow}</span>
          <h1>{config.h1}</h1>
          <p className="lead muted">{config.lead}</p>
          <div className="a-meta">
            <span className="av">
              <Image src="/brand/homeloanagents-icon-reversed.svg" alt="" width={40} height={40} style={{ borderRadius: "50%" }} />
            </span>
            <span>
              <b>HomeLoanAgents Learn</b>
              <br />
              {config.metaLine}
            </span>
          </div>
        </div>
      </section>

      <div className="wrap a-layout">
        <nav className="toc" aria-label="In this guide">
          <b>In this guide</b>
          {config.toc.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <article className="body">
          {config.tldr ? (
            <div className="tldr">
              <b>The short version</b>
              <ul>
                {config.tldr.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {config.blocks.map((block, index) => {
            switch (block.type) {
              case "h2":
                return (
                  <div key={`${block.id}-${index}`}>
                    <h2 id={block.id}>{block.title}</h2>
                    {block.paragraphs.map((p) => (
                      <p key={p.slice(0, 40)}>{p}</p>
                    ))}
                  </div>
                );
              case "ul":
                return (
                  <ul key={`ul-${index}`}>
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              case "ol":
                return (
                  <ol key={`ol-${index}`}>
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                );
              case "callout":
                return (
                  <div key={`callout-${index}`} className={block.variant === "honest" ? "callout honest" : "callout"}>
                    <b>{block.title}</b>
                    <span>{block.body}</span>
                  </div>
                );
              default:
                return null;
            }
          })}

          <div className="reviewed">
            <span>
              Educational content, not an offer to lend or a commitment. Example numbers are illustrative only where stated.
              Reviewed by a licensed loan officer and compliance before publishing.
            </span>
          </div>
        </article>

        <aside className="a-side">
          <div className="side-cta on-deep">
            <span className="eyebrow">{config.sideCta.eyebrow}</span>
            <h3>{config.sideCta.title}</h3>
            <p className="small" style={{ color: "var(--text-on-deep-muted)" }}>
              {config.sideCta.body}
            </p>
            <Link className="btn btn-mint btn-sm" href={config.sideCta.href} style={{ justifySelf: "start" }}>
              {config.sideCta.linkLabel}
            </Link>
          </div>
          <div className="card">
            <h3>Related guides</h3>
            <div className="related">
              {config.related.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="card">
            <h3>Questions?</h3>
            <p className="small">
              Licensed loan officer {MLO_NAME},{" "}
              <a href={MLO_NMLS_URL} target="_blank" rel="noopener noreferrer">
                NMLS #{MLO_NMLS}
              </a>
              , supervises your file. We follow up by email, text, or our voice agent.
            </p>
            <a
              className="btn btn-ghost btn-sm"
              href={UFF_CONSUMER_PHONE_TEL}
              style={{ justifySelf: "start" }}
              aria-label={`Voice agent, ${UFF_CONSUMER_PHONE}`}
            >
              Voice agent · {UFF_CONSUMER_PHONE}
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}

export function createLearnGuidePage(config: LearnGuideConfig): {
  metadata: Metadata;
  GuidePage: () => JSX.Element;
} {
  const metadata: Metadata = {
    title: config.metadata.title,
    description: config.metadata.description,
  };

  function GuidePage() {
    return <LearnGuidePage config={config} />;
  }

  return { metadata, GuidePage };
}