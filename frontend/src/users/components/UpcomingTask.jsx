import React, { useState } from "react";
import "../css/UpcomingTask.css";

const UpcomingTask = () => {
  const upcomingProjects = [
    {
      name: "UI Redesign",
      description: "Update dashboard UI",
      startDate: "2026-05-01",
      endDate: "2026-05-10",
      currentSprint: 5,
    },
    {
      name: "API Integration",
      description: "Integrate payment gateway",
      startDate: "2026-05-05",
      endDate: "2026-05-15",
      currentSprint: 8,
    },
  ];

  return (
    <div className="content-area">
      <div className="table-container">
        <h3 className="table-title">Upcoming Tasks</h3>

        <table className="project-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Start date</th>
              <th>End date</th>
              <th>Planned sprint</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {upcomingProjects.map((project, index) => (
              <tr key={index}>
                <td>{project.name}</td>
                <td>{project.description}</td>
                <td>{project.startDate}</td>
                <td>{project.endDate}</td>
                <td>{project.currentSprint}</td>
                <td>
                  <button className="go-btn">Go</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpcomingTask;
