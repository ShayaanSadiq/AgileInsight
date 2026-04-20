import React from "react";
import { ProjectsDiv } from "./ProjectsDiv";
import { AnalyticsDiv } from "./AnalyticsDiv";
import "../css/MainDiv.css";

export const MainDiv = ({ projects }) => {
  return (
    <div className="orgHome-main-div">
      <div className="projects-div">
        <h4>Projects</h4>
        <ProjectsDiv data={projects} />
      </div>
      <div className="analytics-div">
        <AnalyticsDiv />
      </div>
    </div>
  );
};
