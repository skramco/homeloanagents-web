import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";

export const metadata: Metadata = { title: "What affects your rate" };

export default function LearnArticle() {
  return (
    <ContentPage
      title="What affects your rate"
      lead="Credit, loan type, occupancy, down payment, points, and market conditions all influence pricing—no two files are identical."
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
