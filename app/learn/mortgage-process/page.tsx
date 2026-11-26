import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";

export const metadata: Metadata = { title: "Mortgage process steps" };

export default function LearnArticle() {
  return (
    <ContentPage
      title="Mortgage process steps"
      lead="From application through underwriting, clear disclosure, and closing—the major milestones on a typical home loan."
    >
      <p>
        This article is educational—not financial or legal advice. HomeLoanAgents is a mortgage lender
        (DBA of United Fidelity Funding, NMLS #34381). We do not guarantee rates, approvals, or savings.
      </p>
      <p>
        For interactive planning, try our{" "}
        <Link href="/calculators">calculators</Link> or <Link href="/get-started">get started</Link> when
        you&apos;re ready to talk about a real Loan Estimate.
      </p>
    </ContentPage>
  );
}
