import { createLearnGuidePage } from "@/components/marketing/LearnGuidePage";
import { creditScoreGuide } from "@/lib/learnGuideContent";

const { metadata, GuidePage } = createLearnGuidePage(creditScoreGuide);

export { metadata };
export default GuidePage;