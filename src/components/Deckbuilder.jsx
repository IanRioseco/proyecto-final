import React, { useState, useEffect } from "react";
import CardSearch from "./CardSearch";
import Card from "./Card";
import "./Card.css";
import DeckAnalysis from "./DeckAnalysis";
import Suggestions from "./Suggestions";
import "./Deckbuilder.css"; // Importamos estilos para personalizar
import "./DeckAnalysis.css";

function DeckBuilder() { // Propiedades del componente
  const [deck, setDeck] = useState([]); // Estado para almacenar el mazo

  // Cargar el mazo desde localStorage al iniciar la app
  useEffect(() => {
    const savedDeck = localStorage.getItem("pokemonDeck"); // Obtenemos el mazo desde localStorage
    if (savedDeck) { // Si existe
      setDeck(JSON.parse(savedDeck)); // Lo cargamos en el estado
    }
  }, []);

  // Guardar el mazo en localStorage cada vez que se modifique
  useEffect(() => { // Cuando el estado cambie
    localStorage.setItem("pokemonDeck", JSON.stringify(deck)); // Lo guardamos en localStorage
  }, [deck]); 


  const addCardToDeck = (card) => { // Función para añadir una carta al mazo
    if (deck.length < 60) {
      setDeck((prevDeck) => [...prevDeck, card]); // Añade la carta al mazo
    } else {  
      alert("El mazo no puede tener más de 60 cartas.");
    }
  };

  const removeCardFromDeck = (id) => { // Función para eliminar una carta del mazo
    setDeck((prevDeck) => prevDeck.filter((card) => card.id !== id)); // Elimina la carta del mazo
  };

  const clearDeck = () => { // Función para limpiar el mazo
    if (window.confirm("¿Estás seguro de que quieres limpiar tu mazo?")) {
      setDeck([]);
    }
  };

  return ( 
    <div className="deck-builder-container" 
    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/backgraund.jpg)`, }}> {/* Ruta pública de la imagen */}
      <h1>Construye tu Mazo Pokémon</h1>
      <CardSearch onAdd={addCardToDeck} />
      <div className="clear-deck-button-container">
        <h2>Tu Mazo ({deck.length}/60)</h2>
        <button className="clear-deck-button" onClick={clearDeck}> {/*Botón para limpiar*/}
          Limpiar Mazo 
        </button> 
      </div> 
      <div className="deck-grid">
        {deck.map((card) => (
          <Card key={card.id} card={card} onRemove={removeCardFromDeck} /> // Clave para identificar la carta
        ))}
      </div>
      <DeckAnalysis deck={deck} /> 
      <Suggestions deck={deck} onAdd={addCardToDeck} />
    </div>
  );
}

export default DeckBuilder; // Exporta el componente
