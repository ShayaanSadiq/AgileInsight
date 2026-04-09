import React from "react";
import "../css/LeftDetails.css";

export const LeftDetails = ({
  register,
  Icon,
  title,
  label1,
  label2,
  label3,
  label4,
  status,
}) => {
  return (
    <>
      <div className="left-details">
        <span>
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
          <form className="left-details-form">
            <label htmlFor="project-name">{label1}</label>
            <input
              type="text"
              placeholder="type here"
              id="project-name"
              className="form-input"
              {...register("name")}
            />
            <label htmlFor="project-name">{label2}</label>
            <textarea
              type="text"
              placeholder="type here"
              id="project-description"
              className="form-input textarea"
              {...register("description")}
            />
            <div className="status-date">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label htmlFor="start-date">{label3}</label>
                <input
                  id="start-date"
                  type="text"
                  placeholder="type here"
                  className="date-input"
                  {...register("startDate")}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label htmlFor="start-date">{label4}</label>
                <input
                  id="end-date"
                  type="text"
                  placeholder="type here"
                  className="date-input"
                  {...register("endDate")}
                />
              </div>
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
