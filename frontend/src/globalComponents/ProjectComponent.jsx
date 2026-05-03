import React from "react";
import "./css/ProjectComponent.css";

export const ProjectComponent = ({ project, handleClick, isOrganisation }) => {
  return (
    <>
      {!isOrganisation && (
        <>
          <td>{project.name || "Set on edit page."}</td>
          <td>{project.description || "Set on edit page."}</td>
          <td>{project.startDate || "Set on edit page."}</td>
          <td>{project.endDate || "Set on edit page."}</td>
          <td>{project.currentSprintNumber || "Set on edit page."}</td>
          <td>{project.expectedSprints || "Set on edit page."}</td>
          <td className="project-go-td" onClick={() => handleClick(project.id)}>
            Go
          </td>
        </>
      )}

      {isOrganisation && (
        <>
          <td>{project.name || "Add name"}</td>
          <td>{project.description || "Add description"}</td>
          <td>{project.startDate || "Add start date"}</td>
          <td>{project.endDate || "Add end date"}</td>
          <td>{project.manager?.email || "Add assigned to"}</td>
          <td>{project.status || "Set on edit page."}</td>
          <td>{project.expectedSprints || "Set on edit page."}</td>
          <td className="project-go-td" onClick={() => handleClick(project.id)}>
            Go
          </td>
        </>
      )}
    </>
  );
};
