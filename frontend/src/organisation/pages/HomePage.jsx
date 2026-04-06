import React from "react";
import { NavBar } from "../components/NavBar";
import { MainDiv } from "../components/MainDiv";
import { useSelector } from "react-redux";
import "../css/HomePage.css";

const HomePage = () => {
  const email = useSelector((state) => state.currOrg.email);
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
