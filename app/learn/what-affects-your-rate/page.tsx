import { createLearnGuidePage } from "@/components/marketing/LearnGuidePage";
import { whatAffectsRateGuide } from "@/lib/learnGuideContent";

const { metadata, GuidePage } = createLearnGuidePage(whatAffectsRateGuide);

export { metadata };
export default GuidePage;