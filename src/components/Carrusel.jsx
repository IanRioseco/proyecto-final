import React, { useState, useEffect } from 'react';
import './Carrusel.css';

// Asumiendo que tienes las imágenes en la carpeta 'assets' dentro del proyecto
const Carrusel = ({ interval = 2600 }) => {
  // Rutas de las imágenes dentro de la carpeta 'assets'
  const images = [
    "/assets/carrusel1.jpg",
    "/assets/carrusel2.jpg",
    "/assets/carrusel3.jpg",
    "/assets/carrusel4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambia la imagen cada cierto intervalo
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(timer);
  }, [images.length, interval]);

  // Función para ir a la siguiente imagen
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Función para ir a la imagen anterior
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carrusel-container">  {/* Contenedor principal del componente*/}
      <button className="prev-btn" onClick={prevImage}>  {/* Botón para ir a la imagen anterior*/}
        &lt;    
      </button> {/* Botón para ir a la imagen anterior*/}
      <div className="carrusel-image"> {/* Contenedor para la imagen */}
        <img src={images[currentIndex]} alt={`Imagen ${currentIndex + 1}`} /> {/* Imagen actual */}
      </div>
      <button className="next-btn" onClick={nextImage}>  {/* Botón para ir a la siguiente imagen*/}
        &gt; 
      </button> {/* Botón para ir a la siguiente imagen*/}
      <div className="button-container">  {/* Contenedor para los botones*/}
        <button className="gallery-btn">Ver la Galería de Cartas</button> {/* Botón para ver la galería de cartas*/}
      </div>
    </div>  
  );
};

export default Carrusel; // Exporta el componente
