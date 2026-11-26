import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { AffordabilityCalculator } from "@/components/AffordabilityCalculator";

export const metadata: Metadata = { title: "Affordability calculator" };

export default function AffordabilityPage() {
  return (
    <ContentPage
      title="Affordability calculator"
      lead="A rough planning range, not an affordability guarantee or pre-approval."
    >
      <AffordabilityCalculator />
    </ContentPage>
  );
}