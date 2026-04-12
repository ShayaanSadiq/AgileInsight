import React from "react";
import { ManagerLayout } from "../components/ManagerLayout.jsx";
import { HomePageMainDiv } from "../components/HomePageMainDIv.jsx";
import "../css/manager.homePage.css";

const HomePage = () => {
  return (
    <>
      <ManagerLayout>
        <HomePageMainDiv />
      </ManagerLayout>
    </>
  );
};

export default HomePage;
