import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { pageHeroByPath } from "@/lib/pageHeroImages";
import { MortgageCompanyIntro, EligibilityNote } from "@/lib/pageSnippets";

export const metadata: Metadata = { title: "Buy a home" };

export default function BuyPage() {
  return (
    <ContentPage
      title="Buy a home"
      lead="Purchase mortgages with agent-assisted speed and licensed mortgage professionals at every critical step."
      heroImage={pageHeroByPath["/buy"]}
      cta={{ href: "/get-started", label: "Get Started" }}
    >
      <MortgageCompanyIntro />
      <h2>Your path to buying</h2>
      <p>
        Whether you&apos;re upgrading, relocating, or buying your first home, we offer purchase financing
        with clear updates and supervised AI agents helping move your file from application to closing.
      </p>
      <ul>
        <li>
          <Link href="/buy/first-time-homebuyers">First-time homebuyers</Link>
        </li>
        <li>
          <Link href="/buy/pre-approval">Pre-approval</Link>
        </li>
        <li>
          <Link href="/loans/conventional">Loan options</Link>
        </li>
      </ul>
      <EligibilityNote />
    </ContentPage>
  );
}