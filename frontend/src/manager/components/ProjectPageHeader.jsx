import React from "react";
import "../css/ProjectPageHeader.css";

export const ProjectPageHeader = () => {
  return (
    <section className="project-page-first-section">
      <div className="project-page-header-options">
        <button className="project-page-header-options-button">Project</button>
        <button className="project-page-header-options-button">Sprint</button>
        <button className="project-page-header-options-button">Task</button>
      </div>
    </section>
  );
};
