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

**Smallest alternative:** when your voice session handler closes the WebSocket (caller hang-up or `POST /v1/realtime/calls/{call_id}/hangup`), have it `POST` the transcript and captured fields to this site:

| Item | Value |
| --- | --- |
| **URL** | `https://homeloanagents.com/api/webhooks/xai/call-ended` |
| **Auth** | Standard Webhooks headers (`webhook-id`, `webhook-timestamp`, `webhook-signature`) with `XAI_WEBHOOK_SECRET`, **or** `Authorization: Bearer <same secret>`, **or** `X-Homeloanagents-Signature: sha256=<hmac_sha256_hex(body)>` |
| **Body** | JSON event with `type: "realtime.call.ended"` and `data.call_id`, optional `phone`, `email`, `name`, `transcript`, `sip_headers` |

Example body:

```json
{
  "type": "realtime.call.ended",
  "data": {
    "call_id": "00000000-0000-0000-0000-000000000000",
    "phone": "+12136685711",
    "email": "borrower@example.com",
    "name": "Alex Rivera",
    "transcript": "…"
  }
}
```

Recap email sends only when `email` is present; repeats for the same `call_id` are ignored after `recap_sent_at` is set.

### Supabase

Apply `supabase/migrations/20261126164500_call_leads.sql` on the UFF Loans project (table `call_leads`, RLS on, no public policies).

### Environment variables (Netlify)

Copy from [`.env.example`](./.env.example):

| Variable | Purpose |
| --- | --- |
| `XAI_WEBHOOK_SECRET` | Verify Standard Webhooks / shared-secret posts to `/api/webhooks/xai/call-ended` |
| `XAI_API_KEY` | Optional recap copy via `https://api.x.ai/v1/chat/completions` (safe generic template if missing) |
| `RESEND_API_KEY` | Send from `hello@homeloanagents.com` |
| `SUPABASE_URL` | UFF Loans Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-only writes to `call_leads` |