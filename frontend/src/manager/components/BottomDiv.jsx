import React, { useState } from "react";
import { LuFileCode } from "react-icons/lu";
import { LeftDetails } from "./LeftDetails";
import { LeftBottomDiv } from "./LeftBottomDiv";
import { ProjectRightDiv } from "./ProjectRightDiv";
import "../css/manager.editPage.bottom.css";

export const BottomDiv = ({ register }) => {
  const [selectedOption, setSelectedOption] = useState("1");
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
          register={register}
          Icon={LuFileCode}
          title={"Project Details"}
          inputs={inputs}
          status={"in progress"}
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
