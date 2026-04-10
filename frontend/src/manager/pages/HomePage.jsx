import React, { useState } from "react";
import { SideBar } from "../components/SideBar.jsx";
import { HomePageMainDiv } from "../components/HomePageMainDIv.jsx";
import { QuickAddAction } from "../components/QuickAddAction.jsx";
import { useForm } from "react-hook-form";
import {
  upperDivOptions,
  downDivOptions,
} from "../constants/HomePageConstants.js";
import "../css/manager.homePage.css";

const HomePage = () => {
  const [activeOption, setActiveOption] = useState("Project");
  const { register, handleSubmit } = useForm();

  const projectOptions = [
    { label: "Project Alpha", value: "p1" },
    { label: "Project Beta", value: "p2" },
    { label: "Project Gamma", value: "p3" },
  ];

  const quickAddMemberInputs = [
    { name: "name", label: "Name", type: "text", placeholder: "type here" },
    { name: "email", label: "Email", type: "text", placeholder: "type here" },
    {
      name: "projectId",
      label: "Select Project",
      type: "select",
      options: projectOptions,
    },
  ];

  const quickAddSprintInputs = [
    { name: "name", label: "Name", type: "text", placeholder: "type here" },
    {
      name: "projectId",
      label: "Select Project",
      type: "select",
      options: projectOptions,
    },
    {
      name: "startDate",
      label: "Start Date",
      type: "date",
      placeholder: "dd / mm / yyyy",
    },
    {
      name: "endDate",
      label: "End Date",
      type: "date",
      placeholder: "dd / mm / yyyy",
    },
  ];

  const logout = async () => {
    if (activeOption === "Logout") {
      console.log("hello world");
      //change the logout query to mutation
    }
  };
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
        {activeOption === "Add Member" && (
          <QuickAddAction
            inputs={quickAddMemberInputs}
            setButtonClicked={() => setActiveOption("Project")}
            register={register}
            handleSubmit={handleSubmit}
          />
        )}

        {activeOption === "Create Sprint" && (
          <QuickAddAction
            inputs={quickAddSprintInputs}
            setButtonClicked={() => setActiveOption("Project")}
            register={register}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
