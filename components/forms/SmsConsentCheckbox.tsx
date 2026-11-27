"use client";

import Link from "next/link";
import { SMS_CONSENT_AT_FIELD, SMS_CONSENT_FIELD } from "@/lib/smsConsent";

type SmsConsentCheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  id?: string;
};

/**
 * Optional SMS opt-in, unchecked by default, not required to submit.
 */
export function SmsConsentCheckbox({ checked, onChange, id = "sms-consent" }: SmsConsentCheckboxProps) {
  return (
    <label className="lead-form-sms-consent" htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        name={SMS_CONSENT_FIELD}
        value="true"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="lead-form-sms-consent-text">
        By checking this box, I agree to receive text messages from HomeLoanAgents, a d/b/a of United Fidelity
        Funding Corp. (NMLS #34381), at the mobile number I provided, about my home loan inquiry, application status,
        requested documents and appointments. Messages may be sent using automated technology. Message frequency
        varies. Msg &amp; data rates may apply. Reply HELP for help or STOP to opt out at any time. Consent is not a
        condition of any purchase or loan. See our <Link href="/privacy">Privacy Policy</Link> and{" "}
        <Link href="/sms-terms">SMS Terms</Link>.
      </span>
    </label>
  );
}

/** Hidden input updated on submit so Netlify Forms receives consent timestamp when checked. */
export function SmsConsentAtHiddenInput({ value }: { value: string }) {
  return <input type="hidden" name={SMS_CONSENT_AT_FIELD} value={value} />;
}