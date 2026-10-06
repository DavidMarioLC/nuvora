import type { ReactNode } from "react";

export default function WorkflowCard({
  title,
  className,
  children,
}: {
  title: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <div className={`workflow-card ${className}`}>
      <h4>{title}</h4>
      {children}
    </div>
  );
}
