import { createProgramPage } from "@/components/marketing/ProgramTrustPage";
import { firstTimeBuyerProcessTrust } from "@/lib/processTrustContent";

const { metadata, ProgramPage } = createProgramPage(firstTimeBuyerProcessTrust);

export { metadata };
export default ProgramPage;