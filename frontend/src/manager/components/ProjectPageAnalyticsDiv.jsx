import React from "react";
import {
  PieChart,
  Pie,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../css/ProjectPageAnalyticsDiv.css";

export const ProjectPageAnalyticsDiv = () => {
  const analytics = {
    percentageProjectCompleted: 100,
  };
  return (
    <section className="project-analytics-section">
      <div className="analytics-box">
        <h4>Completed</h4>
        <div className="completion-outer-div">
          <div
            className="completion-inner-div"
            style={{
              width: `${analytics.percentageProjectCompleted}%`,
              background: "#76D2DB",
              borderRadius: 50,
            }}
          >
            <span style={{ display: "hidden" }}>
              {analytics.percentageProjectCompleted}%
            </span>
          </div>
        </div>
        <p>Project completed {analytics.percentageProjectCompleted}%</p>
      </div>
      <div className="analytics-box">hi</div>
    </section>
  );
};
