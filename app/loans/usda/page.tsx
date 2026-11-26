import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { pageHeroByPath } from "@/lib/pageHeroImages";
import { MortgageCompanyIntro, EligibilityNote } from "@/lib/pageSnippets";

export const metadata: Metadata = { title: "USDA loans" };

export default function LoanPage() {
  return (
    <ContentPage
      title="USDA loans"
      lead="USDA programs support eligible rural and suburban properties for income-qualified borrowers in designated areas."
      heroImage={pageHeroByPath["/loans/usda"]}
      cta={{ href: "/get-started", label: "Get Started" }}
    >
      <MortgageCompanyIntro />
      <p>USDA programs support eligible rural and suburban properties for income-qualified borrowers in designated areas.</p>
      <EligibilityNote />
    </ContentPage>
  );
}
