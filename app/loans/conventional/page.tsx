import { createProgramPage } from "@/components/marketing/ProgramTrustPage";
import { conventionalProgramTrust } from "@/lib/programTrustContent";

const { metadata, ProgramPage } = createProgramPage(conventionalProgramTrust);

export { metadata };
export default ProgramPage;
