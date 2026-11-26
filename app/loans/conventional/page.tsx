import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { MortgageCompanyIntro, EligibilityNote } from "@/lib/pageSnippets";

export const metadata: Metadata = { title: "Conventional loans" };

export default function LoanPage() {
  return (
    <ContentPage
      title="Conventional loans"
      lead="Conventional mortgages follow Fannie Mae and Freddie Mac guidelines for many borrowers, with fixed and adjustable options where offered."
      cta={{ href: "/get-started", label: "Get Started" }}
    >
      <MortgageCompanyIntro />
      <p>Conventional mortgages follow Fannie Mae and Freddie Mac guidelines for many borrowers, with fixed and adjustable options where offered.</p>
      <EligibilityNote />
    </ContentPage>
  );
}
