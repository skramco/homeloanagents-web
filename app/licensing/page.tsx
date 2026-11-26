import type { Metadata } from "next";
import Link from "next/link";
import { FOOTER_LEGAL, LAUNCH_STATES, NMLS_CONSUMER_ACCESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Licensing & disclosures",
};

export default function LicensingPage() {
  return (
    <article className="prose-page">
      <h1>Licensing &amp; disclosures</h1>
      <p>{FOOTER_LEGAL}</p>

      <h2>Company &amp; loan officer NMLS</h2>
      <ul>
        <li>United Fidelity Funding (DBA HomeLoanAgents): NMLS #34381</li>
        <li>Designated loan officer: Mark Ramirez, NMLS #1192984 (MLO)</li>
      </ul>
      <p>
        Verify licensure at{" "}
        <a href={NMLS_CONSUMER_ACCESS} target="_blank" rel="noopener noreferrer">
          NMLS Consumer Access
        </a>
        .
      </p>

      <h2>State availability</h2>
      <p>
        We are launching in {LAUNCH_STATES.join(", ")}. Additional states may be added; availability
        can change based on licensing and company policy.
      </p>

      <h2>Equal Housing Opportunity</h2>
      <p>
        We are pledged to the letter and spirit of U.S. policy for the achievement of equal housing
        opportunity. We encourage and support an affirmative advertising and marketing program in
        which there are no barriers to obtaining housing because of race, color, religion, sex,
        handicap, familial status, or national origin.
      </p>

      <h2>AI-assisted workflow disclosure</h2>
      <p>
        HomeLoanAgents uses AI agents for portions of the loan workflow, supervised by people. You
        will interact with agent-assisted experiences at homeloanagents.com; licensed staff remain
        responsible for supervised lending activities.
      </p>

      <h2>No guarantee</h2>
      <p>
        Information on this site is for general education about our model. It does not constitute a
        commitment to lend, a guarantee of approval, or a promise of any particular rate or savings.
      </p>

      <p>
        <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link>
      </p>
    </article>
  );
}