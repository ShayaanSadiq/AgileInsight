import React, { useState } from "react";
import "../css/UnderReviewTask.css";

const UnderReviewTask = () => {
  const reviewProjects = [
    {
      name: "Payment Integration",
      description: "Stripe payment module under testing",
      startDate: "2026-04-01",
      endDate: "2026-04-08",
      reviewSprint: 11,
    },
    {
      name: "Bug Fix Sprint",
      description: "Fixing UI/UX issues before release",
      startDate: "2026-04-03",
      endDate: "2026-04-09",
      reviewSprint: 13,
    },
  ];

  return (
    <div className="content-area">
      <div className="table-container">
        <h3 className="table-title">Under Review Tasks</h3>

        <table className="project-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Start date</th>
              <th>End date</th>
              <th>Review sprint</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {reviewProjects.map((project, index) => (
              <tr key={index}>
                <td>{project.name}</td>
                <td>{project.description}</td>
                <td>{project.startDate}</td>
                <td>{project.endDate}</td>
                <td>{project.reviewSprint}</td>
                <td>
                  <button className="go-btn">Review</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UnderReviewTask;
