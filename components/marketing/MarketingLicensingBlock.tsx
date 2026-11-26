import Link from "next/link";
import {
  COMPANY_NMLS,
  MLO_NAME,
  MLO_NMLS,
  NMLS_CONSUMER_ACCESS,
  UFF_PRINCIPAL_OFFICE,
} from "@/lib/constants";

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
              <dd>HomeLoanAgents (a DBA of United Fidelity Funding)</dd>
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
              <dd>Equal Housing Opportunity</dd>
            </dl>
            <p className="fine">
              Not a commitment to lend. Programs are not available in all states, and a loan originator may originate
              loans only where both the company and originator are licensed.
            </p>
          </div>
          <div className="lic-pending" role="note">
            <span className="pending-badge">Pending Sentinel compliance review</span>
            <h3>State license disclosures</h3>
            <p>
              Placeholder. Licensed states, state license names and numbers, and any required verbatim state notices will
              be published here after Sentinel compliance review. See{" "}
              <Link href="/licensing">Licensing &amp; disclosures</Link> for Texas, California, Colorado, and other
              state lines we publish today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}