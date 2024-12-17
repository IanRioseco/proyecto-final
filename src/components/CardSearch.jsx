import React, { useState } from 'react';
import axios from 'axios';

function CardSearch({ onAdd }) {
    const [search, setSearch] = useState('');
    const [cards, setCards] = useState([]);

    const fetchCards = async () => {
        if (!search.trim()) {
            console.warn("Por favor ingresa un nombre para buscar.");
            return;
        }

        try {
            const response = await axios.get(`https://api.pokemontcg.io/v2/cards?q=name:${search}`);
            setCards(response.data.data);
        } catch (error) {
            console.error("Error al buscar cartas:", error);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Busca un Pokémon por su nombre"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={fetchCards}>Buscar</button>

            <div className="search-results">
                {cards.length > 0 ? (
                    cards.map((card) => (
                        <div key={card.id} className="search-card">
                            <img src={card.images.small} alt={card.name} />
                            <p>{card.name}</p>
                            <p>Tipo: {card.types?.join(", ") || "N/A"}</p>
                            <button onClick={() => onAdd(card)}>Añadir al Mazo</button>
                        </div>
                    ))
                ) : (
                    <p>No se encontraron cartas. Intenta con otro nombre.</p>
                )}
            </div>
        </div>
    );
}

export default CardSearch;
