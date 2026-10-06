import Image from "next/image";
import Status from "./status";
import WorkflowCard from "./workflow-card";

export default function IncidentCard() {
  return (
    <WorkflowCard className="workflow-incident" title="Incident">
      <div className="workflow-detail">
        <Image
          alt=""
          className="workflow-avatar"
          height={38}
          src="/images/hero.png"
          width={38}
        />
        <div className="workflow-description">
          <strong>Property Damage</strong>
          <p>
            01/07/2024 | 09:15 AM <Status color="red" />
          </p>
        </div>
      </div>
    </WorkflowCard>
  );
}
