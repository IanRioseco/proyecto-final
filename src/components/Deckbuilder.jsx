import React, { useState, useEffect } from "react";
import CardSearch from "./CardSearch";
import Card from "./Card";
import DeckAnalysis from "./DeckAnalysis";
import Suggestions from "./Suggestions";

function DeckBuilder() {
  const [deck, setDeck] = useState([]);

  // Cargar el mazo desde localStorage al iniciar la app
  useEffect(() => {
    const savedDeck = localStorage.getItem("pokemonDeck");
    if (savedDeck) {
      setDeck(JSON.parse(savedDeck));
    }
  }, []);

  // Guardar el mazo en localStorage cada vez que se modifique
  useEffect(() => {
    localStorage.setItem("pokemonDeck", JSON.stringify(deck));
  }, [deck]);

  const addCardToDeck = (card) => {
    if (deck.length < 60) {
      setDeck((prevDeck) => [...prevDeck, card]);
    } else {
      alert("El mazo no puede tener más de 60 cartas.");
    }
  };

  const removeCardFromDeck = (id) => {
    setDeck((prevDeck) => prevDeck.filter((card) => card.id !== id));
  };

  const clearDeck = () => {
    if (window.confirm("¿Estás seguro de que quieres limpiar tu mazo?")) {
      setDeck([]);
    }
  };

  return (
    <div>
      <h1>Construye tu Mazo Pokémon</h1>
      <CardSearch onAdd={addCardToDeck} />
      <h2>Tu Mazo ({deck.length}/60):</h2>
      <button onClick={clearDeck}>Limpiar Mazo</button>
      <div className="deck">
        {deck.map((card) => (
          <Card key={card.id} card={card} onRemove={removeCardFromDeck} />
        ))}
      </div>
      <DeckAnalysis deck={deck} />
      <Suggestions deck={deck} />
    </div>
  );
}

export default DeckBuilder;
