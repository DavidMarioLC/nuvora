export default function Bars({ small = false }: { small?: boolean }) {
  const values = [40, 57, 76, 52, 65, 80, 69, 61, 57, 48, 43, 36];
  return (
    <div
      aria-label="Revenue growth chart"
      className={`bar-chart ${small ? "small" : ""}`}
    >
      <div className="chart-lines" />
      {values.map((height, index) => (
        <span key={`bar-${index}-${height}`} style={{ height: `${height}%` }} />
      ))}
    </div>
  );
}
