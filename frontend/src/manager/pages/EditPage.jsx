import React, { useState } from "react";
import "../css/EditPage.css";
import { ProjectEdit } from "../components/ProjectEdit.jsx";
import { SprintEdit } from "../components/SprintEdit.jsx";
import { TaskEdit } from "../components/TaskEdit.jsx";
import { SideBarOption } from "../components/SideBarOption.jsx";
import { LuFileCode } from "react-icons/lu";
import { LuListTodo } from "react-icons/lu";
import { LuIterationCcw } from "react-icons/lu";

const EditPage = () => {
  const [activeOption, setActiveOption] = useState("Project");
  const sideBarOptions = [
    { text: "Project", icon: LuFileCode },
    { text: "Sprints", icon: LuIterationCcw },
    { text: "Tasks", icon: LuListTodo },
  ];
  return (
    <div className="edit-page">
      <div className="edit-body">
        <div className="side-bar">
          {sideBarOptions.map((option) => (
            <SideBarOption
              Icon={option.icon}
              text={option.text}
              activeOption={activeOption}
              setActiveOption={setActiveOption}
            />
          ))}
        </div>
        <div className="main-div">
          {activeOption === "Project" && <ProjectEdit />}
          {activeOption === "Sprints" && <SprintEdit />}
          {activeOption === "Tasks" && <TaskEdit />}
        </div>
      </div>
    </div>
  );
};

export default EditPage;
