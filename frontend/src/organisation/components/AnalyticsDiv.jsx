import React from "react";
import { useSelector } from "react-redux";

export const AnalyticsDiv = () => {
  const orgId = useSelector((state) => state.currOrg.id);
  return (
    <>
      <div>We have to do analytics here.</div>
    </>
  );
};
