import { Link } from "react-router-dom"
import "../style/header.css"

const header = () => {
  return (
    <header>
      <nav id="desktop-nav">
        <div className="logo"><Link to="/">GuiaPin</Link></div>
        <div>
          <ul className="nav-links">
            <li><Link to="/">Inicio</Link></li>
            <li> <Link to="/perfiles">Perfiles</Link> </li>
            <li><Link to="/proyectos">Proyectos</Link></li>
            <li><Link to="/contacto">Iniciar sesión</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default header