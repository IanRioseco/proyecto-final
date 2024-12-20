import React, { useState, useEffect } from 'react';
import './Home.css';
import Carrusel from './Carrusel'; // Componente Carrusel

function Home() {
  // Estado para controlar la visibilidad de la información


  // Estado para almacenar la carta aleatoria
  const [randomCard, setRandomCard] = useState(null);



  // Obtener una carta aleatoria desde la API al cargar el componente
  useEffect(() => {
    const fetchRandomCard = async () => {
      try {
        const response = await fetch('https://api.pokemontcg.io/v2/cards?pageSize=1&random=true');
        const data = await response.json();
        setRandomCard(data.data[0]); // Obtén la primera carta aleatoria
      } catch (error) {
        console.error('Error al obtener la carta aleatoria:', error);
      }
    };

    fetchRandomCard();
  }, []);

  return (
    <section
      id="home" // ID del componente
      className="home-container" // Clase para el componente
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/backgraund.jpg)`, }} // Ruta pública de la imagen
    >
      {/* Carrusel - Primero */} 
      <div className="carrusel-section"> {/* Contenedor para el componente Carrusel */}
        <Carrusel interval={3000} /> {/* Carrusel al inicio */}
      </div>

      {/* Sección Hero */}
      <div className="hero"> {/* Contenedor para la sección Hero */}
        <div className="hero-text"> {/* Contenedor para el texto de la sección Hero */}
          <h1>¡Crea, Organiza y Domina con PokéMazo!</h1>
          <p>Construye el mazo perfecto para tus batallas Pokémon y lleva tu estrategia al siguiente nivel.</p>
        </div>
      </div>

      {/* Características principales */}
      <div className="features"> 
        <h2>Características</h2> 
        <div className="features-grid">
          <div className="feature"> 
          <img src={`${process.env.PUBLIC_URL}/assets/deck.png`} alt="Icono Mazo" /> {/*Imagen de la característica*/}
            <h3>Crea tu Mazo</h3>
            <p>Elige entre una amplia variedad de cartas Pokémon y crea tu mazo personalizado para tus batallas.</p>
          </div>
          <div className="feature"> {/* Contenedor para una característica */}
          <img src={`${process.env.PUBLIC_URL}/assets/suggestions.png`} alt="Icono Sugerencias" /> {/*Imagen de la característica*/}
            <h3>Obtén Sugerencias</h3> 
            <p>Recibe recomendaciones de cartas clave para mejorar tu estrategia y hacer tu mazo más competitivo.</p>
          </div>
          <div className="feature"> {/* Contenedor para una característica */}
          <img src={`${process.env.PUBLIC_URL}/assets/manage.png`} alt="Icono Organización" /> {/*Imagen de la característica*/}
            <h3>Organiza tu Mazo</h3> 
            <p>Administra tus cartas de manera eficiente para que siempre estés listo para el próximo combate.</p>
          </div>
        </div>
      </div>


      {/* Nueva Sección - Partes de una Carta de JCC Pokémon */}
      <div className="card-parts">
        <div className="card-parts-title"> 
          <h2>¿Cuáles son las partes de una carta de JCC Pokémon?</h2>
        </div>

        <div className="card-parts-content">
          <div className="info-sections"> 
            {/* Parte 1 */} 
            <div className="card-part"> 
              <div className="card-part-header"> 
                <div className="card-part-title"> 
                  <h3> Nombre de la carta</h3>
                  <p>En el formato de juego Estándar, puedes tener un máximo de cuatro cartas con el mismo nombre en tu baraja. Las cartas de Energía son la excepción a esta regla.</p>
                </div>
              </div>
            </div>

            {/* Parte 2 */}
            <div className="card-part"> 
              <div className="card-part-header"> 
                <div className="card-part-title"> 
                  <h3>Tipo del Pokémon y PS</h3>
                  <p>Indica el tipo del Pokémon y cuánto daño puede recibir antes de quedar Fuera de Combate. Cada Pokémon tiene su propia Debilidad y Resistencia, recogidas en la parte inferior de la carta. Recuerda esto cuando te prepares para tu próximo combate.</p>
                </div>
              </div>
            </div>

            {/* Parte 3 */}
            <div className="card-part"> 
              <div className="card-part-header"> 
                <div className="card-part-title">
                  <h3>Ataques</h3>
                  <p>Indica el tipo del Pokémon y cuánto daño puede recibir antes de quedar Fuera de Combate. Cada Pokémon tiene su propia Debilidad y Resistencia, recogidas en la parte inferior de la carta. Recuerda esto cuando te prepares para tu próximo combate.</p>
                </div>
              </div>
            </div>

            {/* Parte 4 */}
            <div className="card-part"> 
              <div className="card-part-header"> 
                <div className="card-part-title"> 
                  <h3>Coste de Retirada</h3>
                  <p>Esta es la cantidad de Energía necesaria para retirar a tus Pokémon del Puesto Activo a la Banca. Para realizar esta acción, debes descartar dicha cantidad de Energía del Pokémon Activo y sustituirlo por un Pokémon de tu Banca.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Carta aleatoria */}
          <div className="random-card-container"> {/* Contenedor para la carta aleatoria */}
            {randomCard ? (
              <div className="card"> 
                <img src={randomCard.images.large} alt={randomCard.name} /> 
                <p>{randomCard.name}</p>
              </div>
            ) : (
              <p>Cargando carta...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home; // Exporta el componente
