import { COMPANY_NMLS } from "@/lib/constants";
import { UffPhoneLink } from "@/components/UffPhone";

export function UtilityTopBar() {
  return (
    <div className="util-bar" role="region" aria-label="Company">
      <div className="util-bar-inner">
        <span className="util-bar-legal">
          A trade name of United Fidelity Funding Corp., NMLS #{COMPANY_NMLS}
        </span>
        <UffPhoneLink className="util-bar-phone" />
      </div>
    </div>
  );
}