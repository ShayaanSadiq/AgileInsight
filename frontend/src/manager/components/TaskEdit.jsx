import React, { useEffect, useState } from "react";
import { ShowList } from "./ShowList.jsx";
import { LeftBottomDiv } from "./LeftBottomDiv.jsx";
import "../css/TaskEdit.css";

export const TaskEdit = ({
  managerProjects = [
    { id: 1, name: "kill muqeet", description: "please someone kill muqeet" },
    {
      id: 2,
      name: "kill muqeet 1",
      description: "please someone kill muqeet 1",
    },
  ],
  tasks = [
    { name: "kill muqeet", description: "please someone kill muqeet" },
    { name: "kill muqeet 1", description: "please someone kill muqeet 1" },
  ],
  currentProject,
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    if (currentProject) {
      setSelectedOption(currentProject.id);
    }
  }, [currentProject]);
  return (
    <div className="task-edit-body">
      <div className="task-left-div">
        <ShowList />
        <LeftBottomDiv
          title={"Projects"}
          projects={managerProjects}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      <div className="task-right-div">hello</div>
    </div>
  );
};
