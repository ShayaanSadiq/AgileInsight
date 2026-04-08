import React from "react";
import "../css/ProjectOverview.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { OverviewDetails } from "./OverviewDetails.jsx";
import { MdCalendarToday } from "react-icons/md";
import { BiSolidFlag } from "react-icons/bi";
import { LuListTodo } from "react-icons/lu";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
export const ProjectOverview = ({ activeOption }) => {
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
              textColor: "black", // progress color
            })}
          />
        </div>
        <OverviewDetails
          Icon={MdCalendarToday}
          heading={"Start date"}
          data={"27-06-2005"}
        />
      </div>
    </div>
  );
};
