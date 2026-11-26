import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { MortgagePaymentCalculator } from "@/components/MortgagePaymentCalculator";

export const metadata: Metadata = { title: "Mortgage payment calculator" };

export default function MortgagePaymentPage() {
  return (
    <ContentPage
      title="Mortgage payment calculator"
      lead="Estimate principal and interest for planning—not a quote from HomeLoanAgents."
    >
      <MortgagePaymentCalculator />
    </ContentPage>
  );
}