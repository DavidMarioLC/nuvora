export default function LineChart() {
  return (
    <div className="line-chart">
      <div className="mini-chart-heading">
        <span>Growth overview</span>
        <span>•••</span>
      </div>
      <div className="graph-grid" />
      <svg
        aria-label="Campaign performance chart"
        fill="none"
        role="img"
        viewBox="0 0 280 105"
      >
        <defs>
          <linearGradient id="line-gradient">
            <stop stopColor="#a0e4e2" />
            <stop offset=".5" stopColor="#ac93e9" />
            <stop offset="1" stopColor="#f0b2ed" />
          </linearGradient>
        </defs>
        <path
          d="M4 54C17 54 18 76 30 76S46 43 59 45s14 31 28 23 12-32 27-31 15 26 30 29 17-22 32-15 12 25 27 19 17-30 30-34 15 5 25-6 8-21 18-27"
          stroke="url(#line-gradient)"
          strokeWidth="3"
        />
        <path d="M141 23v61" stroke="#b9b2c8" strokeDasharray="3 3" />
        <rect fill="#20132f" height="20" rx="5" width="40" x="122" y="9" />
        <text fill="white" fontSize="10" textAnchor="middle" x="142" y="23">
          +28%
        </text>
      </svg>
      <div className="graph-months">
        <span>Jan</span>
        <span>Mar</span>
        <span>Jun</span>
        <span>Sep</span>
      </div>
    </div>
  );
}
