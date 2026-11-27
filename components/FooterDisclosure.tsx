import Link from "next/link";
import { EqualHousingLenderLogo } from "@/components/EqualHousingLenderLogo";
import { UffPhoneLink } from "@/components/UffPhone";
import {
  COMPANY_NMLS,
  MLO_NMLS,
  MLO_NAME,
  NMLS_CONSUMER_ACCESS,
  UFF_PRINCIPAL_OFFICE,
} from "@/lib/constants";
import { LICENSED_STATES } from "@/lib/licenseStates";

const MLO_NMLS_URL = "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/1192984";

export function FooterDisclosure() {
  return (
    <div className="footer-disclosure">
      <p>
        <strong>HomeLoanAgents is a trade name of United Fidelity Funding Corp., NMLS #{COMPANY_NMLS}</strong>{" "}
        (
        <a href={NMLS_CONSUMER_ACCESS} target="_blank" rel="noopener noreferrer">
          www.nmlsconsumeraccess.org
        </a>
        ). {UFF_PRINCIPAL_OFFICE}. <UffPhoneLink corporate />. Loan officer: {MLO_NAME}, NMLS #{MLO_NMLS} (
        <a href={MLO_NMLS_URL} target="_blank" rel="noopener noreferrer">
          NMLS Consumer Access
        </a>
        ). For licensing information, go to: www.nmlsconsumeraccess.org.
      </p>
      <p className="footer-ehl-line">
        <EqualHousingLenderLogo /> Equal Housing Lender. Loans available in {LICENSED_STATES}. State license
        details: <Link href="/licensing">Licensing &amp; Disclosures</Link>.
      </p>
      <p>
        <strong>Texas residents:</strong> see the{" "}
        <Link href="/licensing#texas">Texas Consumer Complaint Notice</Link>. <strong>California:</strong> Loans
        made or arranged pursuant to a California Financing Law license. <strong>New Jersey:</strong> Licensed by
        the N.J. Department of Banking and Insurance. <strong>Colorado:</strong> Regulated by the Division of Real
        Estate. <strong>Massachusetts:</strong> Mortgage Lender License #ML34381. <strong>Arizona:</strong> Mortgage
        Banker License #BK-2015110. <strong>Washington:</strong> Consumer Loan Company License #CL-34381.{" "}
        <strong>Virginia:</strong> NMLS ID # 34381 (www.nmlsconsumeraccess.org).
      </p>
      <p className="footer-disclaimer-closing">
        Not a commitment to lend. All loans are subject to credit and property approval. Rates, terms and programs
        are subject to change without notice and may not be available at commitment, lock-in, or closing.
      </p>
    </div>
  );
}