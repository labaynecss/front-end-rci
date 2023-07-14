import React from "react";
import { Navigate } from "react-router-dom";
import useLoginCredZustand from "../store/useLoginCredZustand";

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useLoginCredZustand();
  return isAuthenticated ? <Navigate to="/private/roles" /> : children;
};

export default PublicRoute;
