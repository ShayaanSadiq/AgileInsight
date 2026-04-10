import React, { useState } from "react";
import { SideBar } from "../components/SideBar.jsx";
import { HomePageMainDiv } from "../components/HomePageMainDIv.jsx";
import { LuFileCode } from "react-icons/lu";
import { LuListTodo } from "react-icons/lu";
import { LuIterationCcw } from "react-icons/lu";
import "../css/manager.homePage.css";

const HomePage = () => {
  const [activeOption, setActiveOption] = useState("Project");
  const sideBarOptions = [
    { text: "Project", icon: LuFileCode },
    { text: "Sprints", icon: LuIterationCcw },
    { text: "Tasks", icon: LuListTodo },
  ];
  return (
    <div className="manager-home-page">
      <div className="manager-home-page-body">
        <SideBar
          sideBarOptions={sideBarOptions}
          activeOption={activeOption}
          setActiveOption={setActiveOption}
        />
        <HomePageMainDiv />
      </div>
    </div>
  );
};

export default HomePage;
