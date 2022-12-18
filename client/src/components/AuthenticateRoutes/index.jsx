import React, { useEffect } from "react";
import { STORAGE_NAME } from "../../services/const";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { extractToken, isAdmin } from "../../services/utils";
import useStorage from "../../hooks/useStorage";

const AuthenticateRoutes = ({ isAdminRequire, children }) => {
  const token = extractToken();

  if (!token) {
    return <Navigate to="/connexion" replace={true} />;
  }

  if (isAdminRequire) {
    if (!isAdmin()) return <Navigate to="/" replace={true} />;
  }

  return <>{children}</>;
};

export default AuthenticateRoutes;
