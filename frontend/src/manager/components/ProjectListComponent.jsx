import React from "react";
import { ProjectComponent } from "./ProjectComponent.jsx";
import { useGetProjectsByIdQuery } from "../../redux/manager/ProjectApiSlice.js";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../css/ProjectList.css";

export const ProjectListComponent = () => {
  const managerId = useSelector((state) => state.currManager.id);
  const { data, isLoading, isError } = useGetProjectsByIdQuery(managerId, {
    skip: !managerId,
  });
  const navigate = useNavigate();

  const handleClick = (projectId) => {
    navigate(`/manager/project/${projectId}`);
  };
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Start date</th>
          <th>End date</th>
          <th>Current sprint</th>
          <th>Expected sprints</th>
          <th></th>
        </tr>

        {data?.map((project) => (
          <tr key={project.id}>
            <ProjectComponent project={project} handleClick={handleClick} />
          </tr>
        ))}
      </table>
    </div>
  );
};
