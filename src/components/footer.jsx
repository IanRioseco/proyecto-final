import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link
import './footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-left">
          <h3>
            <img src="/assets/logo.png" alt="Pokémazo Logo" className="footer-logo" />
            Pokémazo - Pokémon Deck Builder
          </h3>
          <p>&copy; 2024 Pokémon Deck Builder. Todos los derechos reservados.</p>
        </div>
        <div className="footer-middle">
          <h4>Enlaces útiles</h4>
          <ul>
            <li><Link to="/deckbuilder">Crear Mazo</Link></li>
            <li><Link to="/mydecks">Mis Mazos</Link></li>
            <li><Link to="/help">Ayuda</Link></li>
          </ul>
        </div>
        <div className="footer-right">
          <h4>Redes Sociales</h4>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
