import React, { useState } from "react";
import "./Card.css";

function Card({ card, onRemove }) { // Propiedades del componente
  const [isActive, setIsActive] = useState(false);  // Estado para activar o desactivar la carta

  const toggleActive = () => { // Función para activar o desactivar la carta
    setIsActive((prevState) => !prevState); // Alterna entre activo e inactivo
  };

  return (
    <div
      className={`card-container ${isActive ? "active" : ""}`} // Clase para activar o desactivar la carta
      onClick={toggleActive} // Función para activar o desactivar la carta
    >
      <img src={card.images.large} alt={card.name} className="card-image" /> {/* Imagen de la carta */}
      {!isActive && ( // Si la carta no está activa
        <>
          <p>{card.name}</p> {/* Nombre de la carta */}
          <p>Tipo: {card.types?.join(",") || "N/A"}</p> {/* Tipo de la carta */}
          <button // Botón para eliminar la carta
            onClick={(e) => { // Función para eliminar la carta
              e.stopPropagation(); // Evita que el clic se propague al contenedor
              onRemove(card.id); // Llama a la función de eliminar la carta
            }}
          >
            Eliminar
          </button>
        </>
      )}
    </div>
  );
}

export default Card; // Exporta el componente
