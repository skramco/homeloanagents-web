import { createProgramPage } from "@/components/marketing/ProgramTrustPage";
import { cashOutRefiProgramTrust } from "@/lib/programTrustContent";

const { metadata, ProgramPage } = createProgramPage(cashOutRefiProgramTrust);

export { metadata };
export default ProgramPage;