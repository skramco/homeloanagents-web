import { BORROWER_OUTBOUND_SUMMARY, COMPANY_NMLS } from "@/lib/constants";

export function UtilityTopBar() {
  return (
    <div className="util-bar" role="region" aria-label="Company">
      <div className="util-bar-inner">
        <span className="util-bar-legal">
          A trade name of United Fidelity Funding Corp., NMLS #{COMPANY_NMLS}
        </span>
        <span className="util-bar-phone">{BORROWER_OUTBOUND_SUMMARY}</span>
      </div>
    </div>
  );
}