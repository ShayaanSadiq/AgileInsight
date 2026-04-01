import React from "react";
import { NavBar } from "../components/NavBar";
import { HomePageMainDiv } from "../components/HomePageMainDIv.jsx";
import "../css/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page-body">
      <NavBar />
      <div className="main-div">
        <HomePageMainDiv />
      </div>
    </div>
  );
};

export default HomePage;
