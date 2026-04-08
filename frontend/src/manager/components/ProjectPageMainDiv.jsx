import React, { useState } from "react";
import { ProjectPageHeader } from "./ProjectPageHeader";
import { ProjectOverview } from "./ProjectOverview";
import { EditBox } from "./EditBox.jsx";
import { AnalyticsBox } from "./AnalyticsBox.jsx";
import "../css/ProjectPageMainDiv.css";

export const ProjectPageMainDiv = () => {
  const [activeOption, setActiveOption] = useState("project");
  return (
    <div className="project-page-main">
      <ProjectPageHeader
        activeOption={activeOption}
        setActiveOption={setActiveOption}
      />
      <div className="project-page-lowerBody">
        <ProjectOverview activeOption={activeOption} />
        <div className="rightSide-content">
          <EditBox />
          <AnalyticsBox activeOption={activeOption} />
        </div>
      </div>
    </div>
  );
};
