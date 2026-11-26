import type { Metadata } from "next";
import Link from "next/link";
import { AI_DISCLOSURE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How it works",
};

export default function HowItWorksPage() {
  return (
    <article className="prose-page">
      <h1>How it works</h1>
      <p>{AI_DISCLOSURE}</p>
      <p>
        HomeLoanAgents is designed to combine AI agents with human supervision so borrowers can work
        through their loan at homeloanagents.com with clear workflow and pricing. We do not guarantee
        approvals, rates, or savings—outcomes depend on your application, program guidelines, and
        market conditions.
      </p>

      <h2>1. Apply online</h2>
      <p>
        You begin online at homeloanagents.com. We are upfront that specialized AI agents assist with
        intake and application steps—no surprise bots behind the scenes.
      </p>

      <h2>2. Agents work your file</h2>
      <p>
        Agents can handle remedial tasks across intake, the application, disclosures support,
        processing coordination, vendor orders, and closing logistics. This is designed to move
        routine work efficiently while staying compliant and secure.
      </p>

      <h2>3. Human review</h2>
      <p>
        People review agent work and step in when something is flagged or needs judgment. Licensed
        professionals remain accountable for supervised activities.
      </p>

      <h2>4. Rate options</h2>
      <p>
        When rate-related information is prepared for you, a licensed loan officer approves it before
        it goes out. Presenting options is not a guarantee of eligibility or final terms.
      </p>

      <h2>5. Disclosures, processing, underwriting, closing</h2>
      <p>
        The loan proceeds through disclosures, processing, underwriting, and closing—with agents
        assisting on operational tasks and humans overseeing exceptions and required reviews.
      </p>

      <div className="cta-panel">
        <Link href="/get-started" className="btn btn-primary">
          Apply
        </Link>
      </div>
    </article>
  );
}