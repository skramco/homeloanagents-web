export type StateLicenseBlock = {
  id: string;
  title: string;
  licenseLines: string[];
  mandatoryVerbatim?: string[];
  where?: string;
  notes?: string[];
};

export const licensingPageHeader = {
  company: "United Fidelity Funding Corp. d/b/a HomeLoanAgents",
  nmlsCompanyUrl: "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/34381",
  address: "1300 NW Briarcliff Pkwy #275, Kansas City, MO 64150",
  phonePlaceholder: "[UFF CONSUMER PHONE]",
  loName: "Mark Ramirez",
  loNmls: "1192984",
  loNmlsUrl: "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/1192984",
  footerPhrase: "For licensing information, go to: www.nmlsconsumeraccess.org.",
  originatorNote:
    "A loan originator may only originate mortgage loans on property located in a state where both the company and the originator are licensed. Not all products are available in all states.",
};

/** States where Mark's MLO must NOT be represented as licensed per compliance doc §0.3 */
export const statesWithoutMarkMlo = new Set(["AL", "IL", "MA", "MO", "NJ", "NM", "SD", "VA"]);

export const TEXAS_SML_NOTICE = `TEXAS RESIDENTS: CONSUMERS WISHING TO FILE A COMPLAINT AGAINST A MORTGAGE BANKER OR RESIDENTIAL MORTGAGE LOAN ORIGINATOR LICENSEED IN TEXAS SHOULD SEND A COMPLETED COMPLAINT FORM TO THE DEPARTMENT OF SAVINGS AND MORTGAGE LENDING (SML): 2601 N. LAMAR BLVD., SUITE 201, AUSTIN, TEXAS 78705; TEL: 1-877-276-5550. INFORMATION AND FORMS ARE AVAILABLE ON SML'S WEBSITE: SML.TEXAS.GOV.`;

