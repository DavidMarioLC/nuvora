export default function Bars({ small = false }: { small?: boolean }) {
  const values = [
    { height: 40, id: "jan" },
    { height: 57, id: "feb" },
    { height: 76, id: "mar" },
    { height: 52, id: "apr" },
    { height: 65, id: "may" },
    { height: 80, id: "jun" },
    { height: 69, id: "jul" },
    { height: 61, id: "aug" },
    { height: 57, id: "sep" },
    { height: 48, id: "oct" },
    { height: 43, id: "nov" },
    { height: 36, id: "dec" },
  ];
  return (
    <div
      aria-label="Revenue growth chart"
      className={`bar-chart ${small ? "small" : ""}`}
      role="img"
    >
      <div className="chart-lines" />
      {values.map(({ height, id }) => (
        <span key={id} style={{ height: `${height}%` }} />
      ))}
    </div>
  );
}
