import {
  UFF_CONSUMER_PHONE,
  UFF_CONSUMER_PHONE_TEL,
  UFF_CORPORATE_PHONE_OF_RECORD,
  UFF_CORPORATE_PHONE_TEL,
  UFF_PRINCIPAL_OFFICE,
} from "@/lib/constants";

type LegalContactBlockProps = {
  mailAttn: "Privacy" | "Terms";
};

export function LegalContactBlock({ mailAttn }: LegalContactBlockProps) {
  return (
    <ul>
      <li>
        Email: <a href="mailto:support@homeloanagents.com">support@homeloanagents.com</a>
      </li>
      <li>
        Phone: <a href={UFF_CORPORATE_PHONE_TEL}>{UFF_CORPORATE_PHONE_OF_RECORD}</a>
      </li>
      <li>
        Call or text our line: <a href={UFF_CONSUMER_PHONE_TEL}>{UFF_CONSUMER_PHONE}</a>
      </li>
      <li>
        Mail: United Fidelity Funding Corp., Attn: {mailAttn}, {UFF_PRINCIPAL_OFFICE}
      </li>
    </ul>
  );
}