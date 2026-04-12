import React, { useState, useEffect } from "react";
import { SideBar } from "../../globalComponents/SideBar.jsx";
import { QuickAddAction } from "../../globalComponents/QuickAddAction.jsx";
import {
  upperDivOptions,
  downDivOptions,
} from "../constants/HomePageConstants.js";
import { useGetLogoutMutation } from "../../redux/manager/authApiSlice.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "../css/manager.layout.css";

export const ManagerLayout = ({ children }) => {
  const [logouttManager, { isError }] = useGetLogoutMutation();
  const [activeOption, setActiveOption] = useState("Project");
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
    <div className="manager-layout">
      <div className="manager-layout-body">
        <SideBar
          upperDivOptions={upperDivOptions}
          downDivOptions={downDivOptions}
          activeOption={activeOption}
          setActiveOption={setActiveOption}
        />

        {children}

        {activeOption === "Add Member" && (
          <QuickAddAction
            inputs={quickAddMemberInputs}
            useBack={() => setActiveOption("Project")}
          />
        )}

        {activeOption === "Create Sprint" && (
          <QuickAddAction
            inputs={quickAddSprintInputs}
            useBack={() => setActiveOption("Project")}
          />
        )}
      </div>
    </div>
  );
};
