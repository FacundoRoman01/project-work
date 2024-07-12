import "../style/contact.css"
import imgForm from "../img/img-form.jpg"
import { Link } from "react-router-dom"

const formulario = () => {
  return (
<div className="login-page">
      <div className="login-form-container">
      
        <div className="form-content">
          <p className="logo">GuiaPin</p>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="btn-submit">Iniciar sesión</button>
          </form>
          <div className="links">

            <Link to="">¿Olvidaste tu contraseña? Ingresa aquí</Link>
            <Link to="/registro">¿No tienes cuenta aún? Regístrate </Link>
            
          </div>
        </div>
        <div className="image-content">
          <img src={imgForm} alt="Side" className="side-image" />
        </div>
      </div>
    </div>
  )
}

export default formulario