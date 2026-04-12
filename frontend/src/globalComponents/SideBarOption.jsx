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
      className={`manager-side-bar-option ${activeOption === text ? "manager-sideBar-active" : ""}`}
    >
      <Icon />
      {text}
    </div>
  );
};
