import React from "react";
import { BottomDiv } from "../components/BottomDiv.jsx";
import { useForm } from "react-hook-form";
import "../css/ProjectEdit.css";

export const ProjectEdit = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "Kill Muqeet",
      description: "Please kill muqeet",
      startDate: "10-04-2026",
      endDate: "15-04-2026",
    },
  });
  const headingStyles = {
    fontSize: "larger",
    marginTop: "10px",
    marginBottom: "5px",
    fontWeight: "bold",
  };
  return (
    <>
      <span style={headingStyles}>Project</span>
      <div className="description-div">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit unde
          velit delectus quam perferendis,
        </span>
        <span>latest updated</span>
      </div>
      <BottomDiv register={register} />
    </>
  );
};
