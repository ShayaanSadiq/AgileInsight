import React from "react";
import { useForm } from "react-hook-form";
import "../css/CreateProject.css";
import { MdOutlineArrowBackIos } from "react-icons/md";

function CreateProject({ useBack }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="main">
      <div className="div">
        <MdOutlineArrowBackIos className="back-button" onClick={useBack} />
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <input
            type="text"
            placeholder="Enter the project name"
            {...register("name")}
            className="input"
          />
          <input
            type="number"
            placeholder="Enter the number of sprints"
            {...register("sprints")}
            className="input"
          />
          <input
            type="text"
            placeholder="Enter email id of manager"
            {...register("managerEmail")}
            className="input"
          />
          <button type="submit" className="submit-button">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProject;
