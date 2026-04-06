import React from "react";
import "../css/SignupForm.css";
import { useForm } from "react-hook-form";
import { usePostSignupMutation } from "../../redux/organisation/authApiSlice.js";
import { setCurrOrg } from "../../redux/organisation/currOrg.js";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const SignupForm = () => {
  const [signup, { isLoading }] = usePostSignupMutation();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const result = await signup(data);
    if (result.data.message == "signup successfull") {
      toast.success("Signup successfull");
      dispatch(setCurrOrg(data.email));
      navigate("/org/home");
    } else {
      toast.error("Signup unsuccessfull.");
    }
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
