import React from "react";
import { useGetProjectsByIdQuery } from "../../redux/organisation/projectApiSlice.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";
import "../css/ProjectsDiv.css";

export const ProjectsDiv = () => {
  const orgId = useSelector((state) => state.currOrg.id);
  const { data, isLoading, isError } = useGetProjectsByIdQuery(orgId, {
    skip: !orgId,
  });
  const navigate = useNavigate();
  const isProjects = data && !isLoading && !isError;

  const handleClick = (projecId) => {
    navigate(`/org/project/${projecId}`);
  };
  let counter = 0;
  return (
    <>
      {isProjects && (
        <table className="show-project-table">
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Description</th>
            <th>Start date</th>
            <th>End date</th>
            <th>Assigned to</th>
          </tr>
          {console.log(data)}
          {data?.map((project) => (
            <tr key={project.id}>
              <td>{++counter}</td>
              <td>{project.name}</td>
              <td>{project.description}</td>
              <td>{project.startDate}</td>
              <td>{project.endDate}</td>
              <td>{project.manager.email}</td>
              <td className="go-btn-td" onClick={() => handleClick(project.id)}>
                Go
                <MdOutlineArrowOutward />
              </td>
            </tr>
          ))}
        </table>
      )}
      {!isProjects && <span>Create a new project.</span>}
    </>
  );
};
