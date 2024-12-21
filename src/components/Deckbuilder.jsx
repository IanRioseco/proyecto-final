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
    const savedDeck = localStorage.getItem("pokemonDeck");
    if (savedDeck) {
      setDeck(JSON.parse(savedDeck));
    }
  }, []);

  // Guardar el mazo en localStorage cada vez que se modifique
  useEffect(() => {
    localStorage.setItem("pokemonDeck", JSON.stringify(deck));
  }, [deck]);


  const addCardToDeck = (card) => { // Función para añadir una carta al mazo
    if (deck.length < 60) { // Si el mazo no está lleno
      setDeck((prevDeck) => [...prevDeck, card]); // Añade la carta al mazo
    } else {  // Si el mazo está lleno
      alert("El mazo no puede tener más de 60 cartas.");
    }
  };

  const removeCardFromDeck = (id) => { // Función para eliminar una carta del mazo
    setDeck((prevDeck) => prevDeck.filter((card) => card.id !== id)); // Elimina la carta del mazo
  };

  const clearDeck = () => { // Función para limpiar el mazo
    if (window.confirm("¿Estás seguro de que quieres limpiar tu mazo?")) { // Si se confirma
      setDeck([]); // Limpia el mazo
    }
  };

  return ( 
    <div className="deck-builder-container"
    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/backgraund.jpg)`, }}> {/* Ruta pública de la imagen */}
      <h1>Construye tu Mazo Pokémon</h1> {/*Título del componente*/}
      <CardSearch onAdd={addCardToDeck} /> {/*Componente CardSearch*/}
      <div className="clear-deck-button-container"> {/* Contenedor para el botón de limpieza */}
        <h2>Tu Mazo ({deck.length}/60)</h2> {/*Título del botón*/}
        <button className="clear-deck-button" onClick={clearDeck}> {/*Botón para limpiar*/}
          Limpiar Mazo {/*Texto del botón*/}
        </button> 
      </div> 
      <div className="deck-grid"> {/* Contenedor para la grilla de cartas */}
        {deck.map((card) => ( // Mapeo de cartas
          <Card key={card.id} card={card} onRemove={removeCardFromDeck} /> // Clave para identificar la carta
        ))}
      </div>
      <DeckAnalysis deck={deck} /> {/*Componente DeckAnalysis*/}
      <Suggestions deck={deck} onAdd={addCardToDeck} /> {/*Componente Suggestions*/}
    </div>
  );
}

export default DeckBuilder; // Exporta el componente
