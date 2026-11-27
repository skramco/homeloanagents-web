import { UFF_CORPORATE_PHONE_OF_RECORD, UFF_PRINCIPAL_OFFICE } from "./constants";
import {
  enabledLicensedStateCodes,
  licensedStatesDisplayList,
  type LicensedStateCode,
} from "./licensedStates";

export type StateLicenseBlock = {
  id: string;
  stateCode: LicensedStateCode;
  title: string;
  licenseLines: string[];
  loanOfficerLine: string;
  /** Mandatory public verbatim text (e.g. Texas SML notice). */
  publicVerbatim?: string[];
  washingtonNmlsLink?: boolean;
};

export const LICENSED_STATES = licensedStatesDisplayList();

export const licensingPageHeader = {
  company: "United Fidelity Funding Corp. d/b/a HomeLoanAgents",
  nmlsCompanyUrl: "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/34381",
  address: UFF_PRINCIPAL_OFFICE,
  loName: "Mark Ramirez",
  loNmls: "1192984",
  loNmlsUrl: "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/1192984",
  get licensedStates() {
    return licensedStatesDisplayList();
  },
  publicLine: "HomeLoanAgents is a trade name of United Fidelity Funding Corp., NMLS #34381.",
  footerPhrase: "For licensing information, go to: www.nmlsconsumeraccess.org.",
  originatorNote:
    "A loan originator may only originate mortgage loans on property located in a state where both the company and the originator are licensed. Not all products are available in all states.",
};

export const TEXAS_SML_NOTICE = `TEXAS RESIDENTS: CONSUMERS WISHING TO FILE A COMPLAINT AGAINST A MORTGAGE BANKER OR RESIDENTIAL MORTGAGE LOAN ORIGINATOR LICENSEED IN TEXAS SHOULD SEND A COMPLETED COMPLAINT FORM TO THE DEPARTMENT OF SAVINGS AND MORTGAGE LENDING (SML): 2601 N. LAMAR BLVD., SUITE 201, AUSTIN, TEXAS 78705; TEL: 1-877-276-5550. INFORMATION AND FORMS ARE AVAILABLE ON SML'S WEBSITE: SML.TEXAS.GOV.`;

const TA_PENDING = "TA Approved (temporary authority), license # pending state";

const loanOfficerLines: Record<LicensedStateCode, string> = {
  AL: `Loan officer: Mark Ramirez, NMLS #1192984, ${TA_PENDING}.`,
  AZ: "Loan officer: Mark Ramirez, NMLS #1192984, AZ Loan Originator License No. LO-1034683.",
  CA: "Loan officer: Mark Ramirez, NMLS #1192984, CA Mortgage Loan Originator License (DFPI) No. CA-DBO1192984.",
  CO: `Loan officer: Mark Ramirez, NMLS #1192984, ${TA_PENDING}.`,
  FL: "Loan officer: Mark Ramirez, NMLS #1192984, FL Mortgage Loan Originator License No. LO105507.",
  ID: "Loan officer: Mark Ramirez, NMLS #1192984, ID Mortgage Loan Originator License No. MLO-2081192984.",
  IL: "Loan officer: Mark Ramirez, NMLS #1192984, IL Mortgage Loan Originator License No. 031.0096925.",
  IN: "Loan officer: Mark Ramirez, NMLS #1192984, IN Mortgage Loan Originator License (Indiana-DFI) No. 71837.",
  KY: `Loan officer: Mark Ramirez, NMLS #1192984, ${TA_PENDING}.`,
  MA: `Loan officer: Mark Ramirez, NMLS #1192984, ${TA_PENDING}.`,
  MO: `Loan officer: Mark Ramirez, NMLS #1192984, ${TA_PENDING}.`,
  NV: "Loan officer: Mark Ramirez, NMLS #1192984, NV Mortgage Loan Originator License No. NMLO-101021.",
  NJ: `Loan officer: Mark Ramirez, NMLS #1192984, ${TA_PENDING}.`,
  NM: `Loan officer: Mark Ramirez, NMLS #1192984, ${TA_PENDING}.`,
  OR: "Loan officer: Mark Ramirez, NMLS #1192984 (OR issues no separate MLO license number; NMLS ID is the identifier).",
  SD: "Loan officer: Mark Ramirez, NMLS #1192984, SD Mortgage Loan Originator License No. 1192984.MLO.",
  TX: "Loan officer: Mark Ramirez, NMLS #1192984 (TX issues no separate MLO license number; NMLS ID is the identifier).",
  VA: `Loan officer: Mark Ramirez, NMLS #1192984, ${TA_PENDING}.`,
  WA: "Loan officer: Mark Ramirez, NMLS #1192984, WA Mortgage Loan Originator License No. MLO-1192984.",
  WI: "Loan officer: Mark Ramirez, NMLS #1192984, WI Mortgage Loan Originator License No. 1192984.",
};

