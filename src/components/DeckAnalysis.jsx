import React from "react";
import "./DeckAnalysis.css"; // Ensure you have styles for this component

function DeckAnalysis({ deck = [] }) { // Default deck to an empty array
  // Contar el total de cartas
  const totalCards = deck.length;
  const getrandomColor = () => {
    const r = Math.floor(Math.random() * 128) + 128;
    const g = Math.floor(Math.random() * 128) + 128;
    const b = Math.floor(Math.random() * 128) + 128;
    return `rgb(${r}, ${g}, ${b})`;
  };

  // Contar la distribución de tipos
  const typeCount = deck.reduce((acc, card) => {
    // Ensure the card has a types property that is an array
    if (card.types && Array.isArray(card.types)) {
      card.types.forEach((type) => {
        acc[type] = (acc[type] || 0) + 1; // Incrementa el contador del tipo
      });
    }
    return acc;
  }, {});

  return (
    <div className="deck-analysis" >
      <h2>Análisis de tu Mazo</h2>
      <p>Total de cartas: {totalCards}</p>
      <h3>Distribución de Tipos</h3>
      <ul>
        {Object.entries(typeCount).map(([type, count]) => (
          <li key={type} >
            {type}: {count} cartas
          </li>
        ))}
      </ul>
      <div className="type-chart">
        {Object.entries(typeCount).map(([type, count]) => (
          <div key={type} className="type-bar" style={{ backgroundColor: getrandomColor(), height: `${count * 10}px` }}>
            {type}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeckAnalysis;
