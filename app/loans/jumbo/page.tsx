import { createProgramPage } from "@/components/marketing/ProgramTrustPage";
import { jumboProgramTrust } from "@/lib/programTrustContent";

const { metadata, ProgramPage } = createProgramPage(jumboProgramTrust);

export { metadata };
export default ProgramPage;
