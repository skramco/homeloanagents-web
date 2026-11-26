import type { Metadata } from "next";
import Link from "next/link";
import { AI_DISCLOSURE } from "@/lib/constants";
import { licensingPageHeader, stateLicenseBlocks } from "@/lib/licenseStates";

export const metadata: Metadata = {
  title: "Licensing & disclosures",
};

export default function LicensingPage() {
  const header = licensingPageHeader;

  return (
    <article className="content-page licensing-page">
      <header className="content-page-header">
        <h1>Licensing &amp; disclosures</h1>
      </header>

      <section className="licensing-header-block" aria-labelledby="company-licensing">
        <h2 id="company-licensing">{header.company}</h2>
        <p>
          NMLS #34381 ·{" "}
          <a href={header.nmlsCompanyUrl} target="_blank" rel="noopener noreferrer">
            View NMLS record
          </a>
        </p>
        <p>
          Principal office: {header.address} · {header.phonePlaceholder}
        </p>
        <p>
          Loan officer: {header.loName}, MLO, NMLS #{header.loNmls} ·{" "}
          <a href={header.loNmlsUrl} target="_blank" rel="noopener noreferrer">
            View NMLS record
          </a>
          . Licensed in {header.licensedStates}.
        </p>
        <p>
          <em>{header.publicLine}</em>
        </p>
        <p>{header.footerPhrase}</p>
        <p>{header.originatorNote}</p>
      </section>

      <section className="licensing-states" aria-labelledby="state-licenses">
        <h2 id="state-licenses">State licenses</h2>
        {stateLicenseBlocks.map((state) => (
          <article key={state.id} id={state.id} className="state-license-block">
            <h3>{state.title}</h3>
            {state.licenseLines.map((line) => (
              <p key={line} className="state-license-verbatim">
                {line}
              </p>
            ))}
            {state.mandatoryVerbatim?.map((text) => (
              <blockquote key={text.slice(0, 40)} className="state-mandatory-verbatim">
                {text}
              </blockquote>
            ))}
            {state.where ? (
              <p>
                <strong>Where:</strong> {state.where}
              </p>
            ) : null}
          </article>
        ))}
      </section>

      <section className="licensing-extra">
        <h2>AI-assisted workflow disclosure</h2>
        <p>{AI_DISCLOSURE}</p>
        <p>
          HomeLoanAgents uses AI agents for portions of the loan workflow, supervised by people. Licensed
          staff remain responsible for supervised lending activities.
        </p>
        <h2>No guarantee</h2>
        <p>
          Information on this site is for general education about our model. It does not constitute a
          commitment to lend, a guarantee of approval, or a promise of any particular rate or savings.
        </p>
        <p>
          <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link>
        </p>
      </section>
    </article>
  );
}