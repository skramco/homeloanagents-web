import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { pageHeroByPath } from "@/lib/pageHeroImages";
import { MortgageCompanyIntro, EligibilityNote } from "@/lib/pageSnippets";

export const metadata: Metadata = { title: "Pre-approval" };

export default function PreApprovalPage() {
  return (
    <ContentPage
      title="Pre-approval"
      lead="Understand what you may be able to borrow before you shop, subject to full underwriting and documentation."
      heroImage={pageHeroByPath["/buy/pre-approval"]}
      cta={{ href: "/get-started", label: "Get Started" }}
    >
      <MortgageCompanyIntro />
      <p>
        A pre-approval review can help you house-hunt with a clearer budget. We verify income, assets, and
        credit as needed; final approval happens after you have a purchase contract and complete
        underwriting. Pre-approval is not a guarantee to lend.
      </p>
      <EligibilityNote />
    </ContentPage>
  );
}