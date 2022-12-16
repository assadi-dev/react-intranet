import React, { useEffect } from "react";
import { STORAGE_NAME } from "../../services/const";
import { Outlet, useNavigate } from "react-router-dom";
import { extractToken, isAdmin } from "../../services/utils";
import useStorage from "../../hooks/useStorage";

const AuthenticateRoutes = ({ isAdminRequire, children }) => {
  const navigate = useNavigate();
  const token = extractToken();

  useEffect(() => {
    if (!token) {
      navigate("/connexion", {
        replace: true,
      });
    }

    /*   if (isAdminRequire) {
      isAdmin() != "true" && navigate("/", { replace: true });
    } */
  }, []);

  return <>{children}</>;
};

export default AuthenticateRoutes;
