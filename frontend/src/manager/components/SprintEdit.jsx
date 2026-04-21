import React, { useState, useEffect } from "react";
import { usePostSprintMutation } from "../../redux/manager/sprintApiSlice.js";
import { usePatchSprintMutation } from "../../redux/manager/sprintApiSlice.js";
import { useGetSprintsByProjectIdQuery } from "../../redux/manager/sprintApiSlice.js";
import { HeadingDescription } from "./HeadingDescription.jsx";
import { LeftDetails } from "./LeftDetails.jsx";
import { ShowList } from "./ShowList.jsx";
import { LeftBottomDiv } from "./LeftBottomDiv.jsx";
import { SprintRightDiv } from "./SprintRightDiv.jsx";
import { LuFileCode } from "react-icons/lu";
import { LuListTodo } from "react-icons/lu";
import { LuIterationCcw } from "react-icons/lu";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import "../css/SprintEdit.css";

export const SprintEdit = ({ currentProject, managerProjects }) => {
  const { projectId } = useParams();
  const [selectedOption, setSelectedOption] = useState("");
  const { data, isLoading, isError } = useGetSprintsByProjectIdQuery(
    projectId,
    { skip: !projectId },
  );
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

  const addSprintInputs = [
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
  console.log(data);
  useEffect(() => {
    if (currentProject?.id) {
      setSelectedOption(currentProject.id);
    }
  }, [currentProject]);
  return (
    <div className="sprint-edit">
      <HeadingDescription
        title={"Sprint"}
        description={"please kill bad people"}
        lastUpdated={"today"}
      />
      <div className="sprint-edit-body">
        <div className="sprint-left">
          <ShowList
            title={"Sprints"}
            buttonTxt={"Create Sprint"}
            array={data}
            useAddFunction={usePostSprintMutation}
            inputs={addSprintInputs}
            noListMessage={"No sprints for the selected project"}
            ProjectId={projectId}
          />
          <LeftBottomDiv
            title={"Projects"}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            projects={managerProjects}
          />
        </div>
        <div className="sprint-right">
          <SprintRightDiv />
        </div>
      </div>
    </div>
  );
};
