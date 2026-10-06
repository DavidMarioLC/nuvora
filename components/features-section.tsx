import LineChart from "./line-chart";
import RevenueChart from "./revenue-chart";
import SectionHeading from "./section-heading";

export default function FeaturesSection() {
  return (
    <section className="features section container" id="features">
      <SectionHeading title="Comprehensive Marketing & Growth Solutions">
        Unlock the full potential of your workflow with our smart, efficient,
        and user-friendly SaaS
        <br className="desktop-break" /> tools, and save you hours every day.
      </SectionHeading>
      <div className="feature-grid">
        <article className="feature-card integration-card">
          <div className="integration-visual">
            <RevenueChart />
          </div>
          <div className="feature-copy">
            <h3>Seamless Integrations</h3>
            <p>
              Automation doesn’t have to be complicated. Connect your favorite
              tools and build intelligent workflows that handle repetitive tasks
              with precision and efficiency.
            </p>
            <a
              aria-label="Learn More about Seamless Integrations"
              className="button button-purple button-small"
              href="#journey"
            >
              Learn More
            </a>
          </div>
        </article>
        <article className="feature-card collaboration-card">
          <div className="collaboration-visual">
            <div className="mini-toolbar">
              <span className="mini-app-icon">▣</span>
              <span>
                All teams<small>Workspace</small>
              </span>
              <div className="mini-tabs">
                My insights
                <div />
              </div>
            </div>
            <RevenueChart compact />
          </div>
          <div className="feature-copy">
            <h3>Real-Time Collaboration</h3>
            <p>
              Bring your people, ideas, and projects together. Great work
              happens when everyone is connected.
            </p>
            <a
              aria-label="Learn More about Real-Time Collaboration"
              className="text-link"
              href="#benefits"
            >
              Learn More
            </a>
          </div>
        </article>
        <article className="feature-card security-card">
          <LineChart />
          <div className="feature-copy">
            <h3>Enterprise-Grade Security</h3>
            <p>
              Your business deserves peace of mind. Keep every connection and
              conversation protected.
            </p>
            <a
              aria-label="Learn More about Enterprise-Grade Security"
              className="text-link"
              href="#benefits"
            >
              Learn More
            </a>
          </div>
        </article>
        <article className="feature-card scale-card">
          <div className="scale-visual">
            <div className="stack-chart">
              {[46, 71, 61, 87, 55].map((height) => (
                <span key={height} style={{ height: `${height}%` }} />
              ))}
            </div>
            <div className="integration-popover">
              <strong>Gmail</strong>
              <small>Overview · October 2026</small>
              {["Design", "Marketing", "Sales", "IT", "Engineering"].map(
                (name, i) => (
                  <div key={name}>
                    <span>
                      <i
                        style={{
                          background: [
                            "#fa9c7d",
                            "#e5c356",
                            "#9a83ef",
                            "#b5d8ef",
                            "#c79ced",
                          ][i],
                        }}
                      />
                      {name}
                    </span>
                    <b>{[87, 215, 280, 136, 432][i]}</b>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="feature-copy">
            <h3>Scalable & Customizable</h3>
            <p>
              A platform that grows with you. Make every workflow work your way.
            </p>
            <ul className="mini-checks">
              <li>Boost productivity</li>
              <li>Scale effortlessly</li>
              <li>Cost-effective solutions</li>
            </ul>
            <a
              aria-label="Learn More about Scalable & Customizable"
              className="button button-purple button-small"
              href="#pricing"
            >
              Learn More
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
