import Icon from "./icon";
import PayrollVisual from "./payroll-visual";
import SectionHeading from "./section-heading";
import TeamDashboard from "./team-dashboard";

export default function BenefitsSection() {
  return (
    <section className="benefits section container" id="benefits">
      <SectionHeading title="Benefits That Make a Real Difference">
        Simplify your daily workflow with powerful tools designed to save you
        time and keep
        <br className="desktop-break" /> your business running smoothly.
      </SectionHeading>
      <div className="benefit-grid">
        <article className="benefit-card payroll-card">
          <div className="benefit-copy">
            <span className="round-icon">
              <Icon name="phone" />
            </span>
            <h3>Zero Payroll Errors</h3>
            <p>
              Create and send professional invoices in seconds, with automatic
              payment reminders.
            </p>
          </div>
          <PayrollVisual />
        </article>
        <article className="benefit-card">
          <div className="benefit-copy">
            <span className="round-icon">
              <Icon name="chart" />
            </span>
            <h3>Increase HR Efficiency</h3>
            <p>
              Gain instant insights into your revenue, expenses, and cash flow,
              celebrating milestones along the way.
            </p>
          </div>
          <div className="dashboard-wrap">
            <TeamDashboard />
          </div>
        </article>
      </div>
    </section>
  );
}
