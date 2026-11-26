# HomeLoanAgents Web

Marketing site for [HomeLoanAgents](https://homeloanagents.com)—AI agents with human supervision, transparent workflow, costs, and pricing.

## Stack

- Next.js 15 (App Router) + TypeScript
- Netlify Next.js runtime (`@netlify/plugin-nextjs`)
- No backend, auth, database, or CMS on this site

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Production build |
| `npm run start` | Run production build locally |
| `npm run lint` | ESLint (Next.js) |
| `npm run typecheck` | `tsc --noEmit` |

## Netlify build settings

Use these exact values when linking the site:

| Setting | Value |
| --- | --- |
| **Build command** | `npm run build` |
| **Publish directory** | `.next` |
| **Node version** | `22` (set in `netlify.toml` as `NODE_VERSION`) |

Framework: Netlify auto-detects Next.js; `netlify.toml` includes the build command, publish directory, Node version, and `@netlify/plugin-nextjs`.

No environment variables are required for the marketing site.

## Pages

| Path | Description |
| --- | --- |
| `/` | Marketing home (approach, how-it-works preview, pricing preview, states) |
| `/how-it-works` | Full workflow description |
| `/pricing` | Fee transparency (0% underwriting, 0.50% origination options) |
| `/licensing` | NMLS placeholders and disclosures |
| `/privacy` | Privacy placeholder |
| `/terms` | Terms placeholder |
| `/get-started` | Borrower portal coming soon |

Brand assets live in `/public/brand` (from the HomeLoanAgents logo kit).