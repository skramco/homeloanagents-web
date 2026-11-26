import { createProgramPage } from "@/components/marketing/ProgramTrustPage";
import { howItWorksProcessTrust } from "@/lib/processTrustContent";

const { metadata, ProgramPage } = createProgramPage(howItWorksProcessTrust);

export { metadata };
export default ProgramPage;