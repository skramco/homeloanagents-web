import Image from "next/image";
import Link from "next/link";
import { EqualHousingLenderLogo } from "@/components/EqualHousingLenderLogo";
import {
  COMPANY_NMLS,
  MLO_NAME,
  MLO_NMLS,
  NMLS_CONSUMER_ACCESS,
  UFF_CONSUMER_PHONE,
  UFF_PRINCIPAL_OFFICE,
} from "@/lib/constants";
import { LICENSED_STATES } from "@/lib/licenseStates";

const MLO_NMLS_URL = `https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/${MLO_NMLS}`;
const year = new Date().getFullYear();

export function MarketingFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="f-top">
          <div className="f-brand">
            <Link href="/" aria-label="HomeLoanAgents home">
              <Image
                src="/brand/homeloanagents-lockup-reversed.svg"
                alt="HomeLoanAgents"
                width={125}
                height={40}
              />
            </Link>
            <p>
              A licensed mortgage lender. AI agents process the file; licensed mortgage professionals and human underwriters
              supervise every loan.
            </p>
          </div>
          <div className="f-col">
            <h4>Buy</h4>
            <ul>
              <li>
                <Link href="/loans/conventional">Conventional</Link>
              </li>
              <li>
                <Link href="/loans/fha">FHA</Link>
              </li>
              <li>
                <Link href="/loans/va">VA</Link>
              </li>
              <li>
                <Link href="/loans/jumbo">Jumbo</Link>
              </li>
              <li>
                <Link href="/buy/pre-approval">Pre-approval</Link>
              </li>
            </ul>
          </div>
          <div className="f-col">
            <h4>Refinance</h4>
            <ul>
              <li>
                <Link href="/refinance/rate-and-term">Rate-and-term</Link>
              </li>
              <li>
                <Link href="/refinance/cash-out">Cash-out</Link>
              </li>
              <li>
                <Link href="/loans/fixed">Fixed-rate</Link>
              </li>
              <li>
                <Link href="/loans/arm-vs-fixed">Adjustable-rate</Link>
              </li>
            </ul>
          </div>
          <div className="f-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/pricing">Pricing &amp; why us</Link>
              </li>
              <li>
                <Link href="/how-it-works">How it works</Link>
              </li>
              <li>
                <Link href="/licensing">About &amp; licensing</Link>
              </li>
              <li>
                <a href="tel:+18559532453">Contact</a>
              </li>
            </ul>
          </div>
          <div className="f-col">
            <h4>Learn</h4>
            <ul>
              <li>
                <Link href="/learn/how-a-flat-origination-fee-works">How a flat fee works</Link>
              </li>
              <li>
                <Link href="/learn">Learning center</Link>
              </li>
              <li>
                <Link href="/calculators">Calculators</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="f-legal">
          <div>
            <p>
              <strong>HomeLoanAgents is a DBA of United Fidelity Funding</strong> (United Fidelity Funding Corp.),{" "}
              <a href={NMLS_CONSUMER_ACCESS} target="_blank" rel="noopener noreferrer">
                NMLS #{COMPANY_NMLS}
              </a>{" "}
              (
              <a href={NMLS_CONSUMER_ACCESS} target="_blank" rel="noopener noreferrer">
                NMLS Consumer Access
              </a>
              ). {UFF_PRINCIPAL_OFFICE}. {UFF_CONSUMER_PHONE}.
            </p>
            <p>
              Mortgage loan originator: {MLO_NAME},{" "}
              <a href={MLO_NMLS_URL} target="_blank" rel="noopener noreferrer">
                MLO NMLS #{MLO_NMLS}
              </a>
              .
            </p>
            <p>
              This is not a commitment to lend. All loans are subject to credit approval, underwriting guidelines, property
              eligibility and verification. Programs, terms and conditions are subject to change without notice and are not
              available in all states. HomeLoanAgents does not advertise rates on this site; your terms are disclosed on your
              Loan Estimate. AI agents assist with processing; credit decisions are made by human underwriters.
            </p>
            <p style={{ marginTop: "0.75rem", fontSize: "var(--fs-sm)" }}>
              Loans available in {LICENSED_STATES}.{" "}
              <strong>Texas residents:</strong> see the{" "}
              <Link href="/licensing#texas">Texas Consumer Complaint Notice</Link>. <strong>California:</strong> Loans made
              or arranged pursuant to a California Financing Law license. <strong>New Jersey:</strong> Licensed by the N.J.
              Department of Banking and Insurance. <strong>Colorado:</strong> Responsible party: {MLO_NAME}, NMLS #{MLO_NMLS},{" "}
              {UFF_CONSUMER_PHONE}. Regulated by the Division of Real Estate. <strong>Massachusetts:</strong> Mortgage
              Lender License #ML34381. <strong>Arizona:</strong> Mortgage Banker License #BK-2015110.{" "}
              <strong>Washington:</strong> Consumer Loan Company License #CL-34381. <strong>Virginia:</strong> NMLS ID #
              {COMPANY_NMLS} ({NMLS_CONSUMER_ACCESS}).
            </p>
          </div>
          <div className="eho" title="Equal Housing Opportunity">
            <EqualHousingLenderLogo />
            <span>Equal Housing Opportunity</span>
          </div>
        </div>

        <div className="pending-box" role="note" aria-label="State license disclosures placeholder">
          <div className="pb-head">
            <span className="pending-badge">Pending Sentinel compliance review</span>
            <b>State license disclosures</b>
          </div>
          <p>
            Placeholder. State-by-state license names, numbers and required verbatim notices (for example the Texas SML
            complaint notice) will appear here only after Sentinel compliance review. Do not launch this page with this block
            empty.
          </p>
        </div>

        <div className="f-bottom">
          <span>&copy; {year} United Fidelity Funding Corp.</span>
          <div className="links">
            <a href={NMLS_CONSUMER_ACCESS} target="_blank" rel="noopener noreferrer">
              NMLS Consumer Access
            </a>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/licensing">Licensing</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}