import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { buildRecapEmailDocument, buildRecapPlainText } from "../lib/call-recap/emailTemplate.ts";

const fields = {
  askedAbout: "buying a home",
  propertyState: "Missouri",
  followUp: "by email",
};

const html = buildRecapEmailDocument(fields, "Jordan");
const text = buildRecapPlainText(fields, "Jordan");

const outDir = "/opt/cursor/artifacts";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "sample-call-recap-email.html"), html, "utf8");
writeFileSync(join(outDir, "sample-call-recap-email.txt"), text, "utf8");

console.log("Wrote sample-call-recap-email.html and sample-call-recap-email.txt");
