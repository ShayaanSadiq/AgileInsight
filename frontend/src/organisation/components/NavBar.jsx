import React from "react";
import "../css/NavBar.css";

export const NavBar = () => {
  return (
    <nav className="nav-bar">
      <h2>AgileInsight</h2>
      <ul className="nav-list">
        <li className="nav-list-li">Settings</li>
        <li className="nav-list-li">Logout</li>
      </ul>
    </nav>
  );
};
