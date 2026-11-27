/**
 * Daily fee-example figures. Dollar copy renders only when confirmedDate
 * equals today in America/Los_Angeles. Edit this file to update the day or the figures.
 * APRs and payments: Sentinel 1:54 PM PT, Nov 27, 2026 (real Vesta fees).
 */
export const feeExampleConfig = {
  confirmedDate: "2026-11-27",

  asOfDate: "11/27/2026",
  asOfDateTime: "11/27/2026, 1:18 p.m. PT",

  flatOriginationFee: 3500,
  sliderMin: 100_000,
  sliderMax: 832_750,
  sliderDefault: 600_000,
  sliderStep: 250,

  inlineAprMinPercent: 6.676,
  inlineAprMaxPercent: 6.769,
  loanAmountRangeLow: 300_000,
  loanAmountRangeHigh: 832_750,

  examples: [
    {
      id: 1,
      label: "Example 1",
      loanType: "UFF conventional conforming 30-year fixed-rate purchase",
      programName: "Path Conventional 30-Year Fixed",
      purchasePrice: 428_572,
      downPayment: 128_572,
      downPaymentPercent: 30,
      loanAmount: 300_000,
      ltvLabel: "70%",
      apr: 6.769,
      rate: 6.625,
      discountPoints: 0,
      lenderOriginationFee: 3500,
      monthlyPI: 1920.93,
      termMonths: 360,
    },
    {
      id: 2,
      label: "Example 2 (calculator basis)",
      loanType: "UFF conventional conforming 30-year fixed-rate purchase",
      programName: "Path Conventional 30-Year Fixed",
      purchasePrice: 857_143,
      downPayment: 257_143,
      downPaymentPercent: 30,
      loanAmount: 600_000,
      ltvLabel: "70%",
      apr: 6.697,
      rate: 6.625,
      discountPoints: 0,
      lenderOriginationFee: 3500,
      monthlyPI: 3841.87,
      termMonths: 360,
    },
    {
      id: 3,
      label: "Example 3",
      loanType: "UFF conventional conforming 30-year fixed-rate purchase",
      programName: "Root Conventional 30-Year Fixed",
      purchasePrice: 1_189_643,
      downPayment: 356_893,
      downPaymentPercent: 30,
      loanAmount: 832_750,
      ltvLabel: "70%",
      apr: 6.676,
      rate: 6.625,
      discountPoints: 0,
      lenderOriginationFee: 3500,
      monthlyPI: 5332.19,
      termMonths: 360,
    },
  ],
} as const;

export type FeeExample = (typeof feeExampleConfig.examples)[number];

export function pacificDateKey(now = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const year = parts.find((part) => part.type === "year")?.value ?? "";
  const month = parts.find((part) => part.type === "month")?.value ?? "";
  const day = parts.find((part) => part.type === "day")?.value ?? "";
  return `${year}-${month}-${day}`;
}

export function isFeeCopyConfirmed(now = new Date()): boolean {
  return pacificDateKey(now) === feeExampleConfig.confirmedDate;
}

export function formatFeeDollars(amount: number): string {
  const cents = Math.round(amount * 100);
  const hasCents = cents % 100 !== 0;
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: hasCents ? 2 : 0,
    maximumFractionDigits: hasCents ? 2 : 0,
  });
}

export function formatFeePercent(amount: number): string {
  return `${amount.toFixed(3)}%`;
}

export function calculatorBasisExample(): FeeExample {
  const match = feeExampleConfig.examples.find((example) => example.id === 2);
  return match ?? feeExampleConfig.examples[1];
}
