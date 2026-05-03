import React from "react";
import { Link } from "react-router-dom";
import "../css/Text.css";

export const Text = ({ text, link }) => {
  return (
    <span className="text-link">
      {text}? {link}
    </span>
  );
};
// add link afterwards
