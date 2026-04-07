import React, { useEffect } from "react";
import { useGetVerifyQuery } from "../../redux/organisation/authApiSlice.js";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { data, isLoading, isError, isFetching } = useGetVerifyQuery(
    undefined,
    {
      refetchOnMountOrArgChange: true,
    },
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isFetching) {
      if (isError) {
        toast.error("Please login first.");
        navigate("/org/login");
      } else if (
        data.message === "Not logged in" ||
        data.message === "Invalid token"
      ) {
        toast.error("Login to continue.");
        navigate("/org/login");
      }
    }
  }, [isLoading, isError, data, navigate]);
  if (isLoading) return <p>Loading...</p>;

  return children;
};
