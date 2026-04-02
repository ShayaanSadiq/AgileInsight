import React from "react";
import { ProjectPageHeader } from "./ProjectPageHeader";
import { ProjectPageAnalyticsDiv } from "./ProjectPageAnalyticsDiv";
import "../css/ProjectPageMainDiv.css";

export const ProjectPageMainDiv = () => {
  return (
    <div className="project-page-main">
      <ProjectPageHeader />
      <ProjectPageAnalyticsDiv />
    </div>
  );
};
