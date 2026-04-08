import React from "react";
import "../css/ProjectComponent.css";

export const ProjectComponent = ({ project, handleClick }) => {
  return (
    <>
      <td>{project.name}</td>
      <td>{project.description}</td>
      <td>{project.startDate}</td>
      <td>{project.endDate}</td>
      <td>{project.currentSprintNumber}</td>
      <td>{project.expectedSprints}</td>
      <td className="project-go-td" onClick={() => handleClick(project.id)}>
        Go
      </td>
    </>
  );
};
