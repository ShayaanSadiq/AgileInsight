import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../css/CreateProject.css";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { ManagerForm } from "./ManagerForm.jsx";
import { CreateProjectForm } from "./CreateProjectForm.jsx";
import { usePostManagerSignupMutation } from "../../redux/manager/authApiSlice.js";
import { usePostCreateProjectMutation } from "../../redux/project/projectApiSlice.js";
import { useSelector } from "react-redux";

function CreateProject({ useBack }) {
  const [isContinued, setIsContinued] = useState(false);
  const [managerId, setManagerId] = useState("");
  const { register, handleSubmit } = useForm();
  const organisationId = useSelector((state) => state.currOrg.id);

  return (
    <div className="main">
      <div className="div">
        <div className="logo-div">
          <MdOutlineArrowBackIos className="back-button" onClick={useBack} />
        </div>

        {!isContinued && (
          <ManagerForm
            setIsContinued={setIsContinued}
            usePostManagerSignupMutation={usePostManagerSignupMutation}
            setManagerId={setManagerId}
          />
        )}

        {isContinued && (
          <CreateProjectForm
            register={register}
            handleSubmit={handleSubmit}
            managerId={managerId}
            organisationId={organisationId}
            usePostCreateProjectMutation={usePostCreateProjectMutation}
          />
        )}
      </div>
    </div>
  );
}

export default CreateProject;
