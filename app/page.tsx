import HeroSection from "@/components/HeroSection";
import ValueBlocks from "@/components/ValueBlocks";
import ProblemSolution from "@/components/ProblemSolution";
import HowDamNgWorks from "@/components/HowDamNgWorks";
import FeatureHighlights from "@/components/FeatureHighlights";
import BuiltForTeams from "@/components/BuiltForTeams";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQsection";
import CTASection from "@/components/CTASection";

const page = () => {
  return (
    <main>
      <HeroSection />
      <ValueBlocks />
      <ProblemSolution />
      <HowDamNgWorks />
      <FeatureHighlights />
      <BuiltForTeams />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </main>
  );
};

export default page;
