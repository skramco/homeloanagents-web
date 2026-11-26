import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { pageHeroByPath } from "@/lib/pageHeroImages";
import { MortgageCompanyIntro, EligibilityNote } from "@/lib/pageSnippets";

export const metadata: Metadata = { title: "Bank statement & self-employed" };

export default function LoanPage() {
  return (
    <ContentPage
      title="Bank statement & self-employed"
      lead="We offer financing for many borrower types, including bank statement and self-employed scenarios where programs are available. Approval is not guaranteed."
      heroImage={pageHeroByPath["/loans/non-qm"]}
      cta={{ href: "/get-started", label: "Get Started" }}
    >
      <MortgageCompanyIntro />
      <p>
        Non-QM and alternative documentation programs can help self-employed borrowers and others whose tax
        returns don&apos;t tell the full story. We offer financing for many borrower types when guidelines
        allow; we do not promise approval.
      </p>
      <EligibilityNote />
    </ContentPage>
  );
}
