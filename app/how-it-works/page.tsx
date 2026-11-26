import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { AI_DISCLOSURE, BORROWER_CONTACT_CHANNELS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How it works",
};

export default function HowItWorksPage() {
  return (
    <ContentPage
      title="How it works"
      lead="A mortgage workflow designed for speed and transparency, with AI agents and human mortgage professionals."
      cta={{ href: "/get-started", label: "Get Started" }}
    >
      <p>{AI_DISCLOSURE}</p>
      <p>
        HomeLoanAgents is a mortgage company helping with purchase and refinance loans. We do not guarantee
        approvals, rates, or closing timelines.
      </p>
      <h2>Steps</h2>
      <ol>
        <li>Apply online at homeloanagents.com.</li>
        <li>Agents assist with documents, disclosures support, processing tasks, and vendor coordination.</li>
        <li>Mortgage professionals review flagged items; underwriters apply guidelines.</li>
        <li>Licensed loan officers approve rate-related communications before you see them.</li>
        <li>
          Disclosures, processing, underwriting, and closing, with status updates by {BORROWER_CONTACT_CHANNELS}.
        </li>
      </ol>
      <p>
        <Link href="/why-homeloanagents">Why HomeLoanAgents</Link> ·{" "}
        <Link href="/pricing">Pricing</Link>
      </p>
    </ContentPage>
  );
}