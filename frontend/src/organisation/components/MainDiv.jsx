import React from "react";
import { ProjectsDiv } from "./ProjectsDiv";
import { AnalyticsDiv } from "./AnalyticsDiv";
import "../css/MainDiv.css";

export const MainDiv = () => {
  return (
    <>
      <div className="projects-div">
        <h3>Projects</h3>
        <ProjectsDiv />
      </div>
      <div className="analytics-div">
        <AnalyticsDiv />
      </div>
    </>
  );
};
