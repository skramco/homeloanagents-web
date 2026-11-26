import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { pageHeroByPath } from "@/lib/pageHeroImages";
import { MortgageCompanyIntro, EligibilityNote } from "@/lib/pageSnippets";

export const metadata: Metadata = { title: "Refinance" };

export default function RefinancePage() {
  return (
    <ContentPage
      title="Refinance your mortgage"
      lead="Rate-and-term and cash-out refinance options, with transparent flat origination pricing."
      heroImage={pageHeroByPath["/refinance"]}
      cta={{ href: "/get-started", label: "Get Started" }}
    >
      <MortgageCompanyIntro />
      <p>
        Refinancing can help you pursue a new rate or term, or access equity for goals you share in your
        application. Savings are not guaranteed; compare your Loan Estimate to your current loan.
      </p>
      <ul>
        <li>
          <Link href="/refinance/rate-and-term">Rate-and-term refinance</Link>
        </li>
        <li>
          <Link href="/refinance/cash-out">Cash-out refinance</Link>
        </li>
      </ul>
      <EligibilityNote />
    </ContentPage>
  );
}