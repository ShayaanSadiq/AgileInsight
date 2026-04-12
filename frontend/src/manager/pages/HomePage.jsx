import React, { useState, useEffect } from "react";
import { SideBar } from "../components/SideBar.jsx";
import { HomePageMainDiv } from "../components/HomePageMainDIv.jsx";
import { QuickAddAction } from "../components/QuickAddAction.jsx";
import { useForm } from "react-hook-form";
import {
  upperDivOptions,
  downDivOptions,
} from "../constants/HomePageConstants.js";
import { useGetLogoutMutation } from "../../redux/manager/authApiSlice.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "../css/manager.homePage.css";

const HomePage = () => {
  const [logouttManager, { isError }] = useGetLogoutMutation();
  const [activeOption, setActiveOption] = useState("Project");
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

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
      const result = await logouttManager();
      if (result.data.message === "Logout successful") {
        toast.success(result.data.message);
        return navigate("/manager/login");
      }
      toast.error("Logout failed");
    }
  };

  useEffect(() => {
    logout();
  }, [activeOption]);
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
