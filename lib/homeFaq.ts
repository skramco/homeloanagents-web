import { BORROWER_COMMUNICATION_POLICY, BORROWER_CONTACT_CHANNELS } from "./constants";

export const homeFaq = [
  {
    q: "Is HomeLoanAgents a mortgage lender?",
    a: "Yes. HomeLoanAgents is a trade name of United Fidelity Funding Corp., NMLS #34381, a home lender offering purchase and refinance financing with licensed mortgage professionals and underwriters in the loop.",
  },
  {
    q: "How do AI agents fit into my loan?",
    a: `Specialized agents are trained on mortgage workflow tasks to help move your file forward with speed and transparency. People supervise agents, review exceptions, and licensed loan officers handle rate-related approvals. We follow up by ${BORROWER_CONTACT_CHANNELS} only—we do not make outbound phone calls.`,
  },
  {
    q: "How we communicate",
    a: BORROWER_COMMUNICATION_POLICY,
  },
  {
    q: "What does the flat origination fee include?",
    a: "Flat $3,500 lender origination fee covers underwriting, processing, and the credit report, the same amount whether your loan is about $300,000 or $1,500,000. Third-party costs are separate and shown on your Loan Estimate.",
  },
  {
    q: "Do you guarantee a specific rate or fastest closing?",
    a: "No. We focus on clear communication and efficient, supervised workflows designed to help files move faster, but timing and pricing depend on your loan, documentation, investors, and market conditions.",
  },
  {
    q: "What loan types do you offer?",
    a: "We work with conventional, FHA, VA, USDA, jumbo, and other programs for many borrower profiles, including bank statement and self-employed scenarios where available. Eligibility is subject to underwriting; we do not guarantee approval.",
  },
];