import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/manager.left.bottom.css";

export const LeftBottomDiv = ({
  title,
  projects,
  selectedOption,
  setSelectedOption,
}) => {
  const navigate = useNavigate();
  const handleClick = (projectId) => {
    // setSelectedOption(projectId);
    navigate(`/manager/project/${projectId}/edit`);
  };
  return (
    <div className="manager-left-bottom">
      <span style={{ marginBottom: "5px" }}>{title}</span>
      {projects?.map((project) => (
        <div
          key={project.id}
          className={`mlb-single-object ${selectedOption === project.id ? "mlb-active" : ""}`}
          onClick={() => handleClick(project.id)}
        >
          <span style={{ fontSize: "medium" }}>{project.name}</span>
          <span style={{ fontSize: "small" }}>{project.description}</span>
        </div>
      ))}
    </div>
  );
};
