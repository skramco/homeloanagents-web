import { createLearnGuidePage } from "@/components/marketing/LearnGuidePage";
import { affordGuide } from "@/lib/learnGuideContent";

const { metadata, GuidePage } = createLearnGuidePage(affordGuide);

export { metadata };
export default GuidePage;