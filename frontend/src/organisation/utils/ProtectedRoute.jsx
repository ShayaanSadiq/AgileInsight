import React, { useEffect } from "react";
import { useGetOrgVerifyQuery } from "../../redux/organisation/authApiSlice.js";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrOrg } from "../../redux/organisation/currOrg.js";

export const ProtectedRoute = ({ children }) => {
  const organisationId = useSelector((state) => state.currOrg.id);

  const { data, isLoading, isError, isFetching } = useGetOrgVerifyQuery(
    undefined,
    {
      skip: !!organisationId,
      refetchOnMountOrArgChange: true,
    },
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!organisationId && !isLoading && !isFetching) {
      if (isError) {
        toast.error("Please login first.");
        navigate("/org/login");
      } else if (
        data.message === "Not logged in" ||
        data.message === "Invalid token"
      ) {
        toast.error("Login to continue.");
        navigate("/org/login");
      } else if (data.message === "Login successful") {
        dispatch(setCurrOrg({ id: data.id }));
      }
    }
  }, [isLoading, isError, data, dispatch, navigate]);
  if (isLoading) return <p>Loading...</p>;

  return children;
};
