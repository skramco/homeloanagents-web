import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { MortgageCompanyIntro, EligibilityNote } from "@/lib/pageSnippets";

export const metadata: Metadata = { title: "VA loans" };

export default function LoanPage() {
  return (
    <ContentPage
      title="VA loans"
      lead="VA loans serve eligible veterans, active-duty service members, and surviving spouses with distinctive benefits when guidelines are met."
      cta={{ href: "/get-started", label: "Get Started" }}
    >
      <MortgageCompanyIntro />
      <p>VA loans serve eligible veterans, active-duty service members, and surviving spouses with distinctive benefits when guidelines are met.</p>
      <EligibilityNote />
    </ContentPage>
  );
}
