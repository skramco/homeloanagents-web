import { createProgramPage } from "@/components/marketing/ProgramTrustPage";
import { usdaProgramTrust } from "@/lib/processTrustContent";

const { metadata, ProgramPage } = createProgramPage(usdaProgramTrust);

export { metadata };
export default ProgramPage;