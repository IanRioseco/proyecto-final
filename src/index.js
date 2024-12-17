import React from "react";
import ReactDOM from "react-dom/client";
import DeckBuilder from "./components/Deckbuilder"; // Importa tu componente principal
import "./index.css"; // Tu archivo de estilos opcional
import "./components/CardSearch.css"; // Tu archivo de estilos opcional
import "./components/Deckbuilder.css"; // Tu archivo de estilos opcional

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DeckBuilder />
  </React.StrictMode>
);
