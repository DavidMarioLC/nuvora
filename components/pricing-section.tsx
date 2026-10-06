import Pricing from "./pricing";
import SectionHeading from "./section-heading";

export default function PricingSection() {
  return (
    <section className="pricing-section section container" id="pricing">
      <SectionHeading title="Choose your plan">
        14 days unlimited free trial. No contract or credit card required.
      </SectionHeading>
      <Pricing />
    </section>
  );
}
