import React from "react";
import "./DeckAnalysis.css"; // Ensure you have styles for this component

function DeckAnalysis({ deck = [] }) { // Default deck to an empty array
  // Contar el total de cartas
  const totalCards = deck.length; // Obtenemos el número de cartas
  const getrandomColor = () => {
    const r = Math.floor(Math.random() * 128) + 128; // Generamos un número aleatorio entre 128 y 255
    const g = Math.floor(Math.random() * 128) + 128; // Generamos un número aleatorio entre 128 y 255
    const b = Math.floor(Math.random() * 128) + 128; // Generamos un número aleatorio entre 128 y 255
    return `rgb(${r}, ${g}, ${b})`; // Retornamos el color generado
  };

  // Contar la distribución de tipos
  const typeCount = deck.reduce((acc, card) => { // Reduce para contar tipos
    // aseguramos que el tipo esté en el objeto
    if (card.types && Array.isArray(card.types)) { // Si el tipo está en el objeto
      card.types.forEach((type) => { // Iteramos sobre los tipos
        acc[type] = (acc[type] || 0) + 1; // Incrementa el contador del tipo
      });
    }
    return acc; // Devuelve el objeto actualizado
  }, {});

  return (
    <div className="deck-analysis" > {/* Contenedor principal del componente */}
      <h2>Análisis de tu Mazo</h2> 
      <p>Total de cartas: {totalCards}</p>
      <h3>Distribución de Tipos</h3> 
      <ul>
        {Object.entries(typeCount).map(([type, count]) => ( // Mapeo de tipos
          <li key={type} > 
            {type}: {count} cartas 
          </li>
        ))}
      </ul>
      <div className="type-chart"> 
        {Object.entries(typeCount).map(([type, count]) => ( // Mapeo de tipos
          <div key={type} className="type-bar" style={{ backgroundColor: getrandomColor(), height: `${count * 10}px` }}> {/*Gráfico de tipos*/}
            {type}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeckAnalysis; // Exporta el componente
