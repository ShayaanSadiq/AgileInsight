import React from "react";
import "../css/LeftBottomDiv.css";

export const LeftBottomDiv = ({
  title,
  array = [
    { id: "1", name: "Kill muqeet", description: "please kill muqeet" },
    { id: "2", name: "Kill muqeet2", description: "please kill muqeet2" },
  ],
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <div className="left-bottom">
      <span style={{ marginBottom: "5px" }}>{title}</span>
      {array?.map((object) => (
        <div
          key={object.id}
          className={`single-object ${selectedOption === object.id ? "active" : ""}`}
          onClick={() => setSelectedOption(object.id)}
        >
          <span style={{ fontSize: "medium" }}>{object.name}</span>
          <span style={{ fontSize: "small" }}>{object.description}</span>
        </div>
      ))}
    </div>
  );
};
