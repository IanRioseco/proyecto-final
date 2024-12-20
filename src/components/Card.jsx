import React, { useState } from "react";
import "./Card.css";

function Card({ card, onRemove }) {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive((prevState) => !prevState); // Alterna entre activo e inactivo
  };

  return (
    <div
      className={`card-container ${isActive ? "active" : ""}`}
      onClick={toggleActive}
    >
      <img src={card.images.small} alt={card.name} className="card-image" />
      {!isActive && (
        <>
          <p>{card.name}</p>
          <p>Tipo: {card.types?.join(",") || "N/A"}</p>
          <button
            onClick={(e) => {
              e.stopPropagation(); // Evita que el clic se propague al contenedor
              onRemove(card.id);
            }}
          >
            Eliminar
          </button>
        </>
      )}
    </div>
  );
}

export default Card;
