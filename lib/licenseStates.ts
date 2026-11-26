import { UFF_CONSUMER_PHONE, UFF_PRINCIPAL_OFFICE } from "./constants";

export type StateLicenseBlock = {
  id: string;
  title: string;
  licenseLines: string[];
  mandatoryVerbatim?: string[];
  where?: string;
};

export const LICENSED_STATES =
  "AL, AZ, CA, CO, FL, ID, IL, IN, KY, MA, MO, NV, NJ, NM, OR, SD, TX, VA, WA, WI";

export const licensingPageHeader = {
  company: "United Fidelity Funding Corp. d/b/a HomeLoanAgents",
  nmlsCompanyUrl: "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/34381",
  address: UFF_PRINCIPAL_OFFICE,
  loName: "Mark Ramirez",
  loNmls: "1192984",
  loNmlsUrl: "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/1192984",
  licensedStates: LICENSED_STATES,
  publicLine: "HomeLoanAgents is a trade name of United Fidelity Funding Corp., NMLS #34381.",
  footerPhrase: "For licensing information, go to: www.nmlsconsumeraccess.org.",
  originatorNote:
    "A loan originator may only originate mortgage loans on property located in a state where both the company and the originator are licensed. Not all products are available in all states.",
};

export const TEXAS_SML_NOTICE = `TEXAS RESIDENTS: CONSUMERS WISHING TO FILE A COMPLAINT AGAINST A MORTGAGE BANKER OR RESIDENTIAL MORTGAGE LOAN ORIGINATOR LICENSEED IN TEXAS SHOULD SEND A COMPLETED COMPLAINT FORM TO THE DEPARTMENT OF SAVINGS AND MORTGAGE LENDING (SML): 2601 N. LAMAR BLVD., SUITE 201, AUSTIN, TEXAS 78705; TEL: 1-877-276-5550. INFORMATION AND FORMS ARE AVAILABLE ON SML'S WEBSITE: SML.TEXAS.GOV.`;

const MARK_MLO_LINE_PREFIX = "Loan officer: Mark Ramirez, NMLS #1192984";

const markMloLicenseDetail: Record<string, string> = {
  AL: "TA Approved (temporary authority), license # pending state",
  AZ: "Loan Originator License LO-1034683",
  CA: "Mortgage Loan Originator License CA-DBO1192984",
  CO: "TA Approved (temporary authority), license # pending state",
  FL: "Mortgage Loan Originator License LO105507",
  ID: "Mortgage Loan Originator License MLO-2081192984",
  IL: "Mortgage Loan Originator License 031.0096925",
  IN: "Mortgage Loan Originator License 71837",
  KY: "TA Approved (temporary authority), license # pending state",
  MA: "TA Approved (temporary authority), license # pending state",
  MO: "TA Approved (temporary authority), license # pending state",
  NV: "Mortgage Loan Originator License NMLO-101021",
  NJ: "TA Approved (temporary authority), license # pending state",
  NM: "TA Approved (temporary authority), license # pending state",
  OR: "Mortgage Loan Originator License, NMLS #1192984 (state uses NMLS ID)",
  SD: "Mortgage Loan Originator License 1192984.MLO",
  TX: "Mortgage Loan Originator, NMLS #1192984 (state uses NMLS ID)",
  VA: "TA Approved (temporary authority), license # pending state",
  WA: "Mortgage Loan Originator License MLO-1192984",
  WI: "Mortgage Loan Originator License 1192984",
};

const lo = (st: string) => `${MARK_MLO_LINE_PREFIX}, ${markMloLicenseDetail[st]}.`;

