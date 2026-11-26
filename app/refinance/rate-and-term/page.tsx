import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { pageHeroByPath } from "@/lib/pageHeroImages";
import { MortgageCompanyIntro, EligibilityNote } from "@/lib/pageSnippets";

export const metadata: Metadata = { title: "Rate-and-term refinance" };

export default function RateTermPage() {
  return (
    <ContentPage
      title="Rate-and-term refinance"
      lead="Replace your current loan with a new term or rate structure when it fits your goals and underwriting."
      heroImage={pageHeroByPath["/refinance/rate-and-term"]}
      cta={{ href: "/get-started", label: "Get Started" }}
    >
      <MortgageCompanyIntro />
      <p>
        Rate-and-term refinances focus on adjusting your interest rate, loan term, or both, without taking
        cash out at closing. Whether it makes sense depends on your break-even timeline, costs, and
        market pricing at the time you lock.
      </p>
      <EligibilityNote />
    </ContentPage>
  );
}