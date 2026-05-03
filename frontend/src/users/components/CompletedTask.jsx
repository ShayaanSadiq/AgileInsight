import React, { useState } from "react";
import "../css/CompletedTask.css";

const CompletedTask = () => {
  // 🔹 Completed Projects Data
  const completedProjects = [
    {
      name: "Authentication Module",
      description: "Implemented JWT login system",
      startDate: "2026-03-01",
      endDate: "2026-03-10",
      completedSprint: 12,
    },
    {
      name: "Dashboard Setup",
      description: "Built user dashboard UI",
      startDate: "2026-03-05",
      endDate: "2026-03-15",
      completedSprint: 14,
    },
  ];

  return (
    <div className="content-area">
      <div className="table-container">
        <h3 className="table-title">Completed Tasks</h3>

        <table className="project-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Start date</th>
              <th>End date</th>
              <th>Completed sprint</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {completedProjects.map((project, index) => (
              <tr key={index}>
                <td>{project.name}</td>
                <td>{project.description}</td>
                <td>{project.startDate}</td>
                <td>{project.endDate}</td>
                <td>{project.completedSprint}</td>
                <td>
                  <button className="go-btn">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompletedTask;
