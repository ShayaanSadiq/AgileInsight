import React from "react";
import { NavBar } from "../components/NavBar";
import { MainDiv } from "../components/MainDiv";
import "../css/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page-body">
      <NavBar />
      <div className="main-div">
        <MainDiv />
      </div>
    </div>
  );
};

export default HomePage;
