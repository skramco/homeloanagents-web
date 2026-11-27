-- Post-call recap storage for HomeLoanAgents inbound xAI voice agent.
-- Access: service role only (RLS enabled, no policies).

create table if not exists public.call_leads (
  id uuid primary key default gen_random_uuid(),
  call_id text not null unique,
  phone text,
  email text,
  name text,
  transcript text,
  summary text,
  recap_sent_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists call_leads_created_at_idx on public.call_leads (created_at desc);
create index if not exists call_leads_email_idx on public.call_leads (email) where email is not null;

alter table public.call_leads enable row level security;

comment on table public.call_leads is
  'Inbound voice-agent calls; written by homeloanagents-web webhook (service role).';