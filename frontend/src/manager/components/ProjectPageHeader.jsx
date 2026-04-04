import React from "react";
import "../css/ProjectPageHeader.css";

export const ProjectPageHeader = ({ setActiveOption }) => {
  return (
    <section className="project-page-first-section">
      <div className="project-page-header-options">
        <button
          onClick={() => setActiveOption("project")}
          className="project-page-header-options-button"
        >
          Project
        </button>
        <button
          onClick={() => setActiveOption("sprint")}
          className="project-page-header-options-button"
        >
          Sprint
        </button>
        <button
          onClick={() => setActiveOption("task")}
          className="project-page-header-options-button"
        >
          Task
        </button>
      </div>
    </section>
  );
};
