import React, { useEffect } from "react";
import { OrganisationLayout } from "../components/OrganisationLayout.jsx";
import { MainDiv } from "../components/MainDiv";
import { useGetProjectsByIdQuery } from "../../redux/organisation/orgProjectApiSlice.js";

import "../css/HomePage.css";

const HomePage = () => {
  const { data, isLoading, isError } = useGetProjectsByIdQuery();
  let projects = data ? data : null;
  return (
    <>
      <OrganisationLayout>
        <MainDiv projects={projects} />
      </OrganisationLayout>
    </>
  );
};

export default HomePage;
