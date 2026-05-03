import React from "react";
import { SideBarOption } from "./SideBarOption";
import AgileInsightLogo from "../assets/AgileInsightLogo.jpeg";
import "./css/sideBar.css";

export const SideBar = ({
  upperDivOptions,
  downDivOptions,
  activeOption,
  setActiveOption,
}) => {
  return (
    <div className="manager-side-bar">
      <img src={AgileInsightLogo} alt="Logo" className="agileinsight-logo" />
      <div className="manager-sideBar-upper">
        {upperDivOptions.map((option) => (
          <SideBarOption
            key={option.text}
            Icon={option.icon}
            text={option.text}
            activeOption={activeOption}
            setActiveOption={setActiveOption}
          />
        ))}
      </div>
      <div className="manager-sideBar-down">
        {downDivOptions.map((option) => (
          <SideBarOption
            key={option.text}
            Icon={option.icon}
            text={option.text}
            activeOption={activeOption}
            setActiveOption={setActiveOption}
          />
        ))}
      </div>
    </div>
  );
};
