// Home.jsx
import React from 'react';
import './Home.css';
import Carrusel from './Carrusel'; // Importa el componente Carrusel

function Home() {
  return (
    <section id="home" className="home-container">
      {/* Carrusel - Primero */}
      <div className="carrusel-section">
        <Carrusel interval={3000} /> {/* Carrusel al inicio */}
      </div>

      {/* Sección Hero */}
      <div className="hero">
        <div className="hero-text">
          <h1>¡Crea, Organiza y Domina con PokéMazo!</h1>
          <p>Construye el mazo perfecto para tus batallas Pokémon y lleva tu estrategia al siguiente nivel.</p>
          <button onClick={() => window.location.href = '#create-deck'}>Comienza Ahora</button>
        </div>
        <div className="hero-image">
          <img src="/assets/hero-banner.png" alt="Pokémon Cards Banner" />
        </div>
      </div>

      {/* Características principales */}
      <div className="features">
        <h2>Características</h2>
        <div className="features-grid">
          <div className="feature">
            <img src="/assets/icons/deck.png" alt="Icono Mazo" />
            <h3>Crea tu Mazo</h3>
            <p>Selecciona tus cartas favoritas y arma estrategias únicas.</p>
          </div>
          <div className="feature">
            <img src="/assets/icons/manage.png" alt="Icono Organización" />
            <h3>Organiza tus Cartas</h3>
            <p>Mantén todo en orden para un acceso rápido y eficiente.</p>
          </div>
          <div className="feature">
            <img src="/assets/icons/share.png" alt="Icono Compartir" />
            <h3>Comparte con Amigos</h3>
            <p>Enseña tus mazos y compite con otros entrenadores Pokémon.</p>
          </div>
        </div>
      </div>


    </section>
  );
}

export default Home;
