import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { MortgageCompanyIntro, EligibilityNote } from "@/lib/pageSnippets";

export const metadata: Metadata = { title: "First-time homebuyers" };

export default function FirstTimePage() {
  return (
    <ContentPage
      title="First-time homebuyers"
      lead="Guidance and financing for buyers new to the mortgage process—without promising a specific rate or approval."
      cta={{ href: "/get-started", label: "Get Started" }}
    >
      <MortgageCompanyIntro />
      <p>
        First-time buyers often need extra clarity on documents, timelines, and programs. Our agents are
        trained to explain next steps; loan officers and underwriters review your file against program
        guidelines. FHA and conventional options may be available depending on your profile.
      </p>
      <h2>Helpful resources</h2>
      <p>
        Explore our learning center for mortgage basics, affordability, and closing costs. Calculators can
        help you plan—not replace a Loan Estimate.
      </p>
      <EligibilityNote />
    </ContentPage>
  );
}