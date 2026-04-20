import React, { useEffect, useState } from "react";
import { LuFileCode } from "react-icons/lu";
import { LeftDetails } from "./LeftDetails";
import { LeftBottomDiv } from "./LeftBottomDiv";
import { ProjectRightDiv } from "./ProjectRightDiv";
import "../css/manager.editPage.bottom.css";

export const BottomDiv = ({
  managerProjects,
  currentProject,
  usePatchMutation,
  useGetUsersByProjectId,
  useSignupMember,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const inputs = [
    { name: "name", label: "Name", type: "text", placeholder: "type here" },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      placeholder: "type here",
    },
    {
      name: "startDate",
      label: "Start Date",
      type: "date",
      placeholder: "dd / mm / yyyy",
    },
    {
      name: "endDate",
      label: "End Date",
      type: "date",
      placeholder: "dd / mm / yyyy",
    },
  ];

  useEffect(() => {
    if (currentProject?.id) {
      setSelectedOption(currentProject.id);
    }
  }, [currentProject]);
  return (
    <div className="manager-projectEdit-bottom">
      <div className="manager-projectEdit-bottomLeft">
        {!currentProject && <p>Loading project details</p>}
        {currentProject && (
          <LeftDetails
            Icon={LuFileCode}
            title={"Project Details"}
            inputs={inputs}
            status={"in progress"}
            defaultProject={{
              name: currentProject.name,
              description: currentProject.description,
              startDate: currentProject.startDate,
              endDate: currentProject.endDate,
            }}
            usePatchMutation={usePatchMutation}
          />
        )}
        <LeftBottomDiv
          title={"Projects"}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          projects={managerProjects}
        />
      </div>
      <div className="manager-projectEdit-bottomRight">
        <ProjectRightDiv
          useGetUsersByProjectId={useGetUsersByProjectId}
          useSignupMember={useSignupMember}
        />
      </div>
    </div>
  );
};
