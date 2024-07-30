import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../style/header.css"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav id="desktop-nav">
        <div className="logo"><Link to="/">GuiaPin</Link></div>
        <div className="nav-container">
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/perfiles">Perfiles</Link></li>
            <li title='Pronto una pagina de proyectos'>Proyectos</li>
            <li><Link to="/contacto">Iniciar sesión</Link></li>
          </ul>
          <div id="hamburger-nav" className="hamburger-menu" onClick={toggleMenu}>
            <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
