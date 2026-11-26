import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { MortgageCompanyIntro, EligibilityNote } from "@/lib/pageSnippets";

export const metadata: Metadata = { title: "FHA loans" };

export default function LoanPage() {
  return (
    <ContentPage
      title="FHA loans"
      lead="FHA-insured financing can offer flexible down payment and credit considerations for eligible borrowers and properties."
      cta={{ href: "/get-started", label: "Get Started" }}
    >
      <MortgageCompanyIntro />
      <p>FHA-insured financing can offer flexible down payment and credit considerations for eligible borrowers and properties.</p>
      <EligibilityNote />
    </ContentPage>
  );
}
