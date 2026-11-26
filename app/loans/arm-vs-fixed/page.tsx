import { createProgramPage } from "@/components/marketing/ProgramTrustPage";
import { armProgramTrust } from "@/lib/programTrustContent";

const { metadata, ProgramPage } = createProgramPage(armProgramTrust);

export { metadata };
export default ProgramPage;
