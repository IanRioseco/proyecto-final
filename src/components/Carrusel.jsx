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
    <div className="carrusel-container">
      <button className="prev-btn" onClick={prevImage}>
        &lt;
      </button>
      <div className="carrusel-image">
        <img src={images[currentIndex]} alt={`Imagen ${currentIndex + 1}`} />
      </div>
      <button className="next-btn" onClick={nextImage}>
        &gt;
      </button>
    </div>
  );
};

export default Carrusel;
