import React from "react";
import "../css/ProjectPageHeader.css";

export const ProjectPageHeader = ({ activeOption, setActiveOption }) => {
  return (
    <section className="project-page-first-section">
      <div className="project-page-header-options">
        <button
          onClick={() => setActiveOption("project")}
          className={`project-page-header-options-button ${activeOption === "project" ? "active" : ""}`}
        >
          Project
        </button>
        <button
          onClick={() => setActiveOption("sprint")}
          className={`project-page-header-options-button ${activeOption === "sprint" ? "active" : ""}`}
        >
          Sprint
        </button>
        <button
          onClick={() => setActiveOption("task")}
          className={`project-page-header-options-button ${activeOption === "task" ? "active" : ""}`}
        >
          Task
        </button>
      </div>
    </section>
  );
};
