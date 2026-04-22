import React, { useEffect, useState } from "react";
import { ShowList } from "./ShowList.jsx";
import { ShowProjects } from "./ShowProjects.jsx";
import { ShowDetails } from "./ShowDetails.jsx";
import { useGetTasksBySprintIdQuery } from "../../redux/manager/managerTasksApiSlice.js";
import { usePostTaskMutation } from "../../redux/manager/managerTasksApiSlice.js";
import { usePatchTaskMutation } from "../../redux/manager/managerTasksApiSlice.js";
import { useParams } from "react-router-dom";
import { LuListTodo } from "react-icons/lu";
import "../css/TaskEdit.css";

export const TaskEdit = ({
  managerProjects,
  sprints,
  memebers,
  currentProject,
}) => {
  const { projectId } = useParams();
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedTask, setSelectedTask] = useState("");
  const [selectedSprint, setSelectedSprint] = useState("");
  const { data, isLoading, isError } = useGetTasksBySprintIdQuery(
    selectedSprint,
    { skip: !selectedSprint },
  );
  const taskValues = data?.find((task) => selectedTask === task.id);
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

  const createTaskInputs = [
    { name: "name", label: "Name", type: "text", placeholder: "type here" },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      placeholder: "type here",
    },
    {
      name: "type",
      label: "Type",
      type: "select",
      placeholder: "Select Type",
      options: ["BUG", "IMPROVEMENT", "FEATURE"],
    },
    {
      name: "assignedTo",
      label: "Assign Member",
      type: "select",
      placeholder: "Select Member",
      options: memebers,
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
    {
      name: "priority",
      label: "Priority",
      type: "text",
      placeholder: "HIGH MEDIUM LOW",
    },
    {
      name: "sprintId",
      label: "Sprint",
      type: "select",
      placeholder: "Select Sprint",
      options: sprints,
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
          inputs={createTaskInputs}
          projectId={projectId}
          noListMessage={"Create some tasks"}
        />
        <ShowProjects
          title={"Projects"}
          projects={managerProjects}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>

      <ShowDetails
        Icon={LuListTodo}
        title={"Task Details"}
        inputs={inputs}
        defaultValues={{
          name: taskValues?.name,
          description: taskValues?.description,
          startDate: taskValues?.startDate,
          endDate: taskValues?.endDate,
          type: taskValues?.type,
          priority: taskValues?.priority,
        }}
        usePatchMutation={usePatchTaskMutation}
        taskId={taskValues?.id}
      />
    </div>
  );
};
