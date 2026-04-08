import React, { Children, useEffect } from "react";
import { setCurrManager } from "../../redux/manager/currManagerSlice.js";
import { useGetVerifyQuery } from "../../redux/manager/authApiSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export const ManagerProtectedRoute = ({ children }) => {
  const managerId = useSelector((state) => state.currManager.id);
  const { data, isLoading, isFetching, isError } = useGetVerifyQuery(
    undefined,
    {
      skip: !!managerId,
      refetchOnMountOrArgChange: true,
    },
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!managerId && !isLoading && !isFetching) {
      if (isError) {
        toast.error("Please login first");
        navigate("/manager/login");
      } else if (
        data?.message === "Not loggedin" ||
        data?.message === "Invalid token"
      ) {
        toast.error("Login to continue.");
        navigate("/manager/login");
      } else if (data?.message === "Login successful") {
        dispatch(setCurrManager({ id: data.id }));
      }
    }
  }, [isLoading, isError, isFetching, data, dispatch, navigate]);

  if (isLoading || isFetching) return <p>Loading...</p>;

  return children;
};
