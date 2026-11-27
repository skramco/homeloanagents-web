import type { Metadata } from "next";
import { PricingPage } from "@/components/marketing/PricingPage";

export const metadata: Metadata = {
  title: "Pricing & why HomeLoanAgents | One flat lender origination fee",
  description:
    "What the flat lender origination fee covers, which third-party costs remain, and how AI agents and people share the work.",
};

export default function Page() {
  return <PricingPage />;
}