export const stateLicenseBlocks: StateLicenseBlock[] = [
  {
    id: "alabama",
    title: "Alabama",
    licenseLines: [
      "Alabama: United Fidelity Funding Corp., Consumer Credit License No. 23184, issued by the Alabama State Banking Department. NMLS #34381.",
      lo("AL"),
    ],
    where: "NMLS ID on every page (footer).",
  },
  {
    id: "arizona",
    title: "Arizona",
    licenseLines: [
      "Arizona: United Fidelity Funding Corp. d/b/a HomeLoanAgents, Arizona Mortgage Banker License No. BK-2015110, issued by the Arizona Department of Insurance and Financial Institutions. NMLS #34381.",
      lo("AZ"),
    ],
    where:
      "On every advertisement, so in practice the footer of every page. The AZ license number BK-2015110 is in the global footer.",
  },
  {
    id: "california",
    title: "California",
    licenseLines: [
      "California: United Fidelity Funding Corp., licensed by the Department of Financial Protection and Innovation (DFPI), California Financing Law License No. 603J733. Loans made or arranged pursuant to a California Financing Law license.",
      lo("CA"),
    ],
    mandatoryVerbatim: [
      '10 CCR §1550(a): "A finance company shall refer to its licensure under the California Financing Law in any written, printed, or oral communication ... only by the following statement: \'Loans made or arranged pursuant to a California Financing Law license.\'"',
      "§1550(b): any advertisement \"shall indicate the unique identifier of the mortgage lender ... or mortgage loan originator licensee.\"",
    ],
    where:
      "Any communication that refers to CFL licensure (the footer and the licensing page) plus NMLS IDs on every ad.",
  },
  {
    id: "colorado",
    title: "Colorado",
    licenseLines: [
      `Colorado: United Fidelity Funding Corp., Mortgage Company Registration, NMLS #34381. Responsible party: Mark Ramirez, NMLS #1192984, ${UFF_CONSUMER_PHONE}. Regulated by the Division of Real Estate.`,
      lo("CO"),
    ],
    mandatoryVerbatim: [
      '4 CCR 725-3 Rule 5.1(B) requires, "each of which must be clearly and conspicuously included in the advertisement": (1) At least one responsible party ... NMLS registration number; (2) The mortgage company name; (3) The business phone number of the responsible party; and (4) The statement "regulated by the Division of Real Estate."',
    ],
    where: "Every advertisement, so the footer of every page.",
  },
  {
    id: "florida",
    title: "Florida",
    licenseLines: [
      "Florida: United Fidelity Funding Corp., Mortgage Lender License No. MLD506, issued by the Florida Office of Financial Regulation. NMLS #34381.",
      lo("FL"),
    ],
    where: "Licensing page; NMLS IDs in footer. Rate-ad caveat wherever a rate appears.",
  },
  {
    id: "idaho",
    title: "Idaho",
    licenseLines: [
      "Idaho: United Fidelity Funding Corp., Mortgage Broker/Lender License No. MBL-2080034381, issued by the Idaho Department of Finance. NMLS #34381.",
      lo("ID"),
    ],
    where: "NMLS IDs on every page.",
  },
  {
    id: "illinois",
    title: "Illinois",
    licenseLines: [
      "Illinois: United Fidelity Funding Corp., Illinois Residential Mortgage License No. MB.6760568, issued by the Illinois Department of Financial and Professional Regulation. NMLS #34381. For licensing information, go to: www.nmlsconsumeraccess.org.",
      lo("IL"),
    ],
    mandatoryVerbatim: [
      '38 Ill. Adm. Code 1050.940: For electronic media, the licensee shall use the phrase "For licensing information, go to: www.nmlsconsumeraccess.org"; The NMLS Unique Identifier of the licensee. If a Mortgage Loan Originator (MLO) is advertised, the licensee must include its MLO employee\'s individual NMLS Unique Identifier.',
    ],
    where: "Every advertisement, so the footer (already included).",
  },
  {
    id: "indiana",
    title: "Indiana",
    licenseLines: [
      "Indiana: United Fidelity Funding Corp., Mortgage Lending License No. 11139 (NMLS regulator: Indiana-DFI), issued by the Indiana Department of Financial Institutions. NMLS #34381.",
      lo("IN"),
    ],
    where: "Licensing page; NMLS IDs in footer.",
  },
  {
    id: "kentucky",
    title: "Kentucky",
    licenseLines: [
      "Kentucky: United Fidelity Funding Corp., Mortgage Company License No. MC23287, issued by the Kentucky Department of Financial Institutions. NMLS #34381.",
      lo("KY"),
    ],
    where: "NMLS IDs on every page.",
  },
  {
    id: "massachusetts",
    title: "Massachusetts",
    licenseLines: [
      "Massachusetts: United Fidelity Funding Corp. d/b/a HomeLoanAgents, Massachusetts Mortgage Lender License No. ML34381, issued by the Massachusetts Division of Banks. NMLS #34381.",
      lo("MA"),
    ],
    where:
      'Every advertisement. Add "MA Mortgage Lender License #ML34381" to the global footer.',
  },
  {
    id: "missouri",
    title: "Missouri",
    licenseLines: [
      "Missouri: United Fidelity Funding Corp., Mortgage Company License No. 34381, issued by the Missouri Division of Finance. NMLS #34381.",
      lo("MO"),
    ],
    where: "NMLS IDs on every page.",
  },
  {
    id: "nevada",
    title: "Nevada",
    licenseLines: [
      `Nevada: United Fidelity Funding Corp., Nevada Mortgage Company License No. NMC-1197589, issued by the Nevada Division of Mortgage Lending. NMLS #34381. ${UFF_PRINCIPAL_OFFICE} · ${UFF_CONSUMER_PHONE}.`,
      lo("NV"),
    ],
    where:
      "Every page (the footer already has name, address, phone, and NMLS ID). The phone must match the one on file with NV MLD.",
  },
  {
    id: "new-jersey",
    title: "New Jersey",
    licenseLines: [
      `New Jersey: United Fidelity Funding Corp., Residential Mortgage Lender License, NMLS #34381. ${UFF_PRINCIPAL_OFFICE} · ${UFF_CONSUMER_PHONE}. Licensed by the N.J. Department of Banking and Insurance. NMLS #34381.`,
      lo("NJ"),
    ],
    where: "Every advertisement, so the footer (included).",
  },
  {
    id: "new-mexico",
    title: "New Mexico",
    licenseLines: [
      "New Mexico: United Fidelity Funding Corp., Mortgage Loan Company License, NMLS #34381, issued by the New Mexico Regulation and Licensing Department, Financial Institutions Division. NMLS #34381.",
      lo("NM"),
    ],
    where: "NMLS IDs on every page.",
  },
  {
    id: "oregon",
    title: "Oregon",
    licenseLines: [
      "Oregon: United Fidelity Funding Corp., Oregon Mortgage Lending License No. 34381, issued by the Oregon Division of Financial Regulation. NMLS #34381.",
      lo("OR"),
    ],
    where: "NMLS IDs on every page; name rule on every ad.",
  },
  {
    id: "south-dakota",
    title: "South Dakota",
    licenseLines: [
      "South Dakota: United Fidelity Funding Corp., Mortgage Lender License No. 34381.ML, issued by the South Dakota Division of Banking. NMLS #34381.",
      lo("SD"),
    ],
  },
  {
    id: "texas",
    title: "Texas",
    licenseLines: [
      "Texas: United Fidelity Funding Corp., NMLS #34381, Mortgage Banker Registration with the Texas Department of Savings and Mortgage Lending. Website: homeloanagents.com.",
      lo("TX"),
    ],
    mandatoryVerbatim: [TEXAS_SML_NOTICE],
    where:
      "Notice: on the initial or home page or linked from home page (/licensing#texas). Every ad: mortgage banker name and NMLS ID; website; sponsored originator name and NMLS ID.",
  },
  {
    id: "virginia",
    title: "Virginia",
    licenseLines: [
      "Virginia: United Fidelity Funding Corp., NMLS ID # 34381 (www.nmlsconsumeraccess.org), Virginia Lender License No. MC-7052, licensed by the Virginia State Corporation Commission.",
      lo("VA"),
    ],
    where:
      'Every advertisement. Use the exact "NMLS ID # 34381 (www.nmlsconsumeraccess.org)" format in the footer.',
  },
  {
    id: "washington",
    title: "Washington",
    licenseLines: [
      "Washington: United Fidelity Funding Corp. d/b/a UFF West Funding Corp. and d/b/a HomeLoanAgents, Consumer Loan Company License No. CL-34381, issued by the Washington Department of Financial Institutions. NMLS #34381.",
      lo("WA"),
    ],
    where:
      "Primary landing page (home page) and any page that names the LO. The footer covers both once the WA license number is added.",
  },
  {
    id: "wisconsin",
    title: "Wisconsin",
    licenseLines: [
      "Wisconsin: United Fidelity Funding Corp., Mortgage Banker License No. 34381BA, issued by the Wisconsin Department of Financial Institutions. NMLS #34381.",
      lo("WI"),
    ],
    where: "NMLS IDs on every page and in email signatures.",
  },
];