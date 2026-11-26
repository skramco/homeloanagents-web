import { createProgramPage } from "@/components/marketing/ProgramTrustPage";
import { rateAndTermRefiProgramTrust } from "@/lib/programTrustContent";

const { metadata, ProgramPage } = createProgramPage(rateAndTermRefiProgramTrust);

export { metadata };
export default ProgramPage;
