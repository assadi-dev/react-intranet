import { Profiler, useEffect, useState } from "react";
import "./style/App.css";
import { useNavigate, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Acceuil from "./pages/Acceuil";
import Connexion from "./pages/Connexion";
import { STORAGE_NAME } from "./services/const";
import useStorage from "./hooks/useStorage";
import useFetchData from "./hooks/useFetch";
import ListCollaborateurs from "./pages/ListCollaborateurs";
import { fetchOwnUserAsync } from "./features/ownUser/ownUserAsyncAction";
import { useDispatch, useSelector } from "react-redux";
import { extractIduser } from "./services/utils";
import AuthenticateRoutes from "./components/AuthenticateRoutes";
import AjoutCollaborateur from "./pages/AjoutCollaborateur";
import Profile from "./pages/Profile";

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
        <Route
          path="/"
          element={
            <AuthenticateRoutes isAdminRequire={true}>
              <Layout />
            </AuthenticateRoutes>
          }
        >
          <Route index element={<Acceuil />} />
          <Route
            path="listes-collaborateurs"
            element={<ListCollaborateurs />}
          />
          <Route path="ajouter-utilsateur" element={<AjoutCollaborateur />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="connexion" element={<Connexion />} />
      </Routes>
    </div>
  );
}

export default App;
