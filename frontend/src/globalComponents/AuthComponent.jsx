import React from "react";
import { AuthForm } from "./AuthForm.jsx";
import "./css/authComponent.css";

const AuthComponent = ({
  inputs,
  title,
  useAuthMutation,
  register,
  handleSubmit,
  setCurrData,
  navigateLink,
}) => {
  return (
    <div className="login-body">
      <div className="login-card">
        <h2>{title}</h2>
        <AuthForm
          title={title}
          inputs={inputs}
          useAuthMutation={useAuthMutation}
          register={register}
          handleSubmit={handleSubmit}
          setCurrData={setCurrData}
          navigateLink={navigateLink}
        />
      </div>
    </div>
  );
};

export default AuthComponent;
