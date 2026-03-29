import React from "react";
import "../css/SignupForm.css";
import { useForm } from "react-hook-form";

export const SignupForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Name"
        className="input-field"
        {...register("name")}
      />
      <input
        type="text"
        placeholder="Email Id"
        className="input-field"
        {...register("email")}
      />
      <input
        type="password"
        placeholder="Password"
        className="input-field"
        {...register("password")}
      />
      <button type="submit">Signup</button>
    </form>
  );
};
