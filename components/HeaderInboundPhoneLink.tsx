import {
  INBOUND_VOICE_AGENT_HEADER_ARIA_LABEL,
  INBOUND_VOICE_AGENT_HEADER_CTA,
  UFF_CONSUMER_PHONE_DIAL,
  UFF_CONSUMER_PHONE_TEL,
} from "@/lib/constants";

function PhoneIcon() {
  return (
    <svg
      className="header-tel-icon"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path
        stroke="currentColor"
        d="M6.5 4.5h3l1.5 4-2 1.2a12 12 0 0 0 5.3 5.3l1.2-2 4 1.5v3A2 2 0 0 1 17.5 19 14.5 14.5 0 0 1 4.5 6a2 2 0 0 1 2-1.5z"
      />
    </svg>
  );
}

type HeaderInboundPhoneLinkProps = { className?: string };

/** Desktop header phone CTA: compact label at all breakpoints; full number in title on hover. */
export function HeaderInboundPhoneLink({ className }: HeaderInboundPhoneLinkProps) {
  return (
    <a
      href={UFF_CONSUMER_PHONE_TEL}
      className={className ? `header-tel ${className}` : "header-tel tel"}
      aria-label={INBOUND_VOICE_AGENT_HEADER_ARIA_LABEL}
      title={UFF_CONSUMER_PHONE_DIAL}
    >
      <PhoneIcon />
      <span>{INBOUND_VOICE_AGENT_HEADER_CTA}</span>
    </a>
  );
}