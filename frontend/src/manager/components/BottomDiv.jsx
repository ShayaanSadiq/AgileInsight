import React, { useState } from "react";
import { LuFileCode } from "react-icons/lu";
import { LeftDetails } from "./LeftDetails";
import { LeftBottomDiv } from "./LeftBottomDiv";
import { ProjectRightDiv } from "./ProjectRightDiv";
import "../css/BottomDiv.css";

export const BottomDiv = ({ register }) => {
  const [selectedOption, setSelectedOption] = useState("1");
  return (
    <div className="bottom-div">
      <div className="left-div">
        <LeftDetails
          register={register}
          Icon={LuFileCode}
          title={"Project Details"}
          label1={"Project Name"}
          label2={"Project Description"}
          label3={"Start Date"}
          label4={"End Date"}
          status={"in progress"}
        />
        <LeftBottomDiv
          title={"Projects"}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      <div className="right-div">
        <ProjectRightDiv />
      </div>
    </div>
  );
};
