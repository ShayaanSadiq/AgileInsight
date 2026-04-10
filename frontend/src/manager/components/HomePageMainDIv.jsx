import React from "react";
import { ProjectsDiv } from "./ProjectsDiv.jsx";
import { AnalyticsDiv } from "./AnalyticsDiv.jsx";
import "../css/manager.homePage.main.css";

export const HomePageMainDiv = () => {
  return (
    <div className="manager-home-page-main">
      <div className="manager-home-projects-div">
        <h3>Projects</h3>
        <ProjectsDiv />
      </div>
      <div className="manager-home-analytics-div">
        <AnalyticsDiv />
      </div>
    </div>
  );
};
