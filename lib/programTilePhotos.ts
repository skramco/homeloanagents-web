import { marketingPhotos } from "./marketingPhotos";

export type ProgramTilePhoto = (typeof marketingPhotos)[keyof typeof marketingPhotos];

/** Hero and homepage tile images for featured loan programs — keep in sync via this map only. */
export const programPhotoByPath = {
  "/loans/conventional": marketingPhotos.buyPorch,
  "/loans/fha": marketingPhotos.ctaDoorway,
  "/loans/va": marketingPhotos.programVa,
  "/loans/jumbo": marketingPhotos.programJumbo,
  "/loans/fixed": marketingPhotos.programFixed,
  "/loans/arm-vs-fixed": marketingPhotos.advisorMeeting,
  "/loans/usda": marketingPhotos.familyLiving,
  "/loans/non-qm": marketingPhotos.advisorMeeting,
  "/refinance/rate-and-term": marketingPhotos.refiTable,
  "/refinance/cash-out": marketingPhotos.familyLiving,
  "/refinance": marketingPhotos.refiTable,
  "/buy": marketingPhotos.buyPorch,
  "/buy/pre-approval": marketingPhotos.advisorMeeting,
  "/buy/first-time-homebuyers": marketingPhotos.buyPorch,
  "/how-it-works": marketingPhotos.underwriter,
  "/calculators": marketingPhotos.advisorMeeting,
  "/calculators/mortgage-payment": marketingPhotos.familyLiving,
  "/calculators/affordability": marketingPhotos.buyPorch,
} as const;

export type ProgramTilePath = keyof typeof programPhotoByPath;

export function programPhotoForPath(path: ProgramTilePath): ProgramTilePhoto {
  return programPhotoByPath[path];
}