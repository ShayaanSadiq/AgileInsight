import React from "react";
import { BottomDiv } from "./BottomDiv.jsx";

export const ProjectEdit = ({
  managerProjects,
  currentProject,
  usePatchMutation,
  useSignupMember,
  members,
}) => {
  return (
    <BottomDiv
      managerProjects={managerProjects}
      currentProject={currentProject}
      usePatchMutation={usePatchMutation}
      useSignupMember={useSignupMember}
      members={members}
    />
  );
};
