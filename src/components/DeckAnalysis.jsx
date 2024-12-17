import React from "react";

function DeckAnalysis({ deck }) {
  const analyzeDeck = () => {
    const typeCounts = { Pokémon: 0, Trainer: 0, Energy: 0 };
    const attributeCounts = {};

    deck.forEach((card) => {
      // Contar por supertype
      if (card.supertype) {
        typeCounts[card.supertype] = (typeCounts[card.supertype] || 0) + 1;
      }

      // Contar por tipos (atributos como Fuego, Agua)
      if (card.types) {
        card.types.forEach((type) => {
          attributeCounts[type] = (attributeCounts[type] || 0) + 1;
        });
      }
    });

    return { typeCounts, attributeCounts };
  };

  const { typeCounts, attributeCounts } = analyzeDeck();

  return (
    <div>
      <h2>Análisis del Mazo</h2>
      <div>
        <h3>Distribución por Supertype:</h3>
        <ul>
          <li>Pokémon: {typeCounts["Pokémon"]}</li>
          <li>Trainer: {typeCounts["Trainer"]}</li>
          <li>Energy: {typeCounts["Energy"]}</li>
        </ul>
      </div>
      <div>
        <h3>Distribución por Tipo Elemental:</h3>
        <ul>
          {Object.entries(attributeCounts).map(([type, count]) => (
            <li key={type}>
              {type}: {count}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DeckAnalysis;
