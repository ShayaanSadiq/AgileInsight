import React from "react";
import { ProjectsList } from "../../globalComponents/ProjectsList.jsx";
import "../css/ProjectsDiv.css";

export const ProjectsDiv = ({ data }) => {
  const isProjects = data && data.lenght !== 0;
  const tableHeadings = [
    "Name",
    "Description",
    "Start Date",
    "End Date",
    "Assigned To",
    "Status",
    "Expected Sprints",
  ];
  const navigateLink = "/org/project";
  return (
    <>
      {isProjects && (
        <ProjectsList
          tableHeadings={tableHeadings}
          navigationLink={navigateLink}
          projects={data}
          isOrganisation={true}
        />
      )}
      {!isProjects && <span>Create a new project.</span>}
    </>
  );
};
