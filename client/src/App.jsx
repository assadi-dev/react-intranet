import { useEffect, useState } from "react";
import "./style/App.css";
import { useNavigate, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Acceuil from "./pages/Acceuil";
import Connexion from "./pages/Connexion";
import { STORAGE_NAME } from "./services/const";
import useStorage from "./hooks/useStorage";
import useFetchData from "./hooks/useFetch";
import ListCollaborateurs from "./pages/ListCollaborateurs";

function App() {
  const navigate = useNavigate();
  const storage = useStorage(STORAGE_NAME);

  useEffect(() => {
    if (!storage.getItem(STORAGE_NAME)) {
      navigate("/connexion", {
        replace: true,
      });
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Acceuil />} />
          <Route
            path="listes-collaborateurs"
            element={<ListCollaborateurs />}
          />
          {/* <Route index element={<Home />} />
          <Route path="recette/:id" element={<RecipesDetails />} />
          <Route path="recette/modifier/:id" element={<EditRecipe />} />
          <Route path="recette/ajouter" element={<AddRecipe />} /> */}
        </Route>
        <Route path="connexion" element={<Connexion />} />
      </Routes>
    </div>
  );
}

export default App;
