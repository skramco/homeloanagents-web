/** Shared compliance-friendly copy blocks for product pages */

import { BORROWER_CONTACT_CHANNELS } from "./constants";

export function EligibilityNote() {
  return (
    <p className="compliance-note">
      All programs are subject to underwriting and investor guidelines. We do not guarantee approval,
      rates, or terms.
    </p>
  );
}

export function MortgageCompanyIntro() {
  return (
    <p>
      HomeLoanAgents is a trade name of United Fidelity Funding Corp., a mortgage company helping borrowers with{" "}
      <strong>purchase and refinance</strong> home financing. AI agents assist with workflow speed and
      transparency; mortgage professionals, including underwriters and licensed loan officers, remain
      accountable for supervised lending decisions. Outbound updates go by {BORROWER_CONTACT_CHANNELS}; you can call
      our inbound line anytime with questions—it is answered by our voice agent.
    </p>
  );
}