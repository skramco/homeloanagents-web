# HomeLoanAgents Web

Marketing and education site for [HomeLoanAgents](https://homeloanagents.com)—a trade name of United Fidelity Funding Corp., NMLS #34381—using AI agents with human mortgage professional supervision.

## Stack

- Next.js 15 (App Router) + TypeScript
- Netlify Next.js runtime (`@netlify/plugin-nextjs`)
- No backend, auth, database, or CMS

## Local development

```bash
npm install
npm run dev
```

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Production build |
| `npm run start` | Run production build locally |
| `npm run lint` | ESLint (Next.js) |
| `npm run typecheck` | `tsc --noEmit` |

## Netlify build settings

| Setting | Value |
| --- | --- |
| **Build command** | `npm run build` |
| **Publish directory** | `.next` |
| **Node version** | `22` |

## Pages (overview)

| Path | Description |
| --- | --- |
| `/` | Lender homepage |
| `/buy`, `/buy/first-time-homebuyers`, `/buy/pre-approval` | Purchase |
| `/refinance`, `/refinance/rate-and-term`, `/refinance/cash-out` | Refinance |
| `/loans/*` | Conventional, FHA, VA, USDA, jumbo, ARM vs fixed, non-QM |
| `/learn/*` | Learning center articles |
| `/calculators/*` | Payment and affordability calculators |
| `/why-homeloanagents` | Differentiator |
| `/pricing` | $3,500 flat origination fee |
| `/how-it-works` | Workflow |
| `/licensing`, `/privacy`, `/terms`, `/get-started` | Legal & portal placeholder |

## Pricing

**Flat $3,500 lender origination fee** (underwriting, processing, credit report)—not a percentage of loan amount. Third-party costs are disclosed on the Loan Estimate.