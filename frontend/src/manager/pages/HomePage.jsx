import React from "react";
import { ManagerLayout } from "../components/ManagerLayout.jsx";
import { HomePageMainDiv } from "../components/HomePageMainDIv.jsx";
import { useGetManagerProjectsByIdQuery } from "../../redux/manager/managerProjectApiSlice.js";

import "../css/manager.homePage.css";

const HomePage = () => {
  const { data, isLoading, isError } = useGetManagerProjectsByIdQuery();

  return (
    <>
      <ManagerLayout projects={data}>
        <HomePageMainDiv data={data} />
      </ManagerLayout>
    </>
  );
};

export default HomePage;
