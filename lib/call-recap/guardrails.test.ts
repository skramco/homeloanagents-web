import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  AI_PREPARED_LINE,
  MARK_FOLLOW_UP_LINE,
  RECAP_SUBJECT,
  buildRecapEmailDocument,
  buildRecapPlainText,
  recapFieldsAiText,
} from "./emailTemplate";
import { transactionalFooterText, marketingFooterHtml, marketingFooterText, NAMING_LINE, RECAP_PHONE } from "./footers";
import { genericRecapFields } from "./genericRecap";
import { generationFromModelText } from "./generateRecap";
import { findRecapGuardrailTerm, planRecapSend } from "./guardrails";

const cleanFields = {
  askedAbout: "buying a home",
  propertyState: "Missouri",
  followUp: "by email",
};

describe("recap output check", () => {
  it("allows a clean three-field summary", () => {
    const ai = recapFieldsAiText(cleanFields);
    assert.equal(findRecapGuardrailTerm(ai), null);
    assert.deepEqual(planRecapSend(ai), { action: "send" });
  });

  it("blocks dollar amounts, percents, and qualify without scanning the footer", () => {
    assert.equal(findRecapGuardrailTerm("a fee of $3500"), "$");
    assert.equal(findRecapGuardrailTerm("about 6%"), "%");
    assert.equal(findRecapGuardrailTerm("the APR was discussed"), "APR");
    assert.equal(findRecapGuardrailTerm("asked about the rate"), "rate");
    assert.equal(findRecapGuardrailTerm("you are approved"), "approved");
    assert.equal(findRecapGuardrailTerm("pre-approved yesterday"), "pre-approved");
    assert.equal(findRecapGuardrailTerm("preapproved already"), "pre-approved");
    assert.equal(findRecapGuardrailTerm("do I qualify"), "qualify");
    assert.equal(findRecapGuardrailTerm("we guarantee a result"), "guarantee");
    assert.equal(findRecapGuardrailTerm("guarantees and guaranteed"), "guarantee");

    const footer = transactionalFooterText();
    assert.match(footer, /\brate\b/i);
    assert.match(footer, /approval/i);
    assert.equal(planRecapSend(recapFieldsAiText(cleanFields)).action, "send");
    assert.equal(planRecapSend("What you asked about: the rate").action, "block");
  });

  it("blocks first-person Mark and does not send that sentence from model JSON", () => {
    const posed = generationFromModelText(
      JSON.stringify({
        askedAbout: "This is Mark Ramirez, your licensed loan officer",
        propertyState: "Texas",
        followUp: "by email",
      }),
    );
    assert.equal(posed.blockedTerm, null);
    assert.equal(posed.aiText, "");
    assert.equal(posed.fields.askedAbout, genericRecapFields().askedAbout);
    assert.equal(
      planRecapSend("This is Mark Ramirez and I am Mark").action,
      "block",
    );
  });
});

describe("recap template", () => {
  it("puts the AI line first, then the 7.1 body and transactional footer", () => {
    const html = buildRecapEmailDocument(cleanFields, "Jordan Lee");
    const text = buildRecapPlainText(cleanFields, "Jordan Lee");

    assert.equal(RECAP_SUBJECT, "Summary of your call with HomeLoanAgents");
    assert.ok(html.indexOf(AI_PREPARED_LINE) < html.indexOf("Hi Jordan"));
    assert.ok(text.startsWith(AI_PREPARED_LINE));
    assert.match(html, /What you asked about:/);
    assert.match(html, /buying a home/);
    assert.match(html, /Property state:/);
    assert.match(text, /Missouri/);
    assert.match(html, new RegExp(MARK_FOLLOW_UP_LINE.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.match(html, /United Fidelity Funding Corp\. d\/b\/a HomeLoanAgents, NMLS #34381/);
    assert.match(text, /United Fidelity Funding Corp\. d\/b\/a HomeLoanAgents, NMLS #34381/);
    assert.match(html, /\(417\) 524-3687/);
    assert.match(text, /\(417\) 524-3687/);
    assert.doesNotMatch(html, /This is Mark Ramirez, your licensed loan officer/);
    assert.doesNotMatch(text, /This is Mark Ramirez, your licensed loan officer/);
    assert.doesNotMatch(html, /Plain English/);
    assert.doesNotMatch(text, /855/);
    assert.doesNotMatch(html, /3,500|3500/);
    assert.equal(html.includes("—") || text.includes("—"), false);
    assert.ok(text.includes(transactionalFooterText()));
    assert.equal(NAMING_LINE.includes("d/b/a HomeLoanAgents"), true);
    assert.equal(RECAP_PHONE, "(417) 524-3687");
  });

  it("keeps a marketing footer helper with the Resend unsubscribe tag", () => {
    const html = marketingFooterHtml();
    const text = marketingFooterText();
    assert.match(html, /Rates, terms and programs are subject to change/);
    assert.match(text, /\{\{\{RESEND_UNSUBSCRIBE_URL\}\}\}/);
    assert.match(html, /\(417\) 524-3687/);
    assert.doesNotMatch(html, /855/);
    assert.doesNotMatch(text, /3,500|3500/);
  });
});
