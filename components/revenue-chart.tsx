import Bars from "./bars";

export default function RevenueChart({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <div className={`revenue-chart ${compact ? "compact" : ""}`}>
      <div className="chart-top">
        <span>
          <strong>$50,000</strong>
          <small> Last 12 months</small>
        </span>
        <span className="chart-growth">↗ 24.8%</span>
      </div>
      <div className="chart-label-line" />
      <Bars small={compact} />
      {!compact && (
        <div className="donut-card">
          <div className="donut" />
          <div className="donut-key">
            <i />
            <i />
            <i />
          </div>
          <div className="sales-tooltip">
            <span>
              <i /> Sales & Marketing
            </span>
            <strong>$32,573</strong>
          </div>
        </div>
      )}
    </div>
  );
}
