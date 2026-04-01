import React from "react";
import "../css/ProjectComponent.css";

export const ProjectComponent = ({ project }) => {
  return (
    <>
      <td>
        <span>{project.name}</span>
        <p>{project.description}</p>
      </td>
      <td>{project.dueDate}</td>
      <td>{project.completed}</td>
      <td>
        <button>Go {project.link}</button>
      </td>
    </>
  );
};
