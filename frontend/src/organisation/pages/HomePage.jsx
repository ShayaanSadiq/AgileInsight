import React, { useState, useEffect } from "react";
import { MainDiv } from "../components/MainDiv";
import { SideBar } from "../../globalComponents/SideBar.jsx";
import { QuickAddAction } from "../../globalComponents/QuickAddAction.jsx";
import { LuFileCode } from "react-icons/lu";
import { MdPersonAddAlt1 } from "react-icons/md";
import { LuCircleUser } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { useGetLogoutMutation } from "../../redux/organisation/authApiSlice.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "../css/HomePage.css";

const HomePage = () => {
  const [logoutOrganisation, { isLoading, isError }] = useGetLogoutMutation();
  const [activeOption, setActiveOption] = useState("Projects");
  const navigate = useNavigate();

  const upperDivOptions = [
    { text: "Projects", icon: LuFileCode },
    { text: "Add Project", icon: LuFileCode },
    { text: "Add Manager", icon: MdPersonAddAlt1 },
  ];

  const downDivOptions = [
    { text: "Profile", icon: LuCircleUser },
    { text: "Logout", icon: MdLogout },
  ];

  const addProjectInputs = [
    { name: "name", label: "Name", type: "text" },
    { name: "startDate", label: "Start Date", type: "date" },
    { name: "endDate", label: "End Date", type: "date" },
  ];

  const addManagerInputs = [
    { name: "name", label: "Name", type: "text" },
    { name: "email", label: "Email", type: "text" },
  ];
  const handleLogoutOrganisation = async () => {
    if (activeOption === "Logout") {
      const result = await logoutOrganisation();
      if (result.data.message === "Logout successful") {
        toast.success(result.data.message);
        return navigate("/org/login");
      }
      toast.error("Logout unsuccessful");
    }
  };

  useEffect(() => {
    handleLogoutOrganisation();
  }, [activeOption]);

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

        {/* inputs,
  setButtonClicked,
  register,
  handleSubmit,
  useAddFunction, */}

        {activeOption === "Add Project" && (
          <QuickAddAction
            inputs={addProjectInputs}
            useBack={() => setActiveOption("Projects")}
          />
        )}
        {activeOption === "Add Manager" && (
          <QuickAddAction
            inputs={addManagerInputs}
            useBack={() => setActiveOption("Projects")}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
