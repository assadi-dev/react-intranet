import { useState } from "react";
import "./style/App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Acceuil from "./pages/Acceuil";
import Connexion from "./pages/Connexion";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Connexion />} />
          <Route element={<Acceuil />} />
          {/* <Route index element={<Home />} />
          <Route path="recette/:id" element={<RecipesDetails />} />
          <Route path="recette/modifier/:id" element={<EditRecipe />} />
          <Route path="recette/ajouter" element={<AddRecipe />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
