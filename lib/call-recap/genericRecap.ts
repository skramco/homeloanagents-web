import type { RecapFields } from "@/lib/call-recap/emailTemplate";

/** Safe Section 7.1 field values when the model is unavailable or must not be used. */
export function genericRecapFields(): RecapFields {
  return {
    askedAbout: "a home loan, in general terms",
    propertyState: "not provided on the call",
    followUp: "by email",
  };
}
