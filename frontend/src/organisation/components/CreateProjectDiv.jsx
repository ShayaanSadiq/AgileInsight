import React, { useState } from "react";
import "../css/CreateProjectDiv.css";
import CreateProject from "./CreateProject.jsx";

export const CreateProjectDiv = ({ orgName }) => {
  const [isCreateProjectOpen, setIsCreateProjectOpen] = useState(false);
  return (
    <>
      <h3>{orgName}</h3>
      <button
        className="create-project-btn"
        onClick={() => {
          setIsCreateProjectOpen(!isCreateProjectOpen);
        }}
      >
        Create
      </button>
      {isCreateProjectOpen && (
        <CreateProject
          useBack={() => {
            setIsCreateProjectOpen(false);
          }}
        />
      )}
    </>
  );
};
