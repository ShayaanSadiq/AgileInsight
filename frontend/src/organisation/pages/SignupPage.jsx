import React from "react";
import AuthComponent from "../../globalComponents/AuthComponent.jsx";
import { usePostOrgSignupMutation } from "../../redux/organisation/authApiSlice.js";
import { setCurrOrg } from "../../redux/organisation/currOrg.js";
import { useForm } from "react-hook-form";

const SignupPage = () => {
  const title = "Register";
  const navigateLink = "/org/home";
  const inputs = [
    { name: "name", label: "Name", type: "text", placeholder: "type here" },
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
      useAuthMutation={usePostSignupMutation}
      register={register}
      handleSubmit={handleSubmit}
      setCurrData={setCurrOrg}
    />
  );
};

export default SignupPage;
