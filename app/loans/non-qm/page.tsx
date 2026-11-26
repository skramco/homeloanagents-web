import { createProgramPage } from "@/components/marketing/ProgramTrustPage";
import { nonQmProgramTrust } from "@/lib/processTrustContent";

const { metadata, ProgramPage } = createProgramPage(nonQmProgramTrust);

export { metadata };
export default ProgramPage;