import { createProgramPage } from "@/components/marketing/ProgramTrustPage";
import { affordabilityCalculatorTrust } from "@/lib/processTrustContent";

const { metadata, ProgramPage } = createProgramPage(affordabilityCalculatorTrust);

export { metadata };
export default ProgramPage;