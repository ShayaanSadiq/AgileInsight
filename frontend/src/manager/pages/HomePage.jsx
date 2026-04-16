import React from "react";
import { ManagerLayout } from "../components/ManagerLayout.jsx";
import { HomePageMainDiv } from "../components/HomePageMainDIv.jsx";
import { useGetProjectsByIdQuery } from "../../redux/manager/ProjectApiSlice.js";
import { useSelector } from "react-redux";

import "../css/manager.homePage.css";

const HomePage = () => {
  const managerId = useSelector((state) => state.currManager.id);
  const { data, isLoading, isError } = useGetProjectsByIdQuery(managerId, {
    skip: !managerId,
  });

  return (
    <>
      <ManagerLayout projects={data}>
        <HomePageMainDiv data={data} />
      </ManagerLayout>
    </>
  );
};

export default HomePage;
