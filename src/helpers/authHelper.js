import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Navigate, Outlet } from "react-router-dom";
// import { isAuthGuardActive } from "../constants/defaultValues";

const ProtectedRoute = ({}) => {
  const currentUser = useSelector((state) => state.authUser.userAddress);

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export { ProtectedRoute };
