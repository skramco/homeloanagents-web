import type { Metadata } from "next";
import { PhoneLeadForm } from "@/components/forms/PhoneLeadForm";
import { AI_DISCLOSURE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact HomeLoanAgents about your home loan questions. We follow up by email or text when you choose.",
};

export default function ContactPage() {
  return (
    <article className="prose-page lead-form-page">
      <p className="lead-form-disclosure">{AI_DISCLOSURE}</p>
      <PhoneLeadForm
        kind="contact"
        heading="Contact us"
        lead="Share your question and how to reach you. We follow up by email or text based on your preferences."
        submitLabel="Send message"
      />
    </article>
  );
}