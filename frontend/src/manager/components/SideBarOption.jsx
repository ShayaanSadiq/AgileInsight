import React from "react";

export const SideBarOption = ({
  Icon,
  text,
  activeOption,
  setActiveOption,
}) => {
  return (
    <div
      onClick={() => setActiveOption(text)}
      className={`side-bar-option ${activeOption === text ? "active" : ""}`}
    >
      <Icon />
      {text}
    </div>
  );
};
