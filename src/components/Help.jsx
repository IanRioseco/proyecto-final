// help.jsx
/**
 * Página de Ayuda (Help)
 * 
 * Este archivo contiene la estructura y el contenido de la página de ayuda para la aplicación TGC Pokémon Deck Builder.
 * Proporciona instrucciones y secciones claras para que los usuarios aprendan a utilizar las funcionalidades de la aplicación.
 */

import React from 'react';
import './Help.css';    

const Help = () => {
    return (
        <div className="help-container">
            <header className="help-header">
                <h1>Ayuda</h1>
            </header>
            <section className="help-section">
                <h2>¿Cómo construir un mazo?</h2>
                <p>Para construir un mazo, selecciona tus cartas favoritas en la sección de "Deck Builder". Puedes filtrar las cartas por tipo, energía, y habilidad.</p>
            </section>
            <section className="help-section">
                <h2>¿Cómo buscar cartas específicas?</h2>
                <p>Utiliza la barra de búsqueda en la página principal para encontrar cartas específicas por nombre, número, o tipo.</p>
            </section>
            <section className="help-section">
                <h2>¿Cómo compartir tu mazo?</h2>
                <p>Una vez que termines tu mazo, haz clic en el botón "Compartir" para generar un enlace que puedes enviar a tus amigos.</p>
            </section>
            <section className="help-section">
                <h2>¿Dónde puedo ver las reglas del juego?</h2>
                <p>Las reglas del juego están disponibles en la sección "Reglas" del menú principal. Asegúrate de revisarlas para aprender estrategias y mejores prácticas.</p>
            </section>
        </div>
    );
};

export default Help;
