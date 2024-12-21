import React, { useState, useEffect } from 'react';
import './Home.css';
import Carrusel from './Carrusel'; // Componente Carrusel

function Home() {
  // Estado para controlar la visibilidad de la información
  const [showInfo, setShowInfo] = useState({
    nombre: false,
    tipo: false,
    ataques: false,
    retirada: false,
  });

  // Estado para almacenar la carta aleatoria
  const [randomCard, setRandomCard] = useState(null);

  // Función para alternar la visibilidad de la información
  const toggleInfo = (section) => {
    setShowInfo((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

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
      style={{ backgroundImage: 'url(/assets/backgraund.jpg)' }} // Ruta pública de la imagen
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
        <div className="hero-image"> {/* Contenedor para la imagen de la sección Hero */}
          <img src="/assets/hero-banner.png" alt="Pokémon Cards Banner" /> {/* Imagen de la sección Hero */}
        </div>
      </div>

      {/* Características principales */}
      <div className="features"> {/* Contenedor para las características principales */}
        <h2>Características</h2> {/*Título de las características*/}
        <div className="features-grid"> {/* Contenedor para la grilla de características */}
          <div className="feature"> {/* Contenedor para una característica */}
            <img src="/assets/deck.png" alt="Icono Mazo" /> {/*Imagen de la característica*/}
            <h3>Crea tu Mazo</h3>
            <p>Elige entre una amplia variedad de cartas Pokémon y crea tu mazo personalizado para tus batallas.</p>
          </div>
          <div className="feature"> {/* Contenedor para una característica */}
            <img src="/assets/suggestions.png" alt="Icono Sugerencias" /> {/*Imagen de la característica*/}
            <h3>Obtén Sugerencias</h3> 
            <p>Recibe recomendaciones de cartas clave para mejorar tu estrategia y hacer tu mazo más competitivo.</p>
          </div>
          <div className="feature"> {/* Contenedor para una característica */}
            <img src="/assets/manage.png" alt="Icono Organización" /> {/*Imagen de la característica*/}
            <h3>Organiza tu Mazo</h3> 
            <p>Administra tus cartas de manera eficiente para que siempre estés listo para el próximo combate.</p>
          </div>
        </div>
      </div>


      {/* Nueva Sección - Partes de una Carta de JCC Pokémon */}
      <div className="card-parts"> {/* Contenedor para la sección de las partes de una carta de JCC Pokémon */}
        <div className="card-parts-title"> {/* Contenedor para el título de la sección */}
          <h2>¿Cuáles son las partes de una carta de JCC Pokémon?</h2>
        </div>

        <div className="card-parts-content"> {/* Contenedor para el contenido de la sección */}
          {/* Información de las partes */} 
          <div className="info-sections"> {/* Contenedor para la información de las partes */}
            {/* Parte 1 */} 
            <div className="card-part"> {/* Contenedor para la parte 1 */}
              <div className="card-part-header"> {/* Contenedor para el encabezado de la parte 1 */}
                <div className="card-part-title"> {/* Contenedor para el título de la parte 1 */}
                  <h3> Nombre de la carta</h3>
<<<<<<< HEAD
                </div>
                <div className="card-part-button"> {/* Contenedor para el botón de la parte 1 */}
                  <button
                    onClick={() => toggleInfo('nombre')} // Función para alternar la información
                    className={`toggle-button ${showInfo.nombre ? 'active' : ''}`} // Clase para activar o desactivar la información
                  >
                    {showInfo.nombre ? '-' : '+'} {/* Texto del botón */}
                  </button>
=======
                  <p>En el formato de juego Estándar, puedes tener un máximo de cuatro cartas con el mismo nombre en tu baraja. Las cartas de Energía son la excepción a esta regla.</p>
>>>>>>> 38b597aeaedb500b60ec8ef9282ab2b9fc3f6562
                </div>
              </div>
            </div>

            {/* Parte 2 */}
            <div className="card-part"> {/* Contenedor para la parte 2 */}
              <div className="card-part-header"> {/* Contenedor para el encabezado de la parte 2 */}
                <div className="card-part-title"> {/* Contenedor para el título de la parte 2 */}
                  <h3>Tipo del Pokémon y PS</h3>
<<<<<<< HEAD
                </div>
                <div className="card-part-button"> {/* Contenedor para el botón de la parte 2 */}
                  <button 
                    onClick={() => toggleInfo('tipo')} // Función para alternar la información
                    className={`toggle-button ${showInfo.tipo ? 'active' : ''}`} // Clase para activar o desactivar la información
                  >
                    {showInfo.tipo ? '-' : '+'} {/* Texto del botón */}
                  </button>
=======
                  <p>Indica el tipo del Pokémon y cuánto daño puede recibir antes de quedar Fuera de Combate. Cada Pokémon tiene su propia Debilidad y Resistencia, recogidas en la parte inferior de la carta. Recuerda esto cuando te prepares para tu próximo combate.</p>
>>>>>>> 38b597aeaedb500b60ec8ef9282ab2b9fc3f6562
                </div>
              </div>
            </div>

            {/* Parte 3 */}
            <div className="card-part"> {/* Contenedor para la parte 3 */}
              <div className="card-part-header"> {/* Contenedor para el encabezado de la parte 3 */}
                <div className="card-part-title"> {/* Contenedor para el título de la parte 3 */}
                  <h3>Ataques</h3>
<<<<<<< HEAD
                </div>
                <div className="card-part-button"> {/* Contenedor para el botón de la parte 3 */}
                  <button
                    onClick={() => toggleInfo('ataques')} // Función para alternar la información
                    className={`toggle-button ${showInfo.ataques ? 'active' : ''}`} // Clase para activar o desactivar la información
                  >
                    {showInfo.ataques ? '-' : '+'}
                  </button>
=======
                  <p>Indica el tipo del Pokémon y cuánto daño puede recibir antes de quedar Fuera de Combate. Cada Pokémon tiene su propia Debilidad y Resistencia, recogidas en la parte inferior de la carta. Recuerda esto cuando te prepares para tu próximo combate.</p>
>>>>>>> 38b597aeaedb500b60ec8ef9282ab2b9fc3f6562
                </div>
              </div>
            </div>

            {/* Parte 4 */}
            <div className="card-part"> {/* Contenedor para la parte 4 */}
              <div className="card-part-header"> {/* Contenedor para el encabezado de la parte 4 */}
                <div className="card-part-title"> {/* Contenedor para el título de la parte 4 */}
                  <h3>Coste de Retirada</h3>
<<<<<<< HEAD
                </div>
                <div className="card-part-button"> {/* Contenedor para el botón de la parte 4 */}
                  <button
                    onClick={() => toggleInfo('retirada')} // Función para alternar la información
                    className={`toggle-button ${showInfo.retirada ? 'active' : ''}`} // Clase para activar o desactivar la información
                  >
                    {showInfo.retirada ? '-' : '+'}
                  </button>
=======
                  <p>Esta es la cantidad de Energía necesaria para retirar a tus Pokémon del Puesto Activo a la Banca. Para realizar esta acción, debes descartar dicha cantidad de Energía del Pokémon Activo y sustituirlo por un Pokémon de tu Banca.</p>
>>>>>>> 38b597aeaedb500b60ec8ef9282ab2b9fc3f6562
                </div>
              </div>

            </div>
          </div>

          {/* Carta aleatoria */}
          <div className="random-card-container"> {/* Contenedor para la carta aleatoria */}
            {randomCard ? (
              <div className="card"> {/* Contenedor para la carta */}
                <img src={randomCard.images.large} alt={randomCard.name} /> {/* Imagen de la carta */}
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
