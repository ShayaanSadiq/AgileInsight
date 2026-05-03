import React from "react";
import "../css/manager.leftDetails.css";

export const LeftDetails = ({ register, Icon, title, status, inputs }) => {
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
