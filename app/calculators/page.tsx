import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";

export const metadata: Metadata = { title: "Calculators" };

export default function CalculatorsIndex() {
  return (
    <ContentPage title="Mortgage calculators" lead="Illustrative tools only—not loan offers or pre-approvals.">
      <ul>
        <li><Link href="/calculators/mortgage-payment">Mortgage payment calculator</Link></li>
        <li><Link href="/calculators/affordability">Affordability calculator</Link></li>
      </ul>
    </ContentPage>
  );
}
