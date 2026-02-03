import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import ExperiencesSection from "@/components/home/ExperiencesSection";
import StandardSection from "@/components/home/StandardSection";
import WhyAbhimaSection from "@/components/home/WhyAbhimaSection";
import DestinationsSection from "@/components/home/DestinationsSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ExperiencesSection />
      <StandardSection />
      <WhyAbhimaSection />
      <DestinationsSection />
      <CTASection />
    </>
  );
}
