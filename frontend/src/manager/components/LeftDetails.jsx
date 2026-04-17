import React from "react";
import { useForm } from "react-hook-form";
import "../css/manager.leftDetails.css";

export const LeftDetails = ({
  Icon,
  title,
  status,
  inputs,
  defaultProject,
}) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: defaultProject?.name,
      description: defaultProject?.description,
      startDate: defaultProject?.startDate,
      endDate: defaultProject?.endDate,
    },
  });
  return (
    <>
      <div className="manager-left-details">
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "3px",
          }}
        >
          <Icon />
          <span>{title}</span>
        </span>
        <section
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <form className="manager-left-details-form">
            {inputs.map((input) => {
              if (input.type === "textarea") {
                return (
                  <div className="manager-form-object">
                    <label htmlFor={`${input.name}`}>{input.label}</label>
                    <textarea
                      type="text"
                      id={`${input.name}`}
                      placeholder={`${input.placeholder}`}
                      {...register(input.name)}
                      className="manager-form-input manager-textarea"
                    />
                  </div>
                );
              } else if (input.type === "text") {
                return (
                  <div className="manager-form-object">
                    <label htmlFor={`${input.name}`}>{input.label}</label>
                    <input
                      type="text"
                      id={`${input.name}`}
                      placeholder={`${input.placeholder}`}
                      {...register(input.name)}
                      className="manager-form-input"
                    />
                  </div>
                );
              }
            })}

            <div className="manager-status-date">
              {inputs.map((input) => {
                if (input.type === "date") {
                  return (
                    <div className="manager-form-object">
                      <label htmlFor={`${input.name}`}>{input.label}</label>
                      <input
                        type="text"
                        id={`${input.name}`}
                        placeholder={`${input.placeholder}`}
                        {...register(input.name)}
                        className="manager-date-input"
                      />
                    </div>
                  );
                }
              })}
            </div>
          </form>
          <section>
            <span>Status </span>
            {status}
          </section>
        </section>
      </div>
    </>
  );
};
