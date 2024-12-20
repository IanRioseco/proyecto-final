import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';


function Header() {
  return (
    <header>
      <div className='imagesHeader'>


        <img className='poketitulo' src='/assets/poketitulo.png' alt='poketitulo'/>

        
      </div>
      <nav>
        <ul>
          <li><Link to="/Home">Inicio</Link></li>
          <li><Link to="/Deckbuilder">Crear Mazo</Link></li>
          <li><Link to="/MyDecks">Mis Mazos</Link></li>
          <li><Link to="/help">Ayuda</Link></li>
        </ul>

      </nav>
    </header>
  );
}

export default Header;
