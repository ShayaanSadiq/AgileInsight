import React from "react";
import { ManagerLayout } from "../components/ManagerLayout.jsx";
import { HomePageMainDiv } from "../components/HomePageMainDIv.jsx";
import { useGetProjectsByIdQuery } from "../../redux/manager/managerProjectApiSlice.js";

import "../css/manager.homePage.css";

const HomePage = () => {
  const { data, isLoading, isError } = useGetProjectsByIdQuery();

  return (
    <>
      <ManagerLayout projects={data}>
        <HomePageMainDiv data={data} />
      </ManagerLayout>
    </>
  );
};

export default HomePage;
