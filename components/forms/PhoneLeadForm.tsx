"use client";

import { useId, useState } from "react";
import { SmsConsentAtHiddenInput, SmsConsentCheckbox } from "@/components/forms/SmsConsentCheckbox";
import { SMS_CONSENT_AT_FIELD, SMS_CONSENT_FIELD } from "@/lib/smsConsent";

export type PhoneLeadFormKind = "contact" | "apply" | "quote";

const NETLIFY_FORM_NAME = "borrower-lead";

type PhoneLeadFormProps = {
  kind: PhoneLeadFormKind;
  heading: string;
  lead?: string;
  submitLabel?: string;
  showGoalFields?: boolean;
};

export function PhoneLeadForm({
  kind,
  heading,
  lead,
  submitLabel = "Submit",
  showGoalFields = false,
}: PhoneLeadFormProps) {
  const formId = useId();
  const consentCheckboxId = `${formId}-sms-consent`;
  const [smsConsent, setSmsConsent] = useState(false);
  const [smsConsentAt, setSmsConsentAt] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = e.currentTarget;
    const consentAt = smsConsent ? new Date().toISOString() : "";
    setSmsConsentAt(consentAt);

    const formData = new FormData(form);
    formData.set("form-name", NETLIFY_FORM_NAME);
    formData.set(SMS_CONSENT_FIELD, smsConsent ? "true" : "false");
    formData.set(SMS_CONSENT_AT_FIELD, consentAt);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(Array.from(formData.entries()) as [string, string][]).toString(),
      });
      if (!response.ok) {
        throw new Error("Unable to submit right now.");
      }
      setStatus("success");
      form.reset();
      setSmsConsent(false);
      setSmsConsentAt("");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or call us.");
    }
  }

  if (status === "success") {
    return (
      <div className="lead-form lead-form-success" role="status">
        <h2>{heading}</h2>
        <p>Thanks. We received your information and will follow up by email or text based on your preferences.</p>
      </div>
    );
  }

  return (
    <form
      className="lead-form"
      name={NETLIFY_FORM_NAME}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value={NETLIFY_FORM_NAME} />
      <input type="hidden" name="lead_type" value={kind} />
      <p className="visually-hidden">
        <label>
          Do not fill this out: <input name="bot-field" />
        </label>
      </p>

      <h2 className="lead-form-heading">{heading}</h2>
      {lead ? <p className="lead-form-lead">{lead}</p> : null}

      <div className="lead-form-grid">
        <label>
          Full name
          <input type="text" name="name" autoComplete="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <label>
          Mobile phone
          <input type="tel" name="phone" autoComplete="tel" required inputMode="tel" />
        </label>
        {showGoalFields ? (
          <>
            <label>
              I am interested in
              <select name="goal" defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                <option value="purchase">Buying a home</option>
                <option value="refinance">Refinancing</option>
                <option value="cash-out">Cash-out refinance</option>
                <option value="exploring">Still exploring</option>
              </select>
            </label>
            <label className="lead-form-span-2">
              Property state
              <input type="text" name="property_state" autoComplete="address-level1" maxLength={2} placeholder="e.g. CA" />
            </label>
          </>
        ) : null}
        <label className="lead-form-span-2">
          {kind === "contact" ? "How can we help?" : kind === "quote" ? "Tell us about your scenario" : "Notes (optional)"}
          <textarea name="message" rows={4} />
        </label>
      </div>

      <SmsConsentCheckbox id={consentCheckboxId} checked={smsConsent} onChange={setSmsConsent} />
      <SmsConsentAtHiddenInput value={smsConsentAt} />

      {errorMessage ? (
        <p className="lead-form-error" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}