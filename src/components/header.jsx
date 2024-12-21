import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';


function Header() {
  return (
    <header>
      <div className='imagesHeader'> {/* Contenedor para las imágenes de la cabecera */}

        <img className='poketitulo' src='/assets/poketitulo.png' alt='poketitulo'/> {/* Imagen de la cabecera */}

      </div>
      <nav>
        <ul>
          <li><Link to="/Home">Inicio</Link></li> {/* Enlace a Inicio */}
          <li><Link to="/Deckbuilder">Crear Mazo</Link></li> {/* Enlace a Crear Mazo */}
          <li><Link to="/MyDecks">Mis Mazos</Link></li> {/* Enlace a Mis Mazos */}
          <li><Link to="/help">Ayuda</Link></li> {/* Enlace a Ayuda */}
        </ul>

      </nav>
    </header>
  );
}

export default Header;
