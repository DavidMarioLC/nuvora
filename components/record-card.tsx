import Status from "./status";
import WorkflowCard from "./workflow-card";

export default function RecordCard() {
  return (
    <WorkflowCard className="workflow-record" title="Record">
      <div className="workflow-description">
        <strong>Payroll Information</strong>
        <p>
          Compensation and Benefits <Status color="amber" />
        </p>
      </div>
    </WorkflowCard>
  );
}
