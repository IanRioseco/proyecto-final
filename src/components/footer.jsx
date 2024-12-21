import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link
import './footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content"> {/* Contenedor principal del componente */}
        <div className="footer-left"> {/* Contenedor para la sección izquierda */}
          <h3>
            <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} 
            alt="Pokémazo Logo" 
            className="footer-logo" /> {/*Logo de Pokémazo*/}
            Pokémazo - Pokémon Deck Builder {/*Título de Pokémazo*/}
          </h3>
          <p>&copy; 2024 Pokémon Deck Builder. Todos los derechos reservados.</p> {/*Copyright de Pokémazo*/}
        </div>
        <div className="footer-middle"> {/* Contenedor para la sección central */}
          <h4>Enlaces útiles</h4> {/*Título del bloque*/}
          <ul>
            <li><Link to="/deckbuilder">Crear Mazo</Link></li>   {/*Enlace a Crear Mazo*/}
            <li><Link to="/mydecks">Mis Mazos</Link></li>   {/*Enlace a Mis Mazos*/}
            <li><Link to="/help">Ayuda</Link></li> {/*Enlace a Ayuda*/}
          </ul>
        </div>
        <div className="footer-right"> {/* Contenedor para la sección derecha */}
          <h4>Redes Sociales</h4>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li> {/*Enlace a Facebook*/}
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li> {/*Enlace a Twitter*/}
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li> {/*Enlace a Instagram*/}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer; // Exporta el componente
