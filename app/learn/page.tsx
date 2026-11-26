import type { Metadata } from "next";
import { LearnHubPage } from "@/components/marketing/LearnHubPage";

export const metadata: Metadata = {
  title: "Learning center",
  description:
    "Mortgage guides on process, fees, credit, and affordability. Education only—not loan offers, rate quotes, or approval guarantees.",
};

export default function LearnIndex() {
  return <LearnHubPage />;
}