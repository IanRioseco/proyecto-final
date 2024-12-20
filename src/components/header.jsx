import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';


function Header() {
  return (
    <header>
      <div className='imagesHeader'> {/* Contenedor para las imágenes de la cabecera */}

      <img src={`${process.env.PUBLIC_URL}/assets/poketitulo.png`} alt='poketitulo' className='poketitulo'/>


      </div>
      <nav>
        <ul>
          <li><Link to="/Home">Inicio</Link></li>
          <li><Link to="/Deckbuilder">Crear Mazo</Link></li>
          <li><Link to="/MyDecks">Mis Mazos</Link></li>
          <li><Link to="/Help">Ayuda</Link></li>
        </ul>

      </nav>
    </header>
  );
}

export default Header;