export const stateLicenseBlocks: StateLicenseBlock[] = [
  {
    id: "alabama",
    title: "Alabama",
    licenseLines: [
      "Alabama: United Fidelity Funding Corp., Consumer Credit License No. 23184, issued by the Alabama State Banking Department. NMLS #34381.",
    ],
    where: "NMLS ID on every page (footer).",
    notes: ["Mark AL MLO: not in our records. Do not name Mark for AL until confirmed."],
  },
  {
    id: "arizona",
    title: "Arizona",
    licenseLines: [
      "Arizona: United Fidelity Funding Corp. d/b/a HomeLoanAgents, Arizona Mortgage Banker License No. [UFF AZ LICENSE # – confirm BK-1027005 vs 2178465], issued by the Arizona Department of Insurance and Financial Institutions. NMLS #34381.",
    ],
    where:
      "On every advertisement, so in practice the footer of every page. Include the AZ license number in the global footer once confirmed: \"AZ Mortgage Banker License #[ ]\".",
    notes: [
      'A §6-117 trade-name notice for "HomeLoanAgents" must be on file with AZ DIFI before use.',
    ],
  },
  {
    id: "california",
    title: "California",
    licenseLines: [
      "California: United Fidelity Funding Corp., licensed by the Department of Financial Protection and Innovation (DFPI), California Financing Law License No. 603J733. Loans made or arranged pursuant to a California Financing Law license.",
    ],
    mandatoryVerbatim: [
      '10 CCR §1550(a): "A finance company shall refer to its licensure under the California Financing Law in any written, printed, or oral communication ... only by the following statement: \'Loans made or arranged pursuant to a California Financing Law license.\'"',
      "§1550(b): any advertisement \"shall indicate the unique identifier of the mortgage lender ... or mortgage loan originator licensee.\"",
    ],
    where:
      "Any communication that refers to CFL licensure (the footer and the licensing page) plus NMLS IDs on every ad.",
    notes: ["Mark: DFPI-licensed MLO under UFF (our records). Show NMLS #1192984."],
  },
  {
    id: "colorado",
    title: "Colorado",
    licenseLines: [
      "Colorado: United Fidelity Funding Corp., Mortgage Company Registration, NMLS #34381. Responsible party: Mark Ramirez, NMLS #1192984, [BUSINESS PHONE]. Regulated by the Division of Real Estate.",
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
    ],
    where: "Licensing page; NMLS IDs in footer. Rate-ad caveat wherever a rate appears.",
  },
  {
    id: "idaho",
    title: "Idaho",
    licenseLines: [
      "Idaho: United Fidelity Funding Corp., Mortgage Broker/Lender License No. MBL-2080034381, issued by the Idaho Department of Finance. NMLS #34381.",
    ],
    where: "NMLS IDs on every page.",
  },
  {
    id: "illinois",
    title: "Illinois",
    licenseLines: [
      "Illinois: United Fidelity Funding Corp., Illinois Residential Mortgage License No. MB.6760568, issued by the Illinois Department of Financial and Professional Regulation. NMLS #34381. For licensing information, go to: www.nmlsconsumeraccess.org.",
    ],
    mandatoryVerbatim: [
      '38 Ill. Adm. Code 1050.940: For electronic media, the licensee shall use the phrase "For licensing information, go to: www.nmlsconsumeraccess.org"; The NMLS Unique Identifier of the licensee. If a Mortgage Loan Originator (MLO) is advertised, the licensee must include its MLO employee\'s individual NMLS Unique Identifier.',
    ],
    where: "Every advertisement, so the footer (already included).",
    notes: ["Mark IL MLO: not in our records."],
  },
  {
    id: "indiana",
    title: "Indiana",
    licenseLines: [
      "Indiana: United Fidelity Funding Corp., First Lien Mortgage Lending License No. 11139, issued by the Indiana Department of Financial Institutions. NMLS #34381.",
    ],
    where: "Licensing page; NMLS IDs in footer.",
  },
  {
    id: "kentucky",
    title: "Kentucky",
    licenseLines: [
      "Kentucky: United Fidelity Funding Corp., Mortgage Company License No. MC23287, issued by the Kentucky Department of Financial Institutions. NMLS #34381.",
    ],
    where: "NMLS IDs on every page.",
  },
  {
    id: "massachusetts",
    title: "Massachusetts",
    licenseLines: [
      "Massachusetts: United Fidelity Funding Corp. d/b/a HomeLoanAgents, Massachusetts Mortgage Lender License No. ML34381, issued by the Massachusetts Division of Banks. NMLS #34381.",
    ],
    where:
      'Every advertisement. Add "MA Mortgage Lender License #ML34381" to the global footer.',
    notes: ["Mark's MA MLO is not in our records."],
  },
  {
    id: "missouri",
    title: "Missouri",
    licenseLines: [
      "Missouri: United Fidelity Funding Corp., Missouri Mortgage Company/Residential Mortgage Loan Broker License No. [UFF MO LICENSE # – confirm 34381 vs 17-1765], issued by the Missouri Division of Finance. NMLS #34381.",
    ],
    where: "NMLS IDs on every page.",
    notes: ["Mark MO MLO: not in our records."],
  },
  {
    id: "nevada",
    title: "Nevada",
    licenseLines: [
      "Nevada: United Fidelity Funding Corp., Nevada Mortgage Company License No. 4944, issued by the Nevada Division of Mortgage Lending. NMLS #34381. 1300 NW Briarcliff Pkwy #275, Kansas City, MO 64150 · [PHONE ON FILE WITH NV MLD].",
    ],
    where:
      "Every page (the footer already has name, address, phone, and NMLS ID). The phone must match the one on file with NV MLD.",
  },
  {
    id: "new-jersey",
    title: "New Jersey",
    licenseLines: [
      "New Jersey: United Fidelity Funding Corp., Residential Mortgage Lender License No. [UFF NJ LICENSE #]. 1300 NW Briarcliff Pkwy #275, Kansas City, MO 64150 · [PHONE]. Licensed by the N.J. Department of Banking and Insurance. NMLS #34381.",
    ],
    where: "Every advertisement, so the footer (included).",
    notes: ["Mark NJ MLO: not in our records."],
  },
  {
    id: "new-mexico",
    title: "New Mexico",
    licenseLines: [
      "New Mexico: United Fidelity Funding Corp., Mortgage Loan Company License No. [UFF NM LICENSE #], issued by the New Mexico Regulation and Licensing Department, Financial Institutions Division. NMLS #34381.",
    ],
    where: "NMLS IDs on every page.",
    notes: ["Mark NM MLO: not in our records."],
  },
  {
    id: "oregon",
    title: "Oregon",
    licenseLines: [
      'Oregon: United Fidelity Funding Corp., Oregon Mortgage Lending License No. [UFF OR LICENSE # – UFF site shows "34381"], issued by the Oregon Division of Financial Regulation. NMLS #34381.',
    ],
    where: "NMLS IDs on every page; name rule on every ad.",
  },
  {
    id: "south-dakota",
    title: "South Dakota",
    licenseLines: [
      "South Dakota: United Fidelity Funding Corp., Mortgage Lender License No. 34381.ML, issued by the South Dakota Division of Banking. NMLS #34381.",
    ],
    notes: ["Mark SD MLO: not in our records."],
  },
  {
    id: "texas",
    title: "Texas",
    licenseLines: [
      "Texas: United Fidelity Funding Corp., NMLS #34381, Mortgage Banker Registration with the Texas Department of Savings and Mortgage Lending. Website: homeloanagents.com. Loan officer: Mark Ramirez, NMLS #1192984.",
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
    ],
    where:
      'Every advertisement. Use the exact "NMLS ID # 34381 (www.nmlsconsumeraccess.org)" format in the footer.',
    notes: ["Mark VA MLO: not in our records."],
  },
  {
    id: "washington",
    title: "Washington",
    licenseLines: [
      "Washington: United Fidelity Funding Corp. d/b/a UFF West Funding Corp. [and d/b/a HomeLoanAgents, once added], Consumer Loan Company License No. CL-34381, issued by the Washington Department of Financial Institutions. NMLS #34381. Mark Ramirez, MLO, License No. MLO-1192984 [confirm WA format].",
    ],
    where:
      "Primary landing page (home page) and any page that names the LO. The footer covers both once the WA license number is added.",
  },
  {
    id: "wisconsin",
    title: "Wisconsin",
    licenseLines: [
      "Wisconsin: United Fidelity Funding Corp., Mortgage Banker License No. 34381BA, issued by the Wisconsin Department of Financial Institutions. NMLS #34381.",
    ],
    where: "NMLS IDs on every page and in email signatures.",
  },
];