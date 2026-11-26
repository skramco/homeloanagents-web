import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";

export const metadata: Metadata = { title: "Learning center" };

const articles = [{"slug":"mortgage-process","title":"Mortgage process steps","lead":"From application through underwriting, clear disclosure, and closing: the major milestones on a typical home loan."},{"slug":"what-affects-your-rate","title":"What affects your rate","lead":"Credit, loan type, occupancy, down payment, points, and market conditions all influence pricing; no two files are identical."},{"slug":"closing-costs","title":"Closing costs explained","lead":"Origination, third-party fees, prepaids, and escrows appear on your Loan Estimate; review before you close."},{"slug":"how-much-house-can-i-afford","title":"How much house can I afford","lead":"Use income, debts, and down payment as a starting point, then get a personalized Loan Estimate from your loan officer."},{"slug":"credit-score-basics","title":"Credit score basics","lead":"Scores affect program eligibility and pricing tiers; improving credit before you apply may help when guidelines allow."}];

export default function LearnIndex() {
  return (
    <ContentPage title="Learning center" lead="Mortgage guides, when you want them. Education only, not quotes or approvals.">
      <ul className="learn-index">
        {articles.map((a) => (
          <li key={a.slug}>
            <Link href={`/learn/${a.slug}`}><strong>{a.title}</strong></Link>
            <p className="text-muted" style={{ margin: "0.25rem 0 0" }}>{a.lead}</p>
          </li>
        ))}
      </ul>
      <p>
        <Link href="/calculators">Mortgage calculators</Link>
      </p>
    </ContentPage>
  );
}
