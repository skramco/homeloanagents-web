import type { Metadata } from "next";
import Link from "next/link";
import { PhoneLeadForm } from "@/components/forms/PhoneLeadForm";
import { AI_DISCLOSURE, BORROWER_CONTACT_CHANNELS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Get started",
  description: "Start your HomeLoanAgents loan inquiry with transparent fees and supervised AI workflow.",
};

export default function GetStartedPage() {
  return (
    <article className="prose-page lead-form-page">
      <p className="lead-form-disclosure">{AI_DISCLOSURE}</p>
      <p className="lead-form-intro">
        Tell us about your goals. When our full borrower portal launches, you will apply and work your loan online, with
        updates by {BORROWER_CONTACT_CHANNELS}. For now, share your contact details and we will follow up.
      </p>
      <PhoneLeadForm
        kind="apply"
        heading="Start your inquiry"
        lead="This is not an application or credit pull. A licensed team member will contact you about next steps."
        submitLabel="Continue"
        showGoalFields
      />
      <p className="lead-form-footnote">
        Review <Link href="/how-it-works">how it works</Link> and <Link href="/pricing">pricing</Link> while you wait.
      </p>
    </article>
  );
}