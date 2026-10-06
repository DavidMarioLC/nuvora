import Image from "next/image";
import Status from "./status";
import WorkflowCard from "./workflow-card";

export default function PolicyCard() {
  return (
    <WorkflowCard className="workflow-policy" title="Enrol Policy">
      <div className="workflow-detail">
        <Image
          alt=""
          className="workflow-avatar"
          height={38}
          src="/images/client.jpg"
          width={38}
        />
        <div className="workflow-description">
          <strong>Alcohol and Drugs</strong>
          <p>
            Due date: 01/04/2025 <Status color="red" />
          </p>
        </div>
      </div>
    </WorkflowCard>
  );
}
