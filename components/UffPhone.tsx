import { Fragment, type CSSProperties, type ReactNode } from "react";
import {
  INBOUND_VOICE_AGENT_ARIA_LABEL,
  INBOUND_VOICE_AGENT_CTA,
  UFF_CONSUMER_PHONE,
  UFF_CONSUMER_PHONE_TEL,
  UFF_CORPORATE_PHONE_OF_RECORD,
  UFF_CORPORATE_PHONE_TEL,
} from "@/lib/constants";

type UffPhoneLinkProps = {
  className?: string;
  voiceAgent?: boolean;
  /** Licensee phone on file with regulators (855), not the inbound consumer line. */
  corporate?: boolean;
  style?: CSSProperties;
};

export function UffPhoneLink({ className, voiceAgent, corporate, style }: UffPhoneLinkProps) {
  if (corporate) {
    return (
      <a href={UFF_CORPORATE_PHONE_TEL} className={className} style={style}>
        {UFF_CORPORATE_PHONE_OF_RECORD}
      </a>
    );
  }
  return (
    <a
      href={UFF_CONSUMER_PHONE_TEL}
      className={className}
      style={style}
      aria-label={voiceAgent ? INBOUND_VOICE_AGENT_ARIA_LABEL : undefined}
    >
      {voiceAgent ? INBOUND_VOICE_AGENT_CTA : UFF_CONSUMER_PHONE}
    </a>
  );
}

const PHONE_LINK_TARGETS = [
  { display: UFF_CORPORATE_PHONE_OF_RECORD, tel: UFF_CORPORATE_PHONE_TEL },
  { display: UFF_CONSUMER_PHONE, tel: UFF_CONSUMER_PHONE_TEL },
] as const;

/** Turns display phone strings in copy into tel links (for plain-text license lines). */
export function withUffPhoneLinks(text: string): ReactNode {
  for (const { display, tel } of PHONE_LINK_TARGETS) {
    const parts = text.split(display);
    if (parts.length === 1) continue;
    return parts.map((part, i) => (
      <Fragment key={i}>
        {part}
        {i < parts.length - 1 ? (
          <a href={tel}>{display}</a>
        ) : null}
      </Fragment>
    ));
  }
  return text;
}