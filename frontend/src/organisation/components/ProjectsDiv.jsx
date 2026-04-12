import React from "react";
import { useGetProjectsByIdQuery } from "../../redux/organisation/projectApiSlice.js";
import { ProjectsList } from "../../globalComponents/ProjectsList.jsx";
import { useSelector } from "react-redux";
import "../css/ProjectsDiv.css";

export const ProjectsDiv = () => {
  const orgId = useSelector((state) => state.currOrg.id);
  const { data, isLoading, isError } = useGetProjectsByIdQuery(orgId, {
    skip: !orgId,
  });
  const isProjects = data && data.lenght !== 0 && !isLoading && !isError;
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
