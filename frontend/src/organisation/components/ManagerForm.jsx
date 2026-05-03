import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import "../css/ManagerForm.css";

export const ManagerForm = ({
  setIsContinued,
  usePostManagerSignupMutation,
  setManagerId,
}) => {
  const [signup, { isLoading, isError }] = usePostManagerSignupMutation();
  const { register, handleSubmit } = useForm();
  const handleManagerSubmit = async (data) => {
    const result = await signup(data).unwrap();
    setManagerId(result.id);
    toast.success("Manager registered.");
    setIsContinued(true);
  };
  return (
    <form className="manager-form" onSubmit={handleSubmit(handleManagerSubmit)}>
      <input
        type="text"
        placeholder="Enter the manager's name"
        {...register("name")}
        className="manager-form-input"
      />
      <input
        type="text"
        placeholder="Enter the manager's email"
        {...register("email")}
        className="manager-form-input"
      />
      <button className="manager-form-btn" type="submit">
        Continue
      </button>
    </form>
  );
};
