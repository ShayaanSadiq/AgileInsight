import React from "react";
import AuthComponent from "../../globalComponents/AuthComponent.jsx";
import { usePostOrgLoginMutation } from "../../redux/organisation/authApiSlice.js";
import { setCurrOrg } from "../../redux/organisation/currOrg.js";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const title = "Login";
  const navigateLink = "/org/home";
  const inputs = [
    { name: "email", label: "Email", type: "text", placeholder: "type here" },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "type here",
    },
  ];
  const { register, handleSubmit } = useForm();
  return (
    <AuthComponent
      title={title}
      inputs={inputs}
      navigateLink={navigateLink}
      useAuthMutation={usePostOrgLoginMutation}
      register={register}
      handleSubmit={handleSubmit}
      setCurrData={setCurrOrg}
    />
  );
};

export default LoginPage;