const allStateLicenseBlocks: StateLicenseBlock[] = [
  {
    id: "alabama",
    stateCode: "AL",
    title: "Alabama",
    licenseLines: [
      "Alabama: United Fidelity Funding Corp., Consumer Credit License No. 23184, issued by the Alabama State Banking Department. NMLS #34381.",
    ],
    loanOfficerLine: loanOfficerLines.AL,
  },
  {
    id: "arizona",
    stateCode: "AZ",
    title: "Arizona",
    licenseLines: [
      "Arizona: United Fidelity Funding Corp. d/b/a HomeLoanAgents, Arizona Mortgage Banker License No. BK-2015110, issued by the Arizona Department of Insurance and Financial Institutions. NMLS #34381.",
    ],
    loanOfficerLine: loanOfficerLines.AZ,
  },
  {
    id: "california",
    stateCode: "CA",
    title: "California",
    licenseLines: [
      "California: United Fidelity Funding Corp., licensed by the Department of Financial Protection and Innovation (DFPI), California Financing Law License No. 603J733. Loans made or arranged pursuant to a California Financing Law license.",
    ],
    loanOfficerLine: loanOfficerLines.CA,
  },
  {
    id: "colorado",
    stateCode: "CO",
    title: "Colorado",
    licenseLines: [
      `Colorado: United Fidelity Funding Corp., Mortgage Company Registration, NMLS #34381. Responsible party: Mark Ramirez, NMLS #1192984, ${UFF_CORPORATE_PHONE_OF_RECORD}. Regulated by the Division of Real Estate.`,
    ],
    loanOfficerLine: loanOfficerLines.CO,
  },
  {
    id: "florida",
    stateCode: "FL",
    title: "Florida",
    licenseLines: [
      "Florida: United Fidelity Funding Corp., Mortgage Lender License No. MLD506, issued by the Florida Office of Financial Regulation. NMLS #34381.",
    ],
    loanOfficerLine: loanOfficerLines.FL,
  },
  {
    id: "idaho",
    stateCode: "ID",
    title: "Idaho",
    licenseLines: [
      "Idaho: United Fidelity Funding Corp., Mortgage Broker/Lender License No. MBL-2080034381, issued by the Idaho Department of Finance. NMLS #34381.",
    ],
    loanOfficerLine: loanOfficerLines.ID,
  },
  {
    id: "illinois",
    stateCode: "IL",
    title: "Illinois",
    licenseLines: [
      "Illinois: United Fidelity Funding Corp., Illinois Residential Mortgage License No. MB.6760568, issued by the Illinois Department of Financial and Professional Regulation. NMLS #34381. For licensing information, go to: www.nmlsconsumeraccess.org.",
    ],
    loanOfficerLine: loanOfficerLines.IL,
  },
  {
    id: "indiana",
    stateCode: "IN",
    title: "Indiana",
    licenseLines: [
      "Indiana: United Fidelity Funding Corp., Mortgage Lending License No. 11139 (NMLS regulator: Indiana-DFI), issued by the Indiana Department of Financial Institutions. NMLS #34381.",
    ],
    loanOfficerLine: loanOfficerLines.IN,
  },
  {
    id: "kentucky",
    stateCode: "KY",
    title: "Kentucky",
    licenseLines: [
      "Kentucky: United Fidelity Funding Corp., Mortgage Company License No. MC23287, issued by the Kentucky Department of Financial Institutions. NMLS #34381.",
    ],
    loanOfficerLine: loanOfficerLines.KY,
  },
  {
    id: "massachusetts",
    stateCode: "MA",
    title: "Massachusetts",
    licenseLines: [
      "Massachusetts: United Fidelity Funding Corp. d/b/a HomeLoanAgents, Massachusetts Mortgage Lender License No. ML34381, issued by the Massachusetts Division of Banks. NMLS #34381.",
    ],
    loanOfficerLine: loanOfficerLines.MA,
  },
  {
    id: "missouri",
    stateCode: "MO",
    title: "Missouri",
    licenseLines: [
      "Missouri: United Fidelity Funding Corp., Mortgage Company License No. 34381, issued by the Missouri Division of Finance. NMLS #34381.",
    ],
    loanOfficerLine: loanOfficerLines.MO,
  },
  {
    id: "nevada",
    stateCode: "NV",
    title: "Nevada",
    licenseLines: [
      `Nevada: United Fidelity Funding Corp., Nevada Mortgage Company License No. NMC-1197589, issued by the Nevada Division of Mortgage Lending. NMLS #34381. ${UFF_PRINCIPAL_OFFICE} · ${UFF_CORPORATE_PHONE_OF_RECORD}.`,
    ],
    loanOfficerLine: loanOfficerLines.NV,
  },
  {
    id: "new-jersey",
    stateCode: "NJ",
    title: "New Jersey",
    licenseLines: [
      `New Jersey: United Fidelity Funding Corp., Residential Mortgage Lender License, NMLS #34381. ${UFF_PRINCIPAL_OFFICE} · ${UFF_CORPORATE_PHONE_OF_RECORD}. Licensed by the N.J. Department of Banking and Insurance. NMLS #34381.`,
    ],
    loanOfficerLine: loanOfficerLines.NJ,
  },
  {
    id: "new-mexico",
    stateCode: "NM",
    title: "New Mexico",
    licenseLines: [
      "New Mexico: United Fidelity Funding Corp., Mortgage Loan Company License, NMLS #34381, issued by the New Mexico Regulation and Licensing Department, Financial Institutions Division. NMLS #34381.",
    ],
    loanOfficerLine: loanOfficerLines.NM,
  },
  {
    id: "oregon",
    stateCode: "OR",
    title: "Oregon",
    licenseLines: [
      "Oregon: United Fidelity Funding Corp., Oregon Mortgage Lending License No. 34381, issued by the Oregon Division of Financial Regulation. NMLS #34381.",
    ],
    loanOfficerLine: loanOfficerLines.OR,
  },
  {
    id: "south-dakota",
    stateCode: "SD",
    title: "South Dakota",
    licenseLines: [
      "South Dakota: United Fidelity Funding Corp., Mortgage Lender License No. 34381.ML, issued by the South Dakota Division of Banking. NMLS #34381.",
    ],
    loanOfficerLine: loanOfficerLines.SD,
  },
  {
    id: "texas",
    stateCode: "TX",
    title: "Texas",
    licenseLines: [
      "Texas: United Fidelity Funding Corp., NMLS #34381, Mortgage Banker Registration with the Texas Department of Savings and Mortgage Lending. Website: homeloanagents.com.",
    ],
    loanOfficerLine: loanOfficerLines.TX,
    publicVerbatim: [TEXAS_SML_NOTICE],
  },
  {
    id: "virginia",
    stateCode: "VA",
    title: "Virginia",
    licenseLines: [
      "Virginia: United Fidelity Funding Corp., NMLS ID # 34381 (www.nmlsconsumeraccess.org), Virginia Lender License No. MC-7052, licensed by the Virginia State Corporation Commission.",
    ],
    loanOfficerLine: loanOfficerLines.VA,
  },
  {
    id: "washington",
    stateCode: "WA",
    title: "Washington",
    licenseLines: [
      "Washington: United Fidelity Funding Corp. d/b/a UFF West Funding Corp. and d/b/a HomeLoanAgents, Consumer Loan Company License No. CL-34381, issued by the Washington Department of Financial Institutions. NMLS #34381",
    ],
    loanOfficerLine: loanOfficerLines.WA,
    washingtonNmlsLink: true,
  },
  {
    id: "wisconsin",
    stateCode: "WI",
    title: "Wisconsin",
    licenseLines: [
      "Wisconsin: United Fidelity Funding Corp., Mortgage Banker License No. 34381BA, issued by the Wisconsin Department of Financial Institutions. NMLS #34381.",
    ],
    loanOfficerLine: loanOfficerLines.WI,
  },
];

const enabledSet = () => new Set(enabledLicensedStateCodes());

export function stateLicenseBlocks(): StateLicenseBlock[] {
  const on = enabledSet();
  return allStateLicenseBlocks.filter((b) => on.has(b.stateCode));
}