import React from "react";
import "../css/ProjectsDiv.css";

export const ProjectsDiv = () => {
  const isProjects = true;
  const projects = [
    {
      id: 1,
      name: "Kill muqeet",
      description: "Free muqeet from world tensions",
      status: "to-do",
      assignedTo: "Killer Shayaan",
      priority: "Highest",
    },
    {
      id: 2,
      name: "Kill muqeet2",
      description: "Free muqeet from world tensions2",
      status: "to-do",
      assignedTo: "Killer Shayaan2",
      priority: "Highest",
    },
    {
      id: 3,
      name: "Kill muqeet2",
      description: "Free muqeet from world tensions2",
      status: "to-do",
      assignedTo: "Killer Shayaan2",
      priority: "Highest",
    },
    {
      id: 4,
      name: "Kill muqeet2",
      description: "Free muqeet from world tensions2",
      status: "to-do",
      assignedTo: "Killer Shayaan2",
      priority: "Highest",
    },
    {
      id: 5,
      name: "Kill muqeet2",
      description: "Free muqeet from world tensions2",
      status: "to-do",
      assignedTo: "Killer Shayaan2",
      priority: "Highest",
    },
    {
      id: 6,
      name: "Kill muqeet2",
      description: "Free muqeet from world tensions2",
      status: "to-do",
      assignedTo: "Killer Shayaan2",
      priority: "Highest",
    },
  ];
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
          {projects.map((project) => (
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
