import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./Suggestions.css";

function Suggestions({ deck, onAdd }) {
  const [suggestedCards, setSuggestedCards] = useState([]);

  const getSuggestions = useCallback(async () => {
    // Analiza el mazo
    const typeCounts = { Pokémon: 0, Trainer: 0, Energy: 0 };
    const attributeCounts = {};


    deck.forEach((card) => { // Itera sobre cada carta del mazo
      if (card.supertype) { // Si la carta tiene un tipo superior
        typeCounts[card.supertype] = (typeCounts[card.supertype] || 0) + 1; // Incrementa el contador del tipo superior
      }
      if (card.types) { // Si la carta tiene tipos
        card.types.forEach((type) => { // Itera sobre cada tipo de la carta
          attributeCounts[type] = (attributeCounts[type] || 0) + 1; // Incrementa el contador del tipo
        });
      }
    });

    // Identifica el tipo con el menor número de cartas
    const [weakestType] = Object.entries(typeCounts).sort((a, b) => a[1] - b[1])[0];

    try { // Intenta obtener las cartas sugeridas
      const response = await axios.get( // Obtiene las cartas sugeridas
        `https://api.pokemontcg.io/v2/cards?q=supertype:${weakestType}` // Consulta las cartas con el tipo inferior
      ); 
      setSuggestedCards(response.data.data.slice(0, 4)); // Obtiene las primeras 4 cartas sugeridas
    } catch (error) { // Si ocurre algún error
      console.error("Error obtaining suggestions:", error); // Mostrar el error en la consola
    }
  }, [deck]); // Include deck as a dependency for the callback

  useEffect(() => { // Función para ejecutar la función de obtención de sugerencias cuando el mazo cambie
    if (deck.length > 0) { // Si el mazo no está vacío
        getSuggestions(); // Obtiene las sugerencias
    }
}, [deck, getSuggestions]);
 // Include getSuggestions in the dependency array

  return (
    <div className="suggestions-container"> {/* Contenedor principal del componente */}
      <h2>Sugerencias para Mejorar tu Mazo</h2>
      {deck.length === 0 ? (
        <p>No hay sugerencias disponibles. Completa tu mazo primero.</p>
      ) : (
        <div className="suggestions"> {/* Contenedor para las sugerencias */}
          {suggestedCards.map((card) => ( // Mapeo de cartas
            <div key={card.id} className="suggestion-card"> {/* Clave para identificar la carta */}
              <img src={card.images.large} alt={card.name} loading="lazy" /> {/* Imagen de la carta */}
              <p>{card.name}</p> {/* Nombre de la carta */}
              <button className="suggestions-button" onClick={() => onAdd(card)}> {/* Botón para añadir a la mazo */}
                Añadir al Mazo
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Suggestions; // Exporta el componente
