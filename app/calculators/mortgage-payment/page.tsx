import { createProgramPage } from "@/components/marketing/ProgramTrustPage";
import { mortgagePaymentCalculatorTrust } from "@/lib/processTrustContent";

const { metadata, ProgramPage } = createProgramPage(mortgagePaymentCalculatorTrust);

export { metadata };
export default ProgramPage;