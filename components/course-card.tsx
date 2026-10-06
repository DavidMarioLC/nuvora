import Image from "next/image";
import Status from "./status";
import WorkflowCard from "./workflow-card";

export default function CourseCard() {
  return (
    <WorkflowCard className="workflow-course" title="Enrol Course">
      <div className="workflow-detail">
        <Image
          alt=""
          className="workflow-course-photo"
          height={57}
          src="/images/client.jpg"
          width={92}
        />
        <div className="workflow-description">
          <strong>Sexual Harassment</strong>
          <p>
            15/04/2025 | 26/05/2025 <Status color="green" />
          </p>
          <span className="workflow-assignee">Joseph Benham</span>
        </div>
      </div>
    </WorkflowCard>
  );
}
