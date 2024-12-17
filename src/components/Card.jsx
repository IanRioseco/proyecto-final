import React from 'react';

function Card({card, onRemove}) {
    return (
        <div className="card">
            <img src={card.images.small} alt={card.name} />
            <h3>{card.name}</h3>
            <p> Tipo: {card.types?.join(",") || "N/A"}</p>
            <button onClick={() => onRemove(card.id)}>Quitar</button>
        </div>
    )
}

export default Card;