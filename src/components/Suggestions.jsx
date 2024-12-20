import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./Suggestions.css";

function Suggestions({ deck, onAdd }) {
  const [suggestedCards, setSuggestedCards] = useState([]);

  const getSuggestions = useCallback(async () => {
    // Analyze the deck
    const typeCounts = { Pokémon: 0, Trainer: 0, Energy: 0 };
    const attributeCounts = {};

    deck.forEach((card) => {
      if (card.supertype) {
        typeCounts[card.supertype] = (typeCounts[card.supertype] || 0) + 1;
      }
      if (card.types) {
        card.types.forEach((type) => {
          attributeCounts[type] = (attributeCounts[type] || 0) + 1;
        });
      }
    });

    // Identify the supertype with the least cards
    const [weakestType] = Object.entries(typeCounts).sort((a, b) => a[1] - b[1])[0];

    try {
      const response = await axios.get(
        `https://api.pokemontcg.io/v2/cards?q=supertype:${weakestType}`
      );
      setSuggestedCards(response.data.data.slice(0, 4)); // Suggest the first 5 cards
    } catch (error) {
      console.error("Error obtaining suggestions:", error);
    }
  }, [deck]); // Include deck as a dependency for the callback

  useEffect(() => {
    if (deck.length > 0) {
        getSuggestions();
    }
}, [deck, getSuggestions]);
 // Include getSuggestions in the dependency array

  return (
    <div className="suggestions-container">
      <h2>Sugerencias para Mejorar tu Mazo</h2>
      {deck.length === 0 ? (
        <p>No hay sugerencias disponibles. Completa tu mazo primero.</p>
      ) : (
        <div className="suggestions">
          {suggestedCards.map((card) => (
            <div key={card.id} className="suggestion-card">
              <img src={card.images.large} alt={card.name} loading="lazy" />
              <p>{card.name}</p>
              <button className="suggestions-button" onClick={() => onAdd(card)}>
                Añadir al Mazo
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Suggestions;
