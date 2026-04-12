import React, { useState } from "react";
import { MainDiv } from "../components/MainDiv";
import { SideBar } from "../../globalComponents/SideBar.jsx";
import { LuFileCode } from "react-icons/lu";
import { MdPersonAddAlt1 } from "react-icons/md";
import { LuCircleUser } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import "../css/HomePage.css";

// upperDivOptions,
//   downDivOptions,
//   activeOption,
//   setActiveOption

const HomePage = () => {
  const [activeOption, setActiveOption] = useState("Projects");

  const upperDivOptions = [
    { text: "Projects", icon: LuFileCode },
    { text: "Add Project", icon: LuFileCode },
    { text: "Add Manager", icon: MdPersonAddAlt1 },
  ];

  const downDivOptions = [
    { text: "Profile", icon: LuCircleUser },
    { text: "Logout", icon: MdLogout },
  ];

  return (
    <div className="home-page">
      <div className="home-page-body">
        <SideBar
          upperDivOptions={upperDivOptions}
          downDivOptions={downDivOptions}
          activeOption={activeOption}
          setActiveOption={setActiveOption}
        />
        <MainDiv />
      </div>
    </div>
  );
};

export default HomePage;
