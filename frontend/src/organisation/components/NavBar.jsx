import React, { useState } from "react";
import CreateProject from "./CreateProject.jsx";
import { LuUser } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Menu } from "./Menu.jsx";
import "../css/NavBar.css";

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isCreateProject, setIsCreateProject] = useState(false);

  return (
    <>
      <nav className="nav-bar">
        <h2>AgileInsight</h2>
        <div onClick={() => setShowMenu((prev) => !prev)} className="icon-div">
          <LuUser />
          <MdKeyboardArrowDown />
        </div>
      </nav>
      <Menu
        showMenu={showMenu}
        setIsCreateProject={setIsCreateProject}
        setIsSettings={(value) => console.log(value)}
        setIsLogOut={(value) => console.log(value)}
      />
      {isCreateProject && (
        <CreateProject useBack={() => setIsCreateProject(false)} />
      )}
    </>
  );
};
