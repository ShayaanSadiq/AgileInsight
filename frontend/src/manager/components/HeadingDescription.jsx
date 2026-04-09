import React from "react";
import "../css/HeadingDescription.css";

export const HeadingDescription = ({ title, description, lastUpdated }) => {
  const headingStyles = {
    fontSize: "larger",
    marginTop: "10px",
    marginBottom: "5px",
    fontWeight: "bold",
  };
  return (
    <>
      <span style={headingStyles}>{title}</span>
      <div className="description-div">
        <span>{description}</span>
        <span>{lastUpdated}</span>
      </div>
    </>
  );
};
