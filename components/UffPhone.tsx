import { Fragment, type CSSProperties, type ReactNode } from "react";
import {
  INBOUND_VOICE_AGENT_ARIA_LABEL,
  INBOUND_VOICE_AGENT_CTA,
  UFF_CONSUMER_PHONE,
  UFF_CONSUMER_PHONE_TEL,
} from "@/lib/constants";

type UffPhoneLinkProps = { className?: string; voiceAgent?: boolean; style?: CSSProperties };

export function UffPhoneLink({ className, voiceAgent, style }: UffPhoneLinkProps) {
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

/** Turns display phone strings in copy into tel links (for plain-text license lines). */
export function withUffPhoneLinks(text: string): ReactNode {
  const parts = text.split(UFF_CONSUMER_PHONE);
  if (parts.length === 1) return text;
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 ? <UffPhoneLink /> : null}
    </Fragment>
  ));
}