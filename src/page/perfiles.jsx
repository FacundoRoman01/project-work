import { useState, useMemo, useEffect } from 'react';
import Filters from '../components/filters.jsx';
import Card from '../components/Card.jsx';
import Pagination from '../components/Pagination.jsx';
import Modal from '../components/Modal.jsx';
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import data from '../../data/cards.json'; 

import '../style/App.css';

const Perfiles = () => {
  const [cards] = useState(data.cards);
  const skillsList = data.skillsList;
  const [selectedProfession, setSelectedProfession] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedZone, setSelectedZone] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredCards, setFilteredCards] = useState(cards);
  const cardsPerPage = 8;

  useEffect(() => {
    const updateFilteredCards = () => {
      const filtered = cards.filter(card => {
        return (
          (selectedProfession ? card.profession === selectedProfession : true) &&
          (selectedSpecialty ? card.specialty === selectedSpecialty : true) &&
          (selectedProvince ? card.province === selectedProvince : true) &&
          (selectedCity ? card.city === selectedCity : true) &&
          (selectedZone ? card.zone === selectedZone : true) &&
          (selectedSkill ? card.skills.some(skill => skill.toLowerCase().includes(selectedSkill.toLowerCase())) : true)
        );
      });
      setFilteredCards(filtered);
    };
  
    updateFilteredCards();
    setCurrentPage(1); // Reset pagination when filters change
  }, [selectedProfession, selectedSpecialty, selectedProvince, selectedCity, selectedZone, selectedSkill]);
  
  const totalPages = useMemo(() => {
    return Math.ceil(filteredCards.length / cardsPerPage);
  }, [filteredCards.length]);

  const paginatedCards = useMemo(() => {
    const start = (currentPage - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    return filteredCards.slice(start, end);
  }, [filteredCards, currentPage, cardsPerPage]);

  const openModal = (card) => {
    setModalData(card);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const clearFilters = () => {
    setSelectedProfession('');
    setSelectedSpecialty('');
    setSelectedProvince('');
    setSelectedCity('');
    setSelectedZone('');
    setSelectedSkill('');
  };

  const searchSkills = (query) => {
    const normalizedQuery = query.toLowerCase();
    return skillsList.filter(skill => skill.toLowerCase().includes(normalizedQuery));
  };

  return (
    <>
      <Header />

      <div className="container">
        <Filters 
          selectedProfession={selectedProfession}
          setSelectedProfession={setSelectedProfession}
          selectedSpecialty={selectedSpecialty}
          setSelectedSpecialty={setSelectedSpecialty}
          selectedProvince={selectedProvince}
          setSelectedProvince={setSelectedProvince}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          selectedZone={selectedZone}
          setSelectedZone={setSelectedZone}
          selectedSkill={selectedSkill}
          setSelectedSkill={setSelectedSkill}
          clearFilters={clearFilters}
          searchSkills={searchSkills}
        />

        <div className="cards">
          {paginatedCards.map(card => (
            <Card key={card.id} card={card} openModal={openModal} />
          ))}
        </div>

        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          prevPage={prevPage}
          nextPage={nextPage}
        />

        <Modal
          showModal={showModal}
          closeModal={closeModal}
          modalData={modalData}
        />
      </div>

      <Footer />
    </>
  );
};

export default Perfiles;
