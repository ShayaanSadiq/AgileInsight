import React from "react";
import { ProjectOverview } from "./ProjectOverview";
import { EditBox } from "./EditBox.jsx";
import { AnalyticsBox } from "./AnalyticsBox.jsx";
import "../css/ProjectPageMainDiv.css";

export const ProjectPageMainDiv = ({ projectId, project }) => {
  return (
    <div className="project-page-main">
      <div className="project-page-lowerBody">
        <ProjectOverview project={project} />
        <div className="rightSide-content">
          <EditBox projectId={projectId} project={project} />
          <AnalyticsBox />
        </div>
      </div>
    </div>
  );
};
