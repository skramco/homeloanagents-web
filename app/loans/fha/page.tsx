import { createProgramPage } from "@/components/marketing/ProgramTrustPage";
import { fhaProgramTrust } from "@/lib/programTrustContent";

const { metadata, ProgramPage } = createProgramPage(fhaProgramTrust);

export { metadata };
export default ProgramPage;
