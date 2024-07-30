import "../style/profiles.css"
import { Link } from "react-router-dom"
import fotoPrueba from "../img/fotos.jpg"
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
            <img src={fotoPrueba} alt="Perfil 1" />
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
 
        {/* <div className="cards">
        {paginatedCards.map(card => (
          <Card key={card.id} card={card} openModal={openModal} />
        ))}
      </div> */}
{/*
      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
 */}

 
        {/* <Modal
        showModal={showModal}
        closeModal={closeModal}
        modalData={modalData}
      />  */}

        <button className="btn-primary"><Link to="/perfiles">Ver todos</Link></button>
      </section>
    );
  }
  
  export default Profiles;
  