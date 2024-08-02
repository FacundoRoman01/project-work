import "../style/profiles.css"
import { Link } from "react-router-dom"
import fotoPrueba from "../img/fotos.jpg"
// import fotoPrueba2 from "../img/foto-prueba2.jpg"
import fotoprueba3 from "../img/fotopruebaTres.jpg";
import fotoprueba4 from "../img/fotoprueba4.jpg";
import fotoprueba5 from "../img/fotoprueba5.jpg";
// import fotoPrueba3 from "../img/fotoPrueba3.jpg"
// import Modal from '../components/Modal.jsx';
// import Card from "./card.jsx";
// import Pagination from "./Pagination.jsx";
// import { useState,useMemo } from "react";
function Profiles() {

  // const [showModal, setShowModal] = useState(false);
  // const [modalData, setModalData] = useState({});
  // const [currentPage, setCurrentPage] = useState(1);

  // const openModal = (card) => {
  //   setModalData(card);
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  // const nextPage = () => {
  //   if (currentPage < totalPages) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  //   const totalPages = useMemo(() => {
  //   return Math.ceil(filteredCards.length / cardsPerPage);
  // }, [filteredCards.length]);


  // const prevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  // const paginatedCards = useMemo(() => {
  //   const start = (currentPage - 1) * cardsPerPage;
  //   const end = start + cardsPerPage;
  //   return filteredCards.slice(start, end);
  // }, [filteredCards, currentPage, cardsPerPage]);




    return (
      <section className="profiles">
      <h2>Perfiles destacados</h2>
      <div className="profile-cards">
        <div className="profile-card">
          <img src={fotoPrueba} alt="Perfil 1" className="profile-photo"/>
          <h3>FRONT-END WEB DEVELOPMENT | JAVASCRIPT</h3>
          <p>Todas las modalidades<br />Exp.: Sin experiencia</p>
          <div className="skills">
            <span>Programming</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
          <button>Ver perfil</button>
        </div>
        <div className="profile-card">
          <img src={fotoprueba5} alt="Perfil 1" className="profile-photo"/>
          <h3>FRONT-END WEB DEVELOPMENT | JAVASCRIPT</h3>
          <p>Todas las modalidades<br />Exp.: Sin experiencia</p>
          <div className="skills">
            <span>Programming</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
          <button>Ver perfil</button>
        </div>
        <div className="profile-card">
          <img src={fotoprueba3} alt="Perfil 1" className="profile-photo"/>
          <h3>FRONT-END WEB DEVELOPMENT | JAVASCRIPT</h3>
          <p>Todas las modalidades<br />Exp.: Sin experiencia</p>
          <div className="skills">
            <span>Programming</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
          <button>Ver perfil</button>
        </div>
        <div className="profile-card">
          <img src={fotoprueba4} alt="Perfil 1" className="profile-photo"/>
          <h3>FRONT-END WEB DEVELOPMENT | JAVASCRIPT</h3>
          <p>Todas las modalidades<br />Exp.: Sin experiencia</p>
          <div className="skills">
            <span>Programming</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
          <button>Ver perfil</button>
        </div>
        {/* Repite esta estructura para las otras cards */}
      </div>
      <button className="btn-primary">
        <Link to="/perfiles">Ver todos</Link>
      </button>
    </section>
    );
  }
  
  export default Profiles;
  