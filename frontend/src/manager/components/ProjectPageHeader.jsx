import React from "react";
import "../css/ProjectPageHeader.css";

export const ProjectPageHeader = () => {
  const analytics = {
    tasksCompleted: 5,
    totalTasks: 10,
    percentageProjectCompleted: "50%",
    deadLine: "2030",
  };
  return (
    <>
      <section className="project-page-first-section">
        <div className="project-page-box">
          Tasks completed: {analytics.tasksCompleted}
        </div>
        <div className="project-page-box">
          Project completed: {analytics.percentageProjectCompleted}
        </div>
        <div className="project-page-box">Deadline: {analytics.deadLine}</div>
        <div className="project-page-box">what more?</div>
        <div className="project-page-box">what more??</div>
      </section>
    </>
  );
};
