import React, { useEffect } from "react";
import { OrganisationLayout } from "../components/OrganisationLayout.jsx";
import { MainDiv } from "../components/MainDiv";
import { useGetProjectsByIdQuery } from "../../redux/organisation/orgProjectApiSlice.js";
import { useSelector } from "react-redux";

import "../css/HomePage.css";

const HomePage = () => {
  const orgId = useSelector((state) => state.currOrg.id);
  const { data, isLoading, isError } = useGetProjectsByIdQuery();
  let projects = data ? data : null;
  return (
    <>
      <OrganisationLayout orgId={orgId}>
        <MainDiv projects={projects} />
      </OrganisationLayout>
    </>
  );
};

export default HomePage;
