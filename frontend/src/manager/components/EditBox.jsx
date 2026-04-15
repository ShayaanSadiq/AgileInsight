import React from "react";
import { useNavigate } from "react-router-dom";

export const EditBox = ({ projectId }) => {
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
        necessitatibus doloremque repudiandae quia numquam. Fugiat similique
        totam atque maxime officiis necessitatibus architecto molestiae, eos
        nisi dolorem, vero commodi blanditiis ullam!
      </p>
    </div>
  );
};
