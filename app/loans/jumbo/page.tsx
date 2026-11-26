import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { pageHeroByPath } from "@/lib/pageHeroImages";
import { MortgageCompanyIntro, EligibilityNote } from "@/lib/pageSnippets";

export const metadata: Metadata = { title: "Jumbo loans" };

export default function LoanPage() {
  return (
    <ContentPage
      title="Jumbo loans"
      lead="Jumbo financing is for loan amounts above conforming limits, with underwriting tuned to larger balances and profiles."
      heroImage={pageHeroByPath["/loans/jumbo"]}
      cta={{ href: "/get-started", label: "Get Started" }}
    >
      <MortgageCompanyIntro />
      <p>Jumbo financing is for loan amounts above conforming limits, with underwriting tuned to larger balances and profiles.</p>
      <EligibilityNote />
    </ContentPage>
  );
}
