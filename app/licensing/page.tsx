import type { Metadata } from "next";
import Link from "next/link";
import { UffPhoneLink, withUffPhoneLinks } from "@/components/UffPhone";
import { AI_DISCLOSURE, NMLS_CONSUMER_ACCESS } from "@/lib/constants";
import { PENDING_MLO_LICENSE_STATES, type LicensedStateCode } from "@/lib/licensedStates";
import { licensingPageHeader, stateLicenseBlocks } from "@/lib/licenseStates";

export const metadata: Metadata = {
  title: "Licensing & disclosures",
};

const MLO_PLACEHOLDER_COMMENT: Record<LicensedStateCode, string> = {
  AL: "[MARK AL LICENSE # — fill on approval]",
  AZ: "",
  CA: "",
  CO: "[MARK CO LICENSE # — fill on approval]",
  FL: "",
  ID: "",
  IL: "",
  IN: "",
  KY: "[MARK KY LICENSE # — fill on approval]",
  MA: "[MARK MA LICENSE # — fill on approval]",
  MO: "[MARK MO LICENSE # — fill on approval]",
  NV: "",
  NJ: "[MARK NJ LICENSE # — fill on approval]",
  NM: "[MARK NM LICENSE # — fill on approval]",
  OR: "",
  SD: "",
  TX: "",
  VA: "[MARK VA LICENSE # — fill on approval]",
  WA: "",
  WI: "",
};

export default function LicensingPage() {
  const header = licensingPageHeader;
  const blocks = stateLicenseBlocks();

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
          Principal office: {header.address} · <UffPhoneLink />
        </p>
        <p>
          Loan officer: {header.loName}, MLO, NMLS #{header.loNmls} ·{" "}
          <a href={header.loNmlsUrl} target="_blank" rel="noopener noreferrer">
            View NMLS record
          </a>
          . Licensed MLO in {header.licensedStates}.
        </p>
        <p>
          <em>{header.publicLine}</em>
        </p>
        <p>{header.footerPhrase}</p>
        <p>{header.originatorNote}</p>
      </section>

      <section className="licensing-states" aria-labelledby="state-licenses">
        <h2 id="state-licenses">State licenses</h2>
        {blocks.map((state) => (
          <article key={state.id} id={state.id} className="state-license-block">
            <h3>{state.title}</h3>
            {state.licenseLines.map((line) => (
              <p key={line} className="state-license-verbatim">
                {state.washingtonNmlsLink ? (
                  <>
                    {withUffPhoneLinks(line)}
                    {" · "}
                    <a href={NMLS_CONSUMER_ACCESS} target="_blank" rel="noopener noreferrer">
                      NMLS Consumer Access
                    </a>
                  </>
                ) : (
                  withUffPhoneLinks(line)
                )}
              </p>
            ))}
            <p className="state-license-verbatim">{withUffPhoneLinks(state.loanOfficerLine)}</p>
            {PENDING_MLO_LICENSE_STATES.includes(state.stateCode) &&
            MLO_PLACEHOLDER_COMMENT[state.stateCode] ? (
              <>
                {/* INTERNAL – do not publish: {MLO_PLACEHOLDER_COMMENT[state.stateCode]} (add the state-issued MLO number here if the state issues one) */}
              </>
            ) : null}
            {state.publicVerbatim?.map((text) => (
              <blockquote key={text.slice(0, 40)} className="state-mandatory-verbatim">
                {text}
              </blockquote>
            ))}
          </article>
        ))}
      </section>

      <section className="licensing-extra">
        <h2>AI-assisted workflow disclosure</h2>
        <p>{AI_DISCLOSURE}</p>
        <p>
          HomeLoanAgents uses AI agents for portions of the loan workflow, supervised by people. Licensed staff
          remain responsible for supervised lending activities.
        </p>
        <h2>Educational content</h2>
        <p>
          Information on this site is for general education about our model. It does not constitute a commitment to
          lend, a promise of a specific underwriting outcome, or a promise of any particular rate or savings.
        </p>
        <p>
          <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link>
        </p>
      </section>
    </article>
  );
}