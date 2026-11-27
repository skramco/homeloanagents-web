export type CallEndedWebhookBody = {
  object?: "event";
  id?: string;
  type: "realtime.call.ended";
  created_at?: number;
  data: {
    call_id: string;
    phone?: string | null;
    email?: string | null;
    name?: string | null;
    transcript?: string | null;
    sip_headers?: { name: string; value: string }[];
  };
};