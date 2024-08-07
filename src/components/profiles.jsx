import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card.jsx';
import Modal from '../components/Modal.jsx';
import data from '../../data/cards.json'; 

import "../style/profiles.css";

const Profiles = () => {
  const [cards] = useState(data.cards);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const cardsPerPage = 4; // Número de tarjetas a mostrar
  const currentPage = 1; // Página actual (solo hay una en este caso)

  const paginatedCards = useMemo(() => {
    return cards.slice(0, cardsPerPage); // Muestra solo las primeras 4 cards
  }, [cards, cardsPerPage]);

  const openModal = (card) => {
    setModalData(card);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="profiles">
      <h2>Perfiles destacados</h2>
      <div className="profile-cards">
        {paginatedCards.map(card => (
          <Card key={card.id} card={card} openModal={openModal} />
        ))}
      </div>
      <button className="btn-primary">
        <Link to="/perfiles">Ver todos</Link>
      </button>
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        modalData={modalData}
      />
    </section>
  );
};

export default Profiles;
