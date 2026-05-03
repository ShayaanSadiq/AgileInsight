import React, { useEffect, useState } from "react";
import { LuFileCode } from "react-icons/lu";
import { ShowDetails } from "./ShowDetails.jsx";
import { ShowProjects } from "./ShowProjects";
import { ProjectRightDiv } from "./ProjectRightDiv";
import { useParams } from "react-router-dom";
import "../css/manager.editPage.bottom.css";

export const BottomDiv = ({
  managerProjects,
  currentProject,
  usePatchMutation,
  useSignupMember,
  members,
}) => {
  const { projectId } = useParams();
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
          <ShowDetails
            Icon={LuFileCode}
            title={"Project Details"}
            inputs={inputs}
            status={"in progress"}
            defaultValues={{
              name: currentProject.name,
              description: currentProject.description,
              startDate: currentProject.startDate,
              endDate: currentProject.endDate,
            }}
            usePatchMutation={usePatchMutation}
            projectId={projectId}
          />
        )}
        <ShowProjects
          title={"Projects"}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          projects={managerProjects}
        />
      </div>
      <div className="manager-projectEdit-bottomRight">
        <ProjectRightDiv members={members} useSignupMember={useSignupMember} />
      </div>
    </div>
  );
};
