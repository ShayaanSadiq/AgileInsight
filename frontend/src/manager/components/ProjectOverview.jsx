import React from "react";
import { OverviewDetails } from "./OverviewDetails.jsx";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { MdCalendarToday } from "react-icons/md";
import { BiSolidFlag } from "react-icons/bi";
import { LuListTodo } from "react-icons/lu";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import "react-circular-progressbar/dist/styles.css";
import "../css/ProjectOverview.css";

export const ProjectOverview = ({ project }) => {
  return (
    <div className="project-overview-body">
      <h4>Project Overview</h4>
      <div className="project-analytics">
        <div className="circular-progressbar">
          <p>Completion</p>
          <CircularProgressbar
            value={70}
            text={`70%`}
            styles={buildStyles({
              pathColor: "#76D2DB",
              textColor: "black",
            })}
          />
        </div>
        <OverviewDetails
          Icon={MdCalendarToday}
          heading={"Start date"}
          data={project.startDate}
        />
        <OverviewDetails
          Icon={BiSolidFlag}
          heading={"End date"}
          data={project.endDate}
        />
        <OverviewDetails
          Icon={LuListTodo}
          heading={"Completed Tasks"}
          data={project.completedTasks}
        />
        <OverviewDetails
          Icon={IoMdCheckmarkCircleOutline}
          heading={"Total Tasks"}
          data={project.totalTasks}
        />
      </div>
    </div>
  );
};
