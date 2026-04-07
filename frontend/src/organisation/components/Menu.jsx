import React, { useState, useEffect } from "react";
import "../css/Menu.css";

export const Menu = ({
  showMenu,
  setIsCreateProject,
  setIsLogOut,
  setIsSettings,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["Create Project", "Settings", "Logout"];

  useEffect(() => {
    if (selectedOption === "Create Project") {
      setIsCreateProject(true);
      setSelectedOption("");
    } else if (selectedOption === "Settings") {
      setIsSettings(true);
      setSelectedOption("");
    } else {
      setIsLogOut(true);
      setSelectedOption("");
    }
  }, [selectedOption]);
  return (
    <>
      {showMenu && (
        <div className="org-menu">
          {options.map((option) => (
            <div
              onClick={() => {
                setSelectedOption(option);
              }}
              className="option option-logout"
            >
              <p>{option}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
