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
<<<<<<< HEAD
          <li><Link to="/Home">Inicio</Link></li> {/* Enlace a Inicio */}
          <li><Link to="/Deckbuilder">Crear Mazo</Link></li> {/* Enlace a Crear Mazo */}
          <li><Link to="/MyDecks">Mis Mazos</Link></li> {/* Enlace a Mis Mazos */}
          <li><Link to="/help">Ayuda</Link></li> {/* Enlace a Ayuda */}
=======
          <li><Link to="/Home">Inicio</Link></li>
          <li><Link to="/Deckbuilder">Crear Mazo</Link></li>
          <li><Link to="/MyDecks">Mis Mazos</Link></li>
          <li><Link to="/Help">Ayuda</Link></li>
>>>>>>> 38b597aeaedb500b60ec8ef9282ab2b9fc3f6562
        </ul>

      </nav>
    </header>
  );
}

export default Header;
