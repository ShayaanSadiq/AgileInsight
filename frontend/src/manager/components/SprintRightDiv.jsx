import React from "react";
import { LuIterationCcw } from "react-icons/lu";
import { useForm } from "react-hook-form";
import "../css/SprintRightDiv.css";

export const SprintRightDiv = () => {
  const { register, handleSubmit } = useForm();

  const inputs = [
    { name: "name", label: "Name", type: "text" },
    { name: "description", label: "Description", type: "textarea" },
    { name: "startDate", label: "Start Date", type: "date" },
    { name: "endDate", label: "End Date", type: "date" },
  ];
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="right-div-main">
      <section className="right-head">
        <span
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "30%",
          }}
        >
          <LuIterationCcw size={21} />
          <span>Create Sprint</span>
        </span>
      </section>
      <form className="sprint-form" onSubmit={handleSubmit(onSubmit)}>
        {inputs.map((field) => (
          <div key={field.name} className="one-box">
            <label htmlFor={field.name}>{field.label}</label>

            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                {...register(field.name)}
                className="sprint-textarea"
              />
            ) : (
              <input
                type={field.type}
                id={field.name}
                {...register(field.name)}
                className="sprint-input"
              />
            )}
          </div>
        ))}
        <button style={{ alignSelf: "center" }} type="submit">
          Create
        </button>
      </form>
    </div>
  );
};
