import { Profiler, useEffect, useState } from "react";
import "./style/App.css";
import { useNavigate, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Acceuil from "./pages/Acceuil";
import Connexion from "./pages/Connexion";
import { STORAGE_NAME } from "./services/const";
import useStorage from "./hooks/useStorage";
import ListCollaborateurs from "./pages/ListCollaborateurs";
import AuthenticateRoutes from "./components/AuthenticateRoutes";
import AjoutCollaborateur from "./pages/AjoutCollaborateur";
import Profile from "./pages/Profile";
import ModifierCollaborateur from "./pages/ModifierCollaborateur";

function App() {
  const navigate = useNavigate();
  const storage = useStorage(STORAGE_NAME);

  useEffect(() => {
    /*     if (!storage.getItem(STORAGE_NAME)) {
      navigate("/connexion", {
        replace: true,
      });
    } */
  }, []);

  return (
    <div className="App">
      <Routes>
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
                <ListCollaborateurs />
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
    </div>
  );
}

export default App;
