import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export type CallLeadRow = {
  id: string;
  call_id: string;
  phone: string | null;
  email: string | null;
  name: string | null;
  transcript: string | null;
  summary: string | null;
  recap_sent_at: string | null;
  created_at: string;
};

let cachedClient: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  if (cachedClient) {
    return cachedClient;
  }

  const url = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    throw new Error("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set");
  }

  cachedClient = createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return cachedClient;
}