import { Link } from 'react-router-dom';
import '../style/modal.css';

const Modal = ({ showModal, closeModal, modalData}) => {
  if (!showModal) return null;

  const socialLinks = [
    { name: 'GitHub', link: modalData.link, color: '#333' },
    { name: 'LinkedIn', link: modalData.linkedin, color: '#0077b5' },
    { name: 'Twitter', link: modalData.twitter, color: '#1DA1F2' },
    { name: 'Facebook', link: modalData.facebook, color: '#4267B2' },
    { name: 'Instagram', link: modalData.instagram, color: '#C13584' },
    { name: 'WhatsApp', link: modalData.whatsapp, color: '#25D366' },
    { name: 'GoogleMaps', link: modalData.googlemaps, color: '#DB4437' },
    { name: 'WebPage', link: modalData.webpage, color: '#0e76a8' },
  ];

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={modalData.imgSrc} alt="Profile Picture" />
        <h2>{modalData.name}</h2>
        <h3>{modalData.title}</h3>
        <p>{modalData.description}</p>
        <p>{modalData.availability}</p>
        <div className="details">
          <div className="detail">
            <img src="https://img.icons8.com/ios-filled/50/000000/clock.png" width="20" height="20" alt="clock" />
            <span>{modalData.experience}</span>
          </div>
          <div className="detail">
            <img src="https://img.icons8.com/ios-filled/50/000000/globe.png" width="20" height="20" alt="globe" />
            <span>{modalData.location}</span>
          </div>
          <div className="detail">
            <img src="https://img.icons8.com/ios-filled/50/000000/github.png" width="20" height="20" alt="github" />
            <a href={modalData.link} target="_blank" rel="noopener noreferrer">Perfil de GitHub</a>
          </div>
        </div>
        <div className="details">
          <h3>Habilidades</h3>
          <div className="skills">
            {modalData.skills.map(skill => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
        <div className="details">
          <h3>Redes Sociales</h3>
          <div className="social-links">
            {socialLinks.map(social => (
              <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: social.color }}>
                {social.name}
              </a>
            ))}
          </div>
        </div>
        <div className="buttons">
        <button className="contact">
          <Link to={`/profesional/${modalData.id}`}>Contactar</Link>
        </button>
          <button className="profile" onClick={closeModal}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
