import "../style/profiles.css"
import { Link } from "react-router-dom"
function Profiles() {
    return (
      <section className="profiles">
        <h2>Perfiles destacados</h2>
        <div className="profile-cards">
          <div className="profile-card">
            <img src="https://via.placeholder.com/80" alt="Perfil 1" />
            <h3>FULL STACK DEVELOPER - REACT</h3>
            <p>Empleo remoto<br />Exp. Más de 1 año</p>
            <button>Ver perfil</button>
          </div>
          <div className="profile-card">
            <img src="https://via.placeholder.com/80" alt="Perfil 2" />
            <h3>REACT, REDUX, NODE.JS EXPERTO</h3>
            <p>Empleo remoto<br />Exp. Menos de 6 meses</p>
            <button>Ver perfil</button>
          </div>
          <div className="profile-card">
            <img src="https://via.placeholder.com/80" alt="Perfil 3" />
            <h3>DESARROLLADOR FULLSTACK</h3>
            <p>Empleo remoto<br />Exp. Más de 1 año</p>
            <button>Ver perfil</button>
          </div>
          <div className="profile-card">
            <img src="https://via.placeholder.com/80" alt="Perfil 4" />
            <h3>DESARROLLADOR WEB FRONTE</h3>
            <p>Todas las modalidades<br />Exp. Sin experiencia</p>
            <button>Ver perfil</button>
          </div>
        </div>
        <button className="btn-primary"><Link to="/perfiles">Ver todos</Link></button>
      </section>
    );
  }
  
  export default Profiles;
  