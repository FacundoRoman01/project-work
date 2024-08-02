
import "../style/banner.css";
import backgroundImage from '../img/pinabosq.jpg'; 
import Facebook from '../img/facebook.png'; 
import Instagram from '../img/instagram.png'; 

const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="banner-content">
        <h1>La guía más completa de Pinamar</h1>
        <div className="banner-stats">
          <div>
            <h2>300</h2>
            <p>Empresas registradas</p>
          </div>
          <div>
            <h2>1,709</h2>
            <p>Profesionales</p>
          </div>
          <div>
            <h2>10</h2>
            <p>Años en la ciudad</p>
          </div>
        </div>
        <div className="banner-social">
          <p>Seguinos en:</p>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> 
            <img className="icon-banner"  src={Facebook} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img  className="icon-banner "src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
