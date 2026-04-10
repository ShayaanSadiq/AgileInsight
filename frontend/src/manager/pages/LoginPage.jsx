import React from "react";
import AuthComponent from "../../globalComponents/AuthComponent.jsx";
import { usePostLoginMutation } from "../../redux/manager/authApiSlice.js";
import { useForm } from "react-hook-form";
import { setCurrManager } from "../../redux/manager/currManagerSlice.js";

// inputs,
//   title,
//   useLoginMutation,
//   register,
//   handleSubmit,
//   setCurrData,
//   navigateLink,

const LoginPage = () => {
  const title = "Login";
  const navigateLink = "/manager/home";
  const { register, handleSubmit } = useForm();
  const inputs = [
    { name: "email", label: "Email", type: "text", placeholder: "type here" },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "type here",
    },
  ];
  return (
    <AuthComponent
      title={title}
      inputs={inputs}
      useAuthMutation={usePostLoginMutation}
      register={register}
      handleSubmit={handleSubmit}
      setCurrData={setCurrManager}
      navigateLink={navigateLink}
    />
  );
};

export default LoginPage;
