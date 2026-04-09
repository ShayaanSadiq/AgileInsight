import React from "react";
import { LuFileCode } from "react-icons/lu";
export const BottomDiv = ({ register }) => {
  return (
    <div className="bottom-div">
      <div className="left-div">
        <div className="project-details">
          <span>
            <LuFileCode />
            <span> Project Details</span>
          </span>
          <section
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <form className="project-details-form">
              <label htmlFor="project-name">Project Name</label>
              <input
                type="text"
                placeholder="type here"
                id="project-name"
                className="form-input"
                {...register("name")}
              />
              <label htmlFor="project-name">Project Description</label>
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
                  <label htmlFor="start-date">Start Date</label>
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
                  <label htmlFor="start-date">End Date</label>
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
              <span>Status</span>
              Status
            </section>
          </section>
        </div>
        <div className="member-details">hello</div>
      </div>
      <div className="right-div">
        <div className="sprint-details">hello</div>
        <div className="task-details">hi</div>
      </div>
    </div>
  );
};
