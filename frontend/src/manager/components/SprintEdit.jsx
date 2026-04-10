import React, { useState } from "react";
import { HeadingDescription } from "./HeadingDescription.jsx";
import { LeftDetails } from "./LeftDetails.jsx";
import { LeftBottomDiv } from "./LeftBottomDiv.jsx";
import { SprintRightDiv } from "./SprintRightDiv.jsx";
import { LuFileCode } from "react-icons/lu";
import { LuListTodo } from "react-icons/lu";
import { LuIterationCcw } from "react-icons/lu";
import { useForm } from "react-hook-form";
import "../css/SprintEdit.css";

export const SprintEdit = () => {
  const [selectedSprint, setSelectedSprint] = useState("1");
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "kill muqeet",
      description: "Please kill muqeet",
      startDate: "12-04-2026",
      endDate: "15-04-2026",
    },
  });
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
    <div className="sprint-edit">
      <HeadingDescription
        title={"Sprint"}
        description={"please kill bad people"}
        lastUpdated={"today"}
      />
      <div className="sprint-edit-body">
        <div className="sprint-left">
          <LeftDetails
            Icon={LuIterationCcw}
            register={register}
            title={"Sprint Details"}
            inputs={inputs}
            status={"in progress"}
          />
          <LeftBottomDiv
            title={"Sprints"}
            selectedOption={selectedSprint}
            setSelectedOption={setSelectedSprint}
          />
        </div>
        <div className="sprint-right">
          <SprintRightDiv />
        </div>
      </div>
    </div>
  );
};
