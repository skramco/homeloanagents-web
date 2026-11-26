import type { Metadata } from "next";
import { PricingPage } from "@/components/marketing/PricingPage";

export const metadata: Metadata = {
  title: "Pricing & why HomeLoanAgents | One flat $3,500 lender origination fee",
  description:
    "What the flat $3,500 lender origination fee covers, which third-party costs remain, an illustrative comparison with percentage-based pricing, and how AI agents and people share the work.",
};

export default function Page() {
  return <PricingPage />;
}