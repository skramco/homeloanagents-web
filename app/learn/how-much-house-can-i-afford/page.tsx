import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";

export const metadata: Metadata = { title: "How much house can I afford" };

export default function LearnArticle() {
  return (
    <ContentPage
      title="How much house can I afford"
      lead="Use income, debts, and down payment as a starting point—then get a personalized Loan Estimate from your loan officer."
    >
      <p>
        This article is educational—not financial or legal advice. HomeLoanAgents is a mortgage lender
        (trade name of United Fidelity Funding Corp., NMLS #34381). We do not guarantee rates, approvals, or savings.
      </p>
      <p>
        For interactive planning, try our{" "}
        <Link href="/calculators">calculators</Link> or <Link href="/get-started">get started</Link> when
        you&apos;re ready to talk about a real Loan Estimate.
      </p>
    </ContentPage>
  );
}
