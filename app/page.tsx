import BenefitsSection from "@/components/benefits-section";
import FeaturesSection from "@/components/features-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import JourneySection from "@/components/journey-section";
import PricingSection from "@/components/pricing-section";
import StatsSection from "@/components/stats-section";
import StoriesSection from "@/components/stories-section";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#features">
        Skip to content
      </a>
      <main>
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <StatsSection />
        <JourneySection />
        <PricingSection />
        <StoriesSection />
      </main>
      <Footer />
    </>
  );
}
