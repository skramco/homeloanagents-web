import { createProgramPage } from "@/components/marketing/ProgramTrustPage";
import { refinanceHubProcessTrust } from "@/lib/processTrustContent";

const { metadata, ProgramPage } = createProgramPage(refinanceHubProcessTrust);

export { metadata };
export default ProgramPage;