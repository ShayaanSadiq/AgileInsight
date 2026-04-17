import React from "react";
import { OrganisationLayout } from "../components/OrganisationLayout.jsx";
import { MainDiv } from "../components/MainDiv";
import { useGetProjectsByIdQuery } from "../../redux/organisation/orgProjectApiSlice.js";
import { useSelector } from "react-redux";

import "../css/HomePage.css";

const HomePage = () => {
  const orgId = useSelector((state) => state.currOrg.id);
  const { data, isLoading, isError } = useGetProjectsByIdQuery();
  return (
    <>
      <OrganisationLayout orgId={orgId}>
        <MainDiv data={data} />
      </OrganisationLayout>
    </>
  );
};

export default HomePage;
