import React from "react";
import { OrganisationLayout } from "../components/OrganisationLayout.jsx";
import { MainDiv } from "../components/MainDiv";
import "../css/HomePage.css";

const HomePage = () => {
  return (
    <>
      <OrganisationLayout>
        <MainDiv />
      </OrganisationLayout>
    </>
  );
};

export default HomePage;
