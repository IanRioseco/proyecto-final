import React, { useState } from 'react';
import axios from 'axios';
import './CardSearch.css'; // Importa el archivo de estilos

function CardSearch({ onAdd }) {
    const [search, setSearch] = useState(''); // Estado para la búsqueda
    const [cards, setCards] = useState([]); // Estado para las cartas obtenidas
    const [currentIndex, setCurrentIndex] = useState(0); // Índice del slider
    const [mensaje, setMensaje] = useState(''); // Estado para el mensaje

    const CARDS_PER_PAGE = 8; // Mostrar 8 cartas por página (2 filas de 4)

    // Función para obtener las cartas de la API
    const fetchCards = async () => {
        setMensaje('Buscando cartas...'); // Limpia el mensaje
        try {
            const response = await axios.get(`https://api.pokemontcg.io/v2/cards?q=name:${search}`);
            setCards(response.data.data); // Guarda las cartas obtenidas
            setCurrentIndex(0); // Reinicia el índice del slider
            setMensaje(`Encontradas ${response.data.data.length} cartas.`); // Muestra cuántas cartas se encontraron
            
            // Limpia el mensaje después de 10 segundos
            setTimeout(() => {
                setMensaje('');
            }, 10000);
        } catch (error) {
            console.error("Error al buscar cartas:", error);
        }
    };

    // Botón para retroceder
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - CARDS_PER_PAGE, 0));
    };

    // Botón para avanzar
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            Math.min(prevIndex + CARDS_PER_PAGE, Math.floor(cards.length / CARDS_PER_PAGE) * CARDS_PER_PAGE)
        );
    };

    return (
        <div className="card-search">
            {/* Barra de búsqueda */}
            <div className="search-controls">
                <input
                    type="text"
                    placeholder="Busca un Pokémon por su nombre"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={fetchCards}>Buscar</button>
            </div>
            {mensaje && <p className="search-message">{mensaje}</p>} {/* Muestra el mensaje si existe */}

            {/* Slider de cartas */}
            <div className="slider-container">
                <button
                    className="nav-button"
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                >
                    ◀
                </button>

                <div className="cards-grid">
                    {cards.slice(currentIndex, currentIndex + CARDS_PER_PAGE).map((card) => (
                        <div key={card.id} className="card-item">
                            <img src={card.images.large} alt={card.name} loading="lazy" />
                            <button onClick={() => onAdd(card)}>Añadir al Mazo</button>
                        </div>
                    ))}
                </div>

                <button
                    className="nav-button"
                    onClick={handleNext}
                    disabled={currentIndex + CARDS_PER_PAGE >= cards.length}
                >
                    ▶
                </button>
            </div>
        </div>
    );
}

export default CardSearch;
