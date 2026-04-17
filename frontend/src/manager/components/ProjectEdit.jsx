import React from "react";
import { BottomDiv } from "./BottomDiv.jsx";
import { HeadingDescription } from "./HeadingDescription.jsx";

export const ProjectEdit = ({ projectId, projects }) => {
  return (
    <>
      <HeadingDescription
        title={"Project"}
        description={"please kill bad people"}
        lastUpdated={"today"}
      />
      <BottomDiv projectId={projectId} projects={projects} />
    </>
  );
};
