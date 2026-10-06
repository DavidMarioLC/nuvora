import Image from "next/image";
import CourseCard from "./course-card";
import IncidentCard from "./incident-card";
import PolicyCard from "./policy-card";
import RecordCard from "./record-card";

export default function PayrollVisual() {
  return (
    <div aria-hidden="true" className="payroll-artwork">
      <div aria-hidden="true" className="payroll-backdrop" />
      <PolicyCard />
      <IncidentCard />
      <div className="payroll-person">
        <Image
          alt="Woman in a charcoal sweater with her arms folded, looking to the right"
          fill
          sizes="(max-width: 650px) 60vw, 360px"
          src="/images/payroll-woman.png"
        />
      </div>
      <RecordCard />
      <CourseCard />
    </div>
  );
}
