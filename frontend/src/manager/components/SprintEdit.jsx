import React, { useState, useEffect } from "react";
import { usePostSprintMutation } from "../../redux/manager/sprintApiSlice.js";
import { usePatchSprintMutation } from "../../redux/manager/sprintApiSlice.js";
import { useGetSprintsByProjectIdQuery } from "../../redux/manager/sprintApiSlice.js";
import { HeadingDescription } from "./HeadingDescription.jsx";
import { ShowDetails } from "./ShowDetails.jsx";
import { ShowList } from "./ShowList.jsx";
import { ShowProjects } from "./ShowProjects.jsx";
import { LuFileCode } from "react-icons/lu";
import { LuListTodo } from "react-icons/lu";
import { LuIterationCcw } from "react-icons/lu";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import "../css/SprintEdit.css";

export const SprintEdit = ({ currentProject, managerProjects }) => {
  const { projectId } = useParams();
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedSprint, setSelectedSprint] = useState("");
  const [currSprint, setCurrSprint] = useState(null);
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
  useEffect(() => {
    if (currentProject?.id) {
      setSelectedOption(currentProject.id);
    }
    if (data) {
      setCurrSprint(data.find((sprint) => selectedSprint === sprint.id));
    }
  }, [data, selectedSprint, currentProject]);
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
            selectedOption={selectedSprint}
            setSelectedOption={setSelectedSprint}
            inputs={addSprintInputs}
            noListMessage={"No sprints for the selected project"}
            ProjectId={projectId}
          />
          <ShowProjects
            title={"Projects"}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            projects={managerProjects}
          />
        </div>
        <div className="sprint-right">
          <ShowDetails
            Icon={LuIterationCcw}
            title={"Sprint Details"}
            inputs={inputs}
            defaultValues={{
              name: currSprint?.name,
              description: currSprint?.description,
              startDate: currSprint?.startDate,
              endDate: currSprint?.endDate,
            }}
            sprintId={currSprint?.id}
            usePatchMutation={usePatchSprintMutation}
          />
        </div>
      </div>
    </div>
  );
};
