import React, { useState } from "react";
import { LuFileCode } from "react-icons/lu";
import { LeftDetails } from "./LeftDetails";
import { LeftBottomDiv } from "./LeftBottomDiv";
import { ProjectRightDiv } from "./ProjectRightDiv";
import "../css/manager.editPage.bottom.css";

export const BottomDiv = ({ projectId, projects }) => {
  const [selectedOption, setSelectedOption] = useState("1");
  const defaultProject = projects?.filter(
    (project) => project.id === projectId,
  );
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
  return (
    <div className="manager-projectEdit-bottom">
      <div className="manager-projectEdit-bottomLeft">
        <LeftDetails
          Icon={LuFileCode}
          title={"Project Details"}
          inputs={inputs}
          status={"in progress"}
          defaultProject={{
            name: defaultProject?.[0].name,
            description: defaultProject?.[0].description,
            startDate: defaultProject?.[0].startDate,
            endDate: defaultProject?.[0].endDate,
          }}
        />
        <LeftBottomDiv
          title={"Projects"}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      <div className="manager-projectEdit-bottomRight">
        <ProjectRightDiv />
      </div>
    </div>
  );
};
