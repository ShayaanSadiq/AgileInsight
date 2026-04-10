import React from "react";
import { SideBarOption } from "../components/SideBarOption.jsx";

import "../css/manager.sideBar.css";

export const SideBar = ({ sideBarOptions, activeOption, setActiveOption }) => {
  return (
    <div className="manager-side-bar">
      {sideBarOptions.map((option) => (
        <SideBarOption
          Icon={option.icon}
          text={option.text}
          activeOption={activeOption}
          setActiveOption={setActiveOption}
        />
      ))}
    </div>
  );
};
