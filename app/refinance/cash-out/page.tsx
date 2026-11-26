import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { MortgageCompanyIntro, EligibilityNote } from "@/lib/pageSnippets";

export const metadata: Metadata = { title: "Cash-out refinance" };

export default function CashOutPage() {
  return (
    <ContentPage
      title="Cash-out refinance"
      lead="Access home equity through a new mortgage when equity and guidelines support it."
      cta={{ href: "/get-started", label: "Get Started" }}
    >
      <MortgageCompanyIntro />
      <p>
        Cash-out refinances pay off your existing loan and give you funds at closing based on available
        equity, credit, and program limits. Your loan balance and payment may increase. Talk with a
        licensed loan officer about whether it fits your plan.
      </p>
      <EligibilityNote />
    </ContentPage>
  );
}