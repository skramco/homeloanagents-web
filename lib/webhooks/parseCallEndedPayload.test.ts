import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { deriveCallId, parseCallEndedPayload } from "./parseCallEndedPayload";

describe("parseCallEndedPayload", () => {
  const fixedNow = new Date("2026-11-26T15:00:00.000Z");

  it("accepts xAI Builder flat JSON", () => {
    const parsed = parseCallEndedPayload(
      {
        call_id: "call-abc",
        phone: "+12135550100",
        name: "Alex",
        email: "alex@example.com",
        transcript: "Discussed refinance goals and document list.",
      },
      { now: fixedNow },
    );
    assert(parsed);
    assert.equal(parsed.callId, "call-abc");
    assert.equal(parsed.callIdDerived, false);
    assert.equal(parsed.callSummary, "Discussed refinance goals and document list.");
  });

  it("accepts wrapped realtime.call.ended events", () => {
    const parsed = parseCallEndedPayload({
      type: "realtime.call.ended",
      data: {
        call_id: "uuid-1",
        email: "Borrower@Example.com",
        transcript: "Agent summary here.",
      },
    });
    assert(parsed);
    assert.equal(parsed.callId, "uuid-1");
    assert.equal(parsed.email, "borrower@example.com");
  });

  it("derives call_id from email, phone, and UTC date when missing", () => {
    const parsed = parseCallEndedPayload(
      {
        phone: "+12135550100",
        email: "alex@example.com",
        transcript: "Summary",
      },
      { now: fixedNow },
    );
    assert(parsed);
    assert.equal(parsed.callIdDerived, true);
    assert.equal(parsed.callId, deriveCallId("alex@example.com", "+12135550100", fixedNow));
  });

  it("rejects unknown shapes", () => {
    assert.equal(parseCallEndedPayload({ type: "other.event" }), null);
    assert.equal(parseCallEndedPayload({}), null);
  });
});