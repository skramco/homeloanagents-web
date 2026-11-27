import { UFF_CONSUMER_PHONE, UFF_CONSUMER_PHONE_TEL } from "@/lib/constants";

export function buildGenericRecapHtml(firstName: string | null): string {
  const greeting = firstName ? `Hi ${firstName},` : "Hello,";

  return `
<p>${greeting}</p>
<p>Thank you for speaking with the HomeLoanAgents voice assistant today. Here is a quick recap of what we covered and sensible next steps.</p>
<p><strong>What we discussed</strong></p>
<ul>
  <li>Your mortgage goals and timeline</li>
  <li>How the HomeLoanAgents process works, including our flat lender origination fee structure</li>
  <li>General document types you may need later in the application</li>
</ul>
<p><strong>Recommended next steps</strong></p>
<ol>
  <li>Start an application at <a href="https://homeloanagents.com/get-started">homeloanagents.com/get-started</a> when you are ready.</li>
  <li>Begin gathering documents you will likely need: government-issued ID, recent pay stubs, W-2s or 1099s, federal tax returns, and bank or investment statements.</li>
  <li>Reply to this email or call our inbound voice agent at <a href="${UFF_CONSUMER_PHONE_TEL}">${UFF_CONSUMER_PHONE}</a> if you have follow-up questions.</li>
</ol>
<p>This note is for your records only and is not a loan offer or commitment to lend.</p>
`.trim();
}