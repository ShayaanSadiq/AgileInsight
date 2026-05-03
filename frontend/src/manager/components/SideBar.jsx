import React from "react";
import { SideBarOption } from "../components/SideBarOption.jsx";
import AgileInsightLogo from "../../assets/AgileInsightLogo.jpeg";
import "../css/manager.sideBar.css";

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
