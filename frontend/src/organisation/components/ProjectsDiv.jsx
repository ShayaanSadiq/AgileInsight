import React from "react";
import { useGetProjectsByIdQuery } from "../../redux/organisation/projectApiSlice.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../css/ProjectsDiv.css";

export const ProjectsDiv = () => {
  const orgId = useSelector((state) => state.currOrg.id);
  const { data, isLoading, isError } = useGetProjectsByIdQuery(orgId, {
    skip: !orgId,
  });
  const navigate = useNavigate();
  const isProjects = data && !isLoading && !isError;

  let counter = 0;
  return (
    <>
      {isProjects && (
        <table className="show-project-table">
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Assigned to</th>
            <th>Priority</th>
          </tr>
          {console.log(data)}
          {data?.map((project) => (
            <tr key={project.id}>
              <td>{++counter}</td>
              <td>{project.name}</td>
              <td>{project.description}</td>
              <td>{project.status}</td>
              <td>{project.assignedTo}</td>
              <td>{project.priority}</td>
            </tr>
          ))}
        </table>
      )}
      {!isProjects && <span>Create a new project.</span>}
    </>
  );
};
