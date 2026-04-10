import React, { useState } from "react";
import { ProjectEdit } from "../components/ProjectEdit.jsx";
import { SprintEdit } from "../components/SprintEdit.jsx";
import { TaskEdit } from "../components/TaskEdit.jsx";
import { SideBar } from "../components/SideBar.jsx";
import { LuFileCode } from "react-icons/lu";
import { LuListTodo } from "react-icons/lu";
import { LuIterationCcw } from "react-icons/lu";
import { LuCircleUser } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import "../css/manager.editPage.css";

const EditPage = () => {
  const [activeOption, setActiveOption] = useState("Project");
  const upperDivOptions = [
    { text: "Project", icon: LuFileCode },
    { text: "Sprints", icon: LuIterationCcw },
    { text: "Tasks", icon: LuListTodo },
  ];
  const downDivOptions = [
    { text: "Profile", icon: LuCircleUser },
    { text: "Logout", icon: MdLogout },
  ];
  return (
    <div className="manager-edit-page">
      <div className="manager-edit-body">
        <SideBar
          upperDivOptions={upperDivOptions}
          downDivOptions={downDivOptions}
          activeOption={activeOption}
          setActiveOption={setActiveOption}
        />
        <div className="manager-edit-main">
          {activeOption === "Project" && <ProjectEdit />}
          {activeOption === "Sprints" && <SprintEdit />}
          {activeOption === "Tasks" && <TaskEdit />}
        </div>
      </div>
    </div>
  );
};

export default EditPage;
