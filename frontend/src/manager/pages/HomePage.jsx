import React, { useState } from "react";
import { SideBar } from "../components/SideBar.jsx";
import { HomePageMainDiv } from "../components/HomePageMainDIv.jsx";
import { LuFileCode } from "react-icons/lu";
import { LuIterationCcw } from "react-icons/lu";
import { LuCircleUser } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { MdPersonAddAlt1 } from "react-icons/md";
import "../css/manager.homePage.css";

const HomePage = () => {
  const [activeOption, setActiveOption] = useState("Project");
  const upperDivOptions = [
    { text: "Project", icon: LuFileCode },
    { text: "Add Member", icon: MdPersonAddAlt1 },
    { text: "Create Sprint", icon: LuIterationCcw },
  ];

  const downDivOptions = [
    { text: "Profile", icon: LuCircleUser },
    { text: "Logout", icon: MdLogout },
  ];
  return (
    <div className="manager-home-page">
      <div className="manager-home-page-body">
        <SideBar
          upperDivOptions={upperDivOptions}
          downDivOptions={downDivOptions}
          activeOption={activeOption}
          setActiveOption={setActiveOption}
        />
        <HomePageMainDiv />
      </div>
    </div>
  );
};

export default HomePage;
