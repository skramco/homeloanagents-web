import Link from "next/link";
import { COMPANY_NMLS, NMLS_CONSUMER_ACCESS } from "@/lib/constants";

export function MarketingUtilityBar() {
  return (
    <div className="utility">
      <div className="wrap">
        <div className="u-left">
          <span>
            <span className="hide-sm">Licensed mortgage lender · </span>
            <a href={NMLS_CONSUMER_ACCESS} target="_blank" rel="noopener noreferrer">
              NMLS #{COMPANY_NMLS}
            </a>
          </span>
          <span className="sep hide-sm">|</span>
          <span className="hide-sm">A DBA of United Fidelity Funding</span>
          <span className="sep hide-sm">|</span>
          <span className="hide-sm">Equal Housing Opportunity</span>
        </div>
        <div className="u-right">
          <span className="hide-sm text-muted" style={{ fontSize: "var(--fs-xs)" }}>
            Español coming soon
          </span>
          <Link href="/get-started">Sign in</Link>
        </div>
      </div>
    </div>
  );
}