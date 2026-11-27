import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { FlatFeeCallout } from "@/components/FlatFeeCallout";
import { MortgageCompanyIntro, EligibilityNote } from "@/lib/pageSnippets";

export const metadata: Metadata = {
  title: "Why HomeLoanAgents",
};

export default function WhyPage() {
  return (
    <ContentPage
      title="Why HomeLoanAgents"
      lead="A mortgage lender built around speed, transparency, and supervised AI agents, because it's in our name."
      cta={{ href: "/get-started", label: "Get Started" }}
    >
      <MortgageCompanyIntro />
      <h2>Mortgage intelligence + super intelligence</h2>
      <p>
        Our agents are trained on every part of the mortgage process: intake, application, disclosures,
        processing, vendor orders, and closing coordination. They handle repetitive work quickly and
        keep communication flowing by email or text—you can call our inbound line anytime with questions. Mortgage
        professionals, including
        underwriters and licensed loan officers, review exceptions, apply guidelines, and approve
        rate-related information.
      </p>
      <h2>What agents do vs what humans do</h2>
      <ul>
        <li>
          <strong>Agents:</strong> document chasing, data checks, status updates, vendor coordination,
          routine disclosures support, and keeping your file organized at homeloanagents.com.
        </li>
        <li>
          <strong>Humans:</strong> underwriting decisions, credit and guideline judgment, compliance
          review, and anything involving your rate or approval recommendation.
        </li>
      </ul>
      <h2>Transparency you can see</h2>
      <p>
        We are upfront that you&apos;ll work with AI agents, supervised by people, including our flat
        flat lender origination fee instead of a percentage that scales with loan size.
      </p>
      <FlatFeeCallout showWhy={false} />
      <EligibilityNote />
    </ContentPage>
  );
}