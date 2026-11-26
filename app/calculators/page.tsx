import { createProgramPage } from "@/components/marketing/ProgramTrustPage";
import { calculatorsHubProcessTrust } from "@/lib/processTrustContent";

const { metadata, ProgramPage } = createProgramPage(calculatorsHubProcessTrust);

export { metadata };
export default ProgramPage;