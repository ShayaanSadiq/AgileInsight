import React from "react";
import { AnalyticsDiv } from "./AnalyticsDiv.jsx";
import { ProjectsList } from "../../globalComponents/ProjectsList.jsx";
import { useGetProjectsByIdQuery } from "../../redux/manager/ProjectApiSlice.js";
import { useSelector } from "react-redux";
import "../css/manager.homePage.main.css";

export const HomePageMainDiv = () => {
  const managerId = useSelector((state) => state.currManager.id);
  const { data, isLoading, isError } = useGetProjectsByIdQuery(managerId, {
    skip: !managerId,
  });

  const tableHeadings = [
    "Name",
    "Description",
    "Start Date",
    "End Date",
    "Sprint",
    "Expected Sprints",
  ];

  const navigateLink = "/manager/project";
  return (
    <div className="manager-home-page-main">
      <div className="manager-home-projects-div">
        <h4>Projects</h4>
        <ProjectsList
          tableHeadings={tableHeadings}
          navigationLink={navigateLink}
          projects={data}
          isOrganisation={false}
        />
      </div>
      <div className="manager-home-analytics-div">
        <AnalyticsDiv />
      </div>
    </div>
  );
};
