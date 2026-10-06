import Image from "next/image";

export default function TeamDashboard() {
  return (
    <div className="team-dashboard">
      <div className="dashboard-top">
        <div className="window-dots">•••</div>
        <span>All employees⌄</span>
      </div>
      <div className="completion-card">
        <div>
          <small>Profile</small>
          <strong>Completeness</strong>
          <div className="skeleton-line" />
        </div>
        <div className="progress-ring">
          70<span>%</span>
        </div>
      </div>
      {["Mouchine Bel", "Paul Froiss", "Imane Williams"].map((name, i) => (
        <div className="employee" key={name}>
          <div className={`employee-avatar avatar-${i}`}>
            <Image
              alt=""
              fill
              sizes="34px"
              src={i === 1 ? "/images/client.jpg" : "/images/hero.png"}
            />
          </div>
          <div>
            <strong>{name}</strong>
            <small>
              {
                ["Head of Marketing", "Product Manager", "Customer Experience"][
                  i
                ]
              }
            </small>
          </div>
          <span className="employee-status">Details</span>
        </div>
      ))}
      <div className="employee ghost-row">
        <div />
        <span />
        <span />
      </div>
    </div>
  );
}
