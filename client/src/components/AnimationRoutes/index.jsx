import React from "react";
import { useNavigate, Route, Routes, useLocation } from "react-router-dom";
import Acceuil from "../../pages/Acceuil";
import ListCollaborateursCard from "../../pages/ListCollaborateurs";
import AjoutCollaborateur from "../../pages/AjoutCollaborateur";
import ModifierCollaborateur from "../../pages/ModifierCollaborateur";
import Profile from "../../pages/Profile";
import Connexion from "../../pages/Connexion";
import Layout from "../../pages/Layout";
import AuthenticateRoutes from "../AuthenticateRoutes";
import { AnimatePresence } from "framer-motion";

const AnimationRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <AuthenticateRoutes>
                <Acceuil />
              </AuthenticateRoutes>
            }
          />
          <Route
            path="listes-collaborateurs"
            element={
              <AuthenticateRoutes>
                <ListCollaborateursCard />
              </AuthenticateRoutes>
            }
          />
          <Route
            path="ajouter-collaborateurs"
            element={
              <AuthenticateRoutes isAdminRequire={true}>
                <AjoutCollaborateur />
              </AuthenticateRoutes>
            }
          />
          <Route
            path="modifier-collaborateurs/:id"
            element={
              <AuthenticateRoutes isAdminRequire={true}>
                <ModifierCollaborateur />
              </AuthenticateRoutes>
            }
          />

          <Route
            path="profil"
            element={
              <AuthenticateRoutes>
                <Profile />
              </AuthenticateRoutes>
            }
          />
        </Route>

        <Route path="connexion" element={<Connexion />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimationRoutes;
