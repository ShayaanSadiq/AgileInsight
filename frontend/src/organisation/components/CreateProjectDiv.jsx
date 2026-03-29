import React from "react";
import "../css/CreateProjectDiv.css";

export const CreateProjectDiv = ({ orgName }) => {
  return (
    <>
      <h3>{orgName}</h3>
      <button className="create-project-btn">Create</button>
    </>
  );
};
