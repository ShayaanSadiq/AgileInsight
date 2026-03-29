import React from "react";
import { CreateProjectDiv } from "./CreateProjectDiv";
import "../css/MainDiv.css";

export const MainDiv = () => {
  return (
    <>
      <div className="create-project-div">
        <CreateProjectDiv orgName={"Kill Muqeet"} />
      </div>
      <div className="projects-div">hello</div>
      <div className="analytics-div">Assalamualikum</div>
    </>
  );
};
