import { createLearnGuidePage } from "@/components/marketing/LearnGuidePage";
import { closingCostsGuide } from "@/lib/learnGuideContent";

const { metadata, GuidePage } = createLearnGuidePage(closingCostsGuide);

export { metadata };
export default GuidePage;