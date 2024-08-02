import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../style/header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faProjectDiagram, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

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
            <Link to="/"><FontAwesomeIcon icon={faHome} className="mobile-icon" /> <span className="link-text">Inicio</span></Link>
            <Link to="/perfiles"><FontAwesomeIcon icon={faUser} className="mobile-icon" /> <span className="link-text">Perfiles</span></Link>
            <Link title='Pronto una pagina de proyectos' to="/proyectos"><FontAwesomeIcon icon={faProjectDiagram} className="mobile-icon" /> <span className="link-text">Proyectos</span> </Link>
            <Link to="/contacto"><FontAwesomeIcon icon={faSignInAlt} className="mobile-icon" /> <span className="link-text">Iniciar sesión</span></Link>
          </ul>
          <div id="hamburger-nav" className="hamburger-menu" onClick={toggleMenu}>
            <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
