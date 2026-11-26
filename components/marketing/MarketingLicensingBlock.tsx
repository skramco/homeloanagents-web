import Link from "next/link";
import {
  COMPANY_NMLS,
  MLO_NAME,
  MLO_NMLS,
  NMLS_CONSUMER_ACCESS,
  UFF_PRINCIPAL_OFFICE,
} from "@/lib/constants";
import { licensingPageHeader } from "@/lib/licenseStates";

const MLO_NMLS_URL = `https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/${MLO_NMLS}`;

export function MarketingLicensingBlock() {
  return (
    <section className="section section-warm" id="licensing">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Licensing &amp; disclosures</span>
          <h2 className="h2">Who you&apos;re working with, on the record.</h2>
          <p className="lead muted">
            Check any license yourself on NMLS Consumer Access before you share a single document.
          </p>
        </div>
        <div className="licensing">
          <div className="lic-card">
            <h3>Lender and loan officer</h3>
            <dl>
              <dt>Lender</dt>
              <dd>United Fidelity Funding Corp.</dd>
              <dt>Doing business as</dt>
              <dd>HomeLoanAgents (a DBA of United Fidelity Funding Corp.)</dd>
              <dt>Company NMLS</dt>
              <dd>
                <a href={NMLS_CONSUMER_ACCESS} target="_blank" rel="noopener noreferrer">
                  #{COMPANY_NMLS} · NMLS Consumer Access
                </a>
              </dd>
              <dt>Loan officer</dt>
              <dd>
                {MLO_NAME},{" "}
                <a href={MLO_NMLS_URL} target="_blank" rel="noopener noreferrer">
                  MLO NMLS #{MLO_NMLS}
                </a>
              </dd>
              <dt>Office</dt>
              <dd>{UFF_PRINCIPAL_OFFICE}</dd>
              <dt>Fair lending</dt>
              <dd>Equal Housing Lender</dd>
            </dl>
            <p className="fine">{licensingPageHeader.originatorNote}</p>
          </div>
          <div className="lic-card">
            <h3>State license details</h3>
            <p>
              Texas SML Consumer Complaint Notice, California CFL language, Colorado DRE, and per-state license
              numbers are on our{" "}
              <Link href="/licensing">Licensing &amp; Disclosures</Link> page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}