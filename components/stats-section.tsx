import MetricCounter from "./metric-counter";

export default function StatsSection() {
  return (
    <section className="stats">
      <div className="stats-grid container">
        <div>
          <MetricCounter smallSuffix suffix="+" value={50} />
          <p>
            In 48 countries, we work
            <br />
            globally to help our clients.
          </p>
        </div>
        <div>
          <MetricCounter decimal delay={0.08} suffix="M" value={2} />
          <p>
            Active users in the
            <br />
            world.
          </p>
        </div>
        <div>
          <MetricCounter delay={0.16} smallSuffix suffix="%" value={85} />
          <p>
            We started with an ambitious mindset
            <br />
            and still embrace the challenge.
          </p>
        </div>
      </div>
    </section>
  );
}
