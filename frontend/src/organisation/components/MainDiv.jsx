import React from "react";
import { CreateProjectDiv } from "./CreateProjectDiv";
import { ProjectsDiv } from "./ProjectsDiv";
import { AnalyticsDiv } from "./AnalyticsDiv";
import "../css/MainDiv.css";

export const MainDiv = () => {
  return (
    <>
      <div className="create-project-div">
        <CreateProjectDiv orgName={"Kill Muqeet"} />
      </div>
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
