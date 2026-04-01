import React from "react";
import { ProjectComponent } from "./ProjectComponent.jsx";
import "../css/ProjectList.css";

export const ProjectListComponent = () => {
  const projects = [
    {
      id: 1,
      name: "kill muqeet1",
      dueDate: "123456",
      completed: "50%",
      link: "https://kuchbhi.com",
    },
    {
      id: 2,
      name: "kill muqeet2",
      dueDate: "654321",
      completed: "40%",
      link: "https://kuchbhi5.com",
    },
    {
      id: 3,
      name: "kill muqeet3",
      dueDate: "98765",
      completed: "60%",
      link: "https://kuchbhi7.com",
    },
  ];
  return (
    <div className="project-headings">
      <table>
        <tr>
          <th>Name</th>
          <th>Due-Date</th>
          <th>Completed</th>
          <th></th>
        </tr>

        {projects.map((project) => (
          <tr key={project.id}>
            <ProjectComponent project={project} />
          </tr>
        ))}
      </table>
    </div>
  );
};
