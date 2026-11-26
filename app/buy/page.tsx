import { createProgramPage } from "@/components/marketing/ProgramTrustPage";
import { buyHubProcessTrust } from "@/lib/processTrustContent";

const { metadata, ProgramPage } = createProgramPage(buyHubProcessTrust);

export { metadata };
export default ProgramPage;