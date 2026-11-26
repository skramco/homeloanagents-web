/** Per-state advertising toggle. When `enabled` is false, drop footer/header state lists and the /licensing block. */
export type LicensedStateCode =
  | "AL"
  | "AZ"
  | "CA"
  | "CO"
  | "FL"
  | "ID"
  | "IL"
  | "IN"
  | "KY"
  | "MA"
  | "MO"
  | "NV"
  | "NJ"
  | "NM"
  | "OR"
  | "SD"
  | "TX"
  | "VA"
  | "WA"
  | "WI";

export type LicensedStateConfig = {
  code: LicensedStateCode;
  enabled: boolean;
};

export const licensedStates: LicensedStateConfig[] = [
  { code: "AL", enabled: true },
  { code: "AZ", enabled: true },
  { code: "CA", enabled: true },
  { code: "CO", enabled: true },
  { code: "FL", enabled: true },
  { code: "ID", enabled: true },
  { code: "IL", enabled: true },
  { code: "IN", enabled: true },
  { code: "KY", enabled: true },
  { code: "MA", enabled: true },
  { code: "MO", enabled: true },
  { code: "NV", enabled: true },
  { code: "NJ", enabled: true },
  { code: "NM", enabled: true },
  { code: "OR", enabled: true },
  { code: "SD", enabled: true },
  { code: "TX", enabled: true },
  { code: "VA", enabled: true },
  { code: "WA", enabled: true },
  { code: "WI", enabled: true },
];

export function enabledLicensedStateCodes(): LicensedStateCode[] {
  return licensedStates.filter((s) => s.enabled).map((s) => s.code);
}

export function licensedStatesDisplayList(): string {
  return enabledLicensedStateCodes().join(", ");
}

/** States whose MLO license number is pending (HTML comment placeholders only). */
export const PENDING_MLO_LICENSE_STATES: LicensedStateCode[] = [
  "AL",
  "CO",
  "KY",
  "MA",
  "MO",
  "NJ",
  "NM",
  "VA",
];