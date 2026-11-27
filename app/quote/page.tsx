import type { Metadata } from "next";
import { PhoneLeadForm } from "@/components/forms/PhoneLeadForm";
import { FORM_AI_DISCLOSURE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Request a loan review",
  description:
    "Tell us about your home loan scenario. This is not a rate quote; a licensed team member will follow up.",
};

export default function QuotePage() {
  return (
    <article className="prose-page lead-form-page">
      <p className="lead-form-disclosure">{FORM_AI_DISCLOSURE}</p>
      <PhoneLeadForm
        kind="quote"
        heading="Request a loan review"
        lead="Share a few details so we can route your file. Marketing pages do not provide rate quotes; formal disclosures follow when you apply."
        submitLabel="Request follow-up"
        showGoalFields
      />
    </article>
  );
}