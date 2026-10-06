import SectionHeading from "./section-heading";
import Stories from "./stories";

export default function StoriesSection() {
  return (
    <section className="stories-section section container" id="stories">
      <SectionHeading title="Success Stories From Our Clients">
        Real people. Meaningful progress. A little inspiration for your next
        chapter.
      </SectionHeading>
      <Stories />
    </section>
  );
}
