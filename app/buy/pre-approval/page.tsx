import { createProgramPage } from "@/components/marketing/ProgramTrustPage";
import { preApprovalProcessTrust } from "@/lib/processTrustContent";

const { metadata, ProgramPage } = createProgramPage(preApprovalProcessTrust);

export { metadata };
export default ProgramPage;