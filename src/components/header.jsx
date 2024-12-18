import React from 'react';
import './header.css';

function Header() {
  return (
    <header>
      <div className='imagesHeader'>
        <img className='pikachu' src='/assets/pikachu.png' alt='pikachu'/>
        <img className='bulbasur' src='/assets/bulbasur.png' alt='bulbasur'/>
        <img className='poke3' src='/assets/poke3.png' alt='poke3'/>

        <img className='poketitulo' src='/assets/poketitulo.png' alt='poketitulo'/>

        <img className='charmander' src='/assets/charmander.png' alt='charmander'/>
        <img className='poke2' src='/assets/poke2.png' alt='poke2'/>
        <img className='poke4' src='/assets/poke4.png' alt='poke4'/>
        
      </div>
      <nav>
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#my-decks">Crear Mazo</a></li>
          <li><a href="#create-deck">Mis Mazos</a></li>
          <li><a href="#help">Ayuda</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
