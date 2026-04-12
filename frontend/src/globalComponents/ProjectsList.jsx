import React from "react";
import { ProjectComponent } from "./ProjectComponent.jsx";
import { useNavigate } from "react-router-dom";
import "./css/ProjectsList.css";

export const ProjectsList = ({
  tableHeadings,
  projects,
  navigationLink,
  isOrganisation,
}) => {
  const navigate = useNavigate();

  const handleClick = (projectId) => {
    navigate(`/${navigationLink}/${projectId}`);
  };
  let count = 0;
  return (
    <div className="project-list-div">
      <table>
        <thead>
          <tr className="th-row">
            {tableHeadings.map((tableHeading) => (
              <th key={tableHeading}>{tableHeading}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {projects?.map((project) => {
            const isOdd = count % 2 !== 0;
            count++;
            return (
              <tr className={`${isOdd ? "odd-row" : ""}`} key={project.id}>
                <ProjectComponent
                  project={project}
                  handleClick={handleClick}
                  isOrganisation={isOrganisation}
                />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
