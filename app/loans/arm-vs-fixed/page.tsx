import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { MortgageCompanyIntro, EligibilityNote } from "@/lib/pageSnippets";

export const metadata: Metadata = { title: "ARM vs fixed-rate" };

export default function LoanPage() {
  return (
    <ContentPage
      title="ARM vs fixed-rate"
      lead="Compare adjustable-rate mortgages with fixed-rate stability—your best fit depends on how long you keep the loan and market conditions."
      cta={{ href: "/get-started", label: "Get Started" }}
    >
      <MortgageCompanyIntro />
      <p>Compare adjustable-rate mortgages with fixed-rate stability—your best fit depends on how long you keep the loan and market conditions.</p>
      <EligibilityNote />
    </ContentPage>
  );
}
