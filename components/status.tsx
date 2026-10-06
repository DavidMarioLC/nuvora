export default function Status({
  color,
}: {
  color: "red" | "amber" | "green";
}) {
  return (
    <span aria-hidden="true" className={`workflow-status status-${color}`} />
  );
}
