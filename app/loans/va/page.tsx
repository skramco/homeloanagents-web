import { createProgramPage } from "@/components/marketing/ProgramTrustPage";
import { vaProgramTrust } from "@/lib/programTrustContent";

const { metadata, ProgramPage } = createProgramPage(vaProgramTrust);

export { metadata };
export default ProgramPage;
