import React from "react";
import "../css/CurrentTask.css";

const CurrentTask = () => {
  return (
    <div className="content-area">
      <div className="project-details-container">
        <h2 className="project-title">Current Task Details</h2>

        <label>Name</label>
        <input type="text" value="Unit Testing" readOnly />

        <label>Description</label>
        <textarea
          rows="4"
          value="Unit Testing is a method in which individual units or components of a software application. "
          readOnly
        />

        <div className="date-row">
          <div>
            <label>Start Date</label>
            <input type="text" value="05-04-2026" readOnly />
          </div>

          <div>
            <label>End Date</label>
            <input type="text" value="10-04-2026" readOnly />
          </div>

          <div>
            <label>Sprint</label>
            <input type="text" value="5" readOnly />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentTask;
