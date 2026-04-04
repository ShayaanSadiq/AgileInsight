import React, { useState } from "react";
import { ProjectPageHeader } from "./ProjectPageHeader";
import { ProjectPageAnalyticsDiv } from "./ProjectPageAnalyticsDiv";
import "../css/ProjectPageMainDiv.css";

export const ProjectPageMainDiv = () => {
  const [activeOption, setActiveOption] = useState("project");
  return (
    <div className="project-page-main">
      <ProjectPageHeader setActiveOption={setActiveOption} />
      <ProjectPageAnalyticsDiv activeOption={activeOption} />
    </div>
  );
};
