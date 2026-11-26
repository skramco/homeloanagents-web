import { marketingPhotos } from "./marketingPhotos";

/** Photo-led headers for key product pages. */
export const pageHeroByPath: Record<string, { src: string; alt: string }> = {
  "/buy": marketingPhotos.buyPorch,
  "/buy/first-time-homebuyers": marketingPhotos.buyPorch,
  "/buy/pre-approval": marketingPhotos.advisorMeeting,
  "/refinance": marketingPhotos.refiTable,
  "/refinance/rate-and-term": marketingPhotos.refiTable,
  "/refinance/cash-out": marketingPhotos.refiTable,
  "/loans/conventional": marketingPhotos.familyLiving,
  "/loans/fha": marketingPhotos.familyLiving,
  "/loans/va": marketingPhotos.buyPorch,
  "/loans/usda": marketingPhotos.familyLiving,
  "/loans/jumbo": marketingPhotos.ctaDoorway,
  "/loans/arm-vs-fixed": marketingPhotos.refiTable,
  "/loans/non-qm": marketingPhotos.advisorMeeting,
};