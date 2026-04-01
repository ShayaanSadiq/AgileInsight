import React from "react";
import { ProjectsDiv } from "./ProjectsDiv.jsx";
import { AnalyticsDiv } from "./AnalyticsDiv.jsx";
import "../css/HomePageMainDiv.css";

export const HomePageMainDiv = () => {
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
