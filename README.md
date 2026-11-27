# HomeLoanAgents Web

Marketing and education site for [HomeLoanAgents](https://homeloanagents.com)—a trade name of United Fidelity Funding Corp., NMLS #34381—using AI agents with human mortgage professional supervision.

## Stack

- Next.js 15 (App Router) + TypeScript
- Netlify Next.js runtime (`@netlify/plugin-nextjs`)
- Marketing site plus server routes for the inbound voice-agent post-call recap flow (Supabase + Resend)

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

## Post-call recap email (xAI voice agent)

xAI documents a **signed `realtime.call.incoming` webhook** when a SIP call arrives ([SIP docs](https://docs.x.ai/developers/model-capabilities/audio/speech-to-speech/sip)). It does **not** document a native **call-ended** or post-call HTTP webhook; transcripts live on the realtime WebSocket session.

**Production path (xAI Builder “API request” tool):** when the call ends, POST a **flat JSON** body with `Authorization: Bearer $XAI_WEBHOOK_SECRET`. The `transcript` field should be a **short summary the agent wrote**, not a raw transcript.

| Item | Value |
| --- | --- |
| **URL** | `https://homeloanagents.com/api/webhooks/xai/call-ended` |
| **Auth** | `Authorization: Bearer <XAI_WEBHOOK_SECRET>` (also supports Standard Webhooks headers or `X-Homeloanagents-Signature`) |
| **Body (flat)** | `{ "call_id"?, "phone"?, "name"?, "email"?, "transcript"? }` |
| **Body (wrapped)** | `{ "type": "realtime.call.ended", "data": { …same fields, optional sip_headers } }` |

If `call_id` is missing or empty, the server derives one as `derived_<sha256(email|phone|UTC-date)>` so retries the same day stay idempotent.

Example flat body (Builder tool):

```json
{
  "call_id": "00000000-0000-0000-0000-000000000000",
  "phone": "+14175243687",
  "email": "borrower@example.com",
  "name": "Alex Rivera",
  "transcript": "Borrower asked about our flat fee and which documents to gather for a refinance application."
}
```

Sample curl (local or preview URL):

```bash
curl -sS -X POST "http://localhost:3000/api/webhooks/xai/call-ended" \
  -H "Authorization: Bearer $XAI_WEBHOOK_SECRET" \
  -H "Content-Type: application/json" \
  -d '{
    "call_id": "test-call-1",
    "phone": "+14175243687",
    "email": "you@example.com",
    "name": "Alex Rivera",
    "transcript": "Discussed starting an application and gathering pay stubs and tax returns."
  }'
```

Run payload parser tests: `npm test`.

Recap email sends only when `email` is present; repeats for the same `call_id` are ignored after `recap_sent_at` is set.

### Supabase

Apply `supabase/migrations/20261126164500_call_leads.sql` on the UFF Loans project (table `call_leads`, RLS on, no public policies).

### Environment variables (Netlify)

Copy from [`.env.example`](./.env.example):

| Variable | Purpose |
| --- | --- |
| `XAI_WEBHOOK_SECRET` | Verify Standard Webhooks / shared-secret posts to `/api/webhooks/xai/call-ended` |
| `XAI_API_KEY` | Optional recap copy via `https://api.x.ai/v1/chat/completions` (safe generic template if missing) |
| `RESEND_API_KEY` | Send from `notifications@mail.homeloanagents.com` (verified Resend domain `mail.homeloanagents.com`), with Reply-To `support@homeloanagents.com` |
| `SUPABASE_URL` | UFF Loans Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-only writes to `call_leads` |