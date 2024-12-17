import React, { useState, useEffect } from "react";
import axios from "axios";

function Suggestions({ deck }) {
  const [suggestedCards, setSuggestedCards] = useState([]);

  const getSuggestions = async () => {
    // Analizar el mazo
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

    // Identificar el supertype con menos cartas
    const [weakestType] = Object.entries(typeCounts).sort((a, b) => a[1] - b[1])[0];

    try {
      const response = await axios.get(
        `https://api.pokemontcg.io/v2/cards?q=supertype:${weakestType}`
      );
      setSuggestedCards(response.data.data.slice(0, 5)); // Sugerir las primeras 5 cartas
    } catch (error) {
      console.error("Error al obtener sugerencias:", error);
    }
  };

  useEffect(() => {
    if (deck.length > 0) {
      getSuggestions();
    }
  }, [deck]);

  return (
    <div>
      <h2>Sugerencias para Mejorar tu Mazo</h2>
      {suggestedCards.length === 0 ? (
        <p>No hay sugerencias disponibles. Completa tu mazo primero.</p>
      ) : (
        <div className="suggestions">
          {suggestedCards.map((card) => (
            <div key={card.id} className="suggestion-card">
              <img src={card.images.small} alt={card.name} />
              <p>{card.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Suggestions;
