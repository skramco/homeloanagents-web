import type { Metadata } from "next";
import { HomePage } from "@/components/marketing/HomePage";

export const metadata: Metadata = {
  title: "HomeLoanAgents | AI-powered mortgage lender with one flat lender fee",
  description:
    "A licensed mortgage lender for buying and refinancing. AI agents process your file, human underwriters supervise every loan, and the lender origination fee is flat, not a percentage of your loan.",
};

export default function Page() {
  return <HomePage />;
}