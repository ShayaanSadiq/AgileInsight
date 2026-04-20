import React from "react";
import { BottomDiv } from "./BottomDiv.jsx";
import { HeadingDescription } from "./HeadingDescription.jsx";

export const ProjectEdit = ({
  managerProjects,
  currentProject,
  usePatchMutation,
  useGetUsersByProjectId,
  useSignupMember,
}) => {
  return (
    <>
      <HeadingDescription
        title={"Project"}
        description={"please kill bad people"}
        lastUpdated={"today"}
      />
      <BottomDiv
        managerProjects={managerProjects}
        currentProject={currentProject}
        usePatchMutation={usePatchMutation}
        useGetUsersByProjectId={useGetUsersByProjectId}
        useSignupMember={useSignupMember}
      />
    </>
  );
};
