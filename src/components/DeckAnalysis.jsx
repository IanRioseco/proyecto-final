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
    // aseguramos que el tipo esté en el objeto
    if (card.types && Array.isArray(card.types)) {
      card.types.forEach((type) => {
        acc[type] = (acc[type] || 0) + 1; // Incrementa el contador del tipo
      });
    }
    return acc;
  }, {});

  return (
    <div className="deck-analysis" > {/* Contenedor principal del componente */}
      <h2>Análisis de tu Mazo</h2> {/*Título del componente*/}
      <p>Total de cartas: {totalCards}</p> {/*Total de cartas*/}
      <h3>Distribución de Tipos</h3> 
      <ul>
        {Object.entries(typeCount).map(([type, count]) => ( // Mapeo de tipos
          <li key={type} > {/*Clave para identificar el elemento*/}
            {type}: {count} cartas {/*Tipo y cantidad de cartas*/}
          </li>
        ))}
      </ul>
      <div className="type-chart"> {/* Contenedor para el gráfico de tipos */}
        {Object.entries(typeCount).map(([type, count]) => ( // Mapeo de tipos
          <div key={type} className="type-bar" style={{ backgroundColor: getrandomColor(), height: `${count * 10}px` }}> {/*Gráfico de tipos*/}
            {type} {/*Tipo*/}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeckAnalysis; // Exporta el componente
