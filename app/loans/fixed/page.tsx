import { createProgramPage } from "@/components/marketing/ProgramTrustPage";
import { fixedProgramTrust } from "@/lib/programTrustContent";

const { metadata, ProgramPage } = createProgramPage(fixedProgramTrust);

export { metadata };
export default ProgramPage;
