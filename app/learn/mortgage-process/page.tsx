import { createLearnGuidePage } from "@/components/marketing/LearnGuidePage";
import { mortgageProcessGuide } from "@/lib/learnGuideContent";

const { metadata, GuidePage } = createLearnGuidePage(mortgageProcessGuide);

export { metadata };
export default GuidePage;