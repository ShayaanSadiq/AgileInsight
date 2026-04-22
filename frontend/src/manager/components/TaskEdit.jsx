import React, { useEffect, useState } from "react";
import { ShowList } from "./ShowList.jsx";
import { ShowProjects } from "./ShowProjects.jsx";
import { usePostTaskMutation } from "../../redux/manager/managerTasksApiSlice.js";
import "../css/TaskEdit.css";

export const TaskEdit = ({
  managerProjects = [
    { id: 1, name: "kill muqeet", description: "please someone kill muqeet" },
    {
      id: 2,
      name: "kill muqeet 1",
      description: "please someone kill muqeet 1",
    },
  ],
  tasks = [
    { name: "kill muqeet", description: "please someone kill muqeet" },
    { name: "kill muqeet 1", description: "please someone kill muqeet 1" },
  ],
  currentProject,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedTask, setSelectedTask] = useState("");

  const inputs = [
    { name: "name", label: "Name", type: "text", placeholder: "type here" },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      placeholder: "type here",
    },
    { name: "type", label: "Type", type: "text", placeholder: "type here" },
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
    {
      name: "priority",
      label: "Priority",
      type: "text",
      placeholder: "type here",
    },
  ];
  useEffect(() => {
    if (currentProject) {
      setSelectedOption(currentProject.id);
    }
  }, [currentProject]);
  return (
    <div className="task-edit-body">
      <div className="task-left-div">
        {/* 
  title,
  buttonTxt,
  array,
  useAddFunction,
  selectedOption,
  setSelectedOption,
  inputs,
  noListMessage,
  ProjectId,
  SprintId, */}

        <ShowList
          title={"Tasks"}
          buttonTxt={"Create Task"}
          array={[]}
          useAddFunction={usePostTaskMutation}
          selectedOption={selectedTask}
          setSelectedOption={setSelectedTask}
          inputs={inputs}
          noListMessage={"Create some tasks"}
        />
        <ShowProjects
          title={"Projects"}
          projects={managerProjects}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      <div className="task-right-div">hello</div>
    </div>
  );
};
