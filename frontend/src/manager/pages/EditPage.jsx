import React, { useState, useEffect } from "react";
import { ProjectEdit } from "../components/ProjectEdit.jsx";
import { SprintEdit } from "../components/SprintEdit.jsx";
import { TaskEdit } from "../components/TaskEdit.jsx";
import { SideBar } from "../components/SideBar.jsx";
import { useParams } from "react-router-dom";
import { useGetManagerProjectsByIdQuery } from "../../redux/manager/managerProjectApiSlice.js";
import { usePatchProjectMutation } from "../../redux/project/projectApiSlice.js";
import { useGetSprintsByProjectIdQuery } from "../../redux/manager/sprintApiSlice.js";
import { useGetUsersByProjIdQuery } from "../../redux/manager/membersApiSlice.js";
import { usePostSignupMemberMutation } from "../../redux/manager/membersApiSlice.js";
import { LuFileCode } from "react-icons/lu";
import { LuListTodo } from "react-icons/lu";
import { LuIterationCcw } from "react-icons/lu";
import { LuCircleUser } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import "../css/manager.editPage.css";

const EditPage = () => {
  const { data, isLoading, isError } = useGetManagerProjectsByIdQuery();
  const { projectId } = useParams();
  const { data: sprints } = useGetSprintsByProjectIdQuery(projectId, {
    skip: !projectId,
  });
  const { data: members } = useGetUsersByProjIdQuery(projectId, {
    skip: !projectId,
  });
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

  const [currentProject, setCurrProject] = useState(null);
  const [managerProjects, setManagerProjects] = useState(null);

  useEffect(() => {
    setCurrProject(data?.find((project) => project.id === projectId));
    setManagerProjects(data);
  }, [projectId, data, setCurrProject, setManagerProjects]);

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
          {activeOption === "Project" && (
            <ProjectEdit
              managerProjects={managerProjects}
              currentProject={currentProject}
              usePatchMutation={usePatchProjectMutation}
              members={members}
              useSignupMember={usePostSignupMemberMutation}
            />
          )}
          {activeOption === "Sprints" && (
            <SprintEdit
              managerProjects={managerProjects}
              currentProject={currentProject}
              sprints={sprints}
              projectId={projectId}
            />
          )}
          {activeOption === "Tasks" && (
            <TaskEdit
              managerProjects={managerProjects}
              currentProject={currentProject}
              sprints={sprints}
              memebers={members}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EditPage;
