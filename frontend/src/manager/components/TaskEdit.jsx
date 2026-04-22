import React, { useEffect, useState } from "react";
import { ShowList } from "./ShowList.jsx";
import { ShowProjects } from "./ShowProjects.jsx";
import { ShowDetails } from "./ShowDetails.jsx";
import { useGetTasksBySprintIdQuery } from "../../redux/manager/managerTasksApiSlice.js";
import { usePostTaskMutation } from "../../redux/manager/managerTasksApiSlice.js";
import { usePatchTaskMutation } from "../../redux/manager/managerTasksApiSlice.js";
import { LuListTodo } from "react-icons/lu";
import "../css/TaskEdit.css";

export const TaskEdit = ({ managerProjects, sprints, currentProject }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedTask, setSelectedTask] = useState("");
  const [selectedSprint, setSelectedSprint] = useState("");
  const { data, isLoading, isError } = useGetTasksBySprintIdQuery(
    selectedSprint,
    { skip: !selectedSprint },
  );
  const sprintValues = data?.find((sprint) => selectedSprint === sprint.id);
  console.log(data);
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
        <ShowList
          title={"Tasks"}
          buttonTxt={"Create Task"}
          array={data}
          sprints={sprints}
          useAddFunction={usePostTaskMutation}
          selectedOption={selectedTask}
          setSelectedOption={setSelectedTask}
          selectedSprint={selectedSprint}
          setSelectedSprint={setSelectedSprint}
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

      {/* Icon,
  title,
  status,
  inputs,
  defaultValues,
  usePatchMutation,
  projectId,
  sprintId, */}
      <ShowDetails
        Icon={LuListTodo}
        title={"Task Details"}
        inputs={inputs}
        defaultValues={{
          name: sprintValues?.name,
          description: sprintValues?.description,
          startDate: sprintValues?.startDate,
          endDate: sprintValues?.endDate,
          type: sprintValues?.type,
          priority: sprintValues?.priority,
        }}
        usePatchMutation={usePatchTaskMutation}
      />
    </div>
  );
};
