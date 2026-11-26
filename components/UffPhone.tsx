import { Fragment, type ReactNode } from "react";
import { UFF_CONSUMER_PHONE, UFF_CONSUMER_PHONE_TEL } from "@/lib/constants";

export function UffPhoneLink() {
  return (
    <a href={UFF_CONSUMER_PHONE_TEL}>{UFF_CONSUMER_PHONE}</a>
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