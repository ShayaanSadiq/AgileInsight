import React from "react";
import { useNavigate } from "react-router-dom";

export const EditBox = ({ projectId, project }) => {
  const navigate = useNavigate();

  const onBtnClick = () => {
    navigate(`/manager/project/${projectId}/edit`);
  };
  return (
    <div className="project-editBox">
      <div className="editBox-header">
        <div className="header-title">
          <div className="line">.</div>
          <span>Project Details</span>
        </div>
        <button onClick={onBtnClick}>Edit project</button>
      </div>
      <span>
        <b>Name: </b> {project.name}
      </span>
      <span>
        <b>Description: </b>
        {project.description}
      </span>
    </div>
  );
};
