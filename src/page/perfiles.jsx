import { useState, useMemo, useEffect } from 'react';
import Filters from '../components/filters.jsx';
import Card from '../components/card.jsx';
import Pagination from '../components/Pagination.jsx';
import Modal from '../components/Modal.jsx';
import fotoPrueba from '../img/fotos.jpg';
import Header from "../components/header.jsx"
import Footer from "../components/footer.jsx";


import '../style/App.css';

const Perfiles = () => {
  

  const [selectedProfession, setSelectedProfession] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedZone, setSelectedZone] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredCards, setFilteredCards] = useState([]);
  const cardsPerPage = 8;

  const skillsList = [
    'Python', 'JavaScript', 'React', 'Node.js', 'SQL', 'CSS', 'HTML', 
    'Java', 'C#', 'C++', 'Django', 'Flask', 'Vue.js', 'Angular', 'Ruby', 
    'Rails', 'PHP', 'Laravel', 'Swift', 'Kotlin', 'Flutter', 'Dart', 
    'Objective-C', 'Go', 'Rust'
  ];

  const cards = [
    {
      id: 1,
      name: 'Facundo Roman',
      imgSrc: fotoPrueba,
      title: 'Desarrollador Full Stack Jr',
      description: 'Disponible para trabajar',
      availability: '6 meses a 1 año',
      experience: 'Remoto',
      location: 'Argentina',
      profession: 'developer',
      specialty: 'frontend',
      province: 'buenosaires',
      city: 'buenosaires',
      zone: 'north',
      link: 'https://github.com/pemaldonado',
      linkedin: 'https://www.linkedin.com',
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      whatsapp: 'https://wa.me',
      googlemaps: 'https://maps.google.com',
      webpage: 'https://example.com',
      skills: ['Python', 'SQL', 'Algorithm', 'Development']
    },
    {
      id: 2,
      name: 'Maria Rodriguez',
      imgSrc: 'https://via.placeholder.com/100',
      title: 'Frontend Developer',
      description: 'Disponible para proyectos',
      availability: '1 a 2 años',
      experience: 'Remoto',
      location: 'Chile',
      profession: 'developer',
      specialty: 'frontend',
      province: 'cordoba',
      city: 'cordoba',
      zone: 'south',
      link: 'https://github.com/frontenddev',
      linkedin: 'https://www.linkedin.com',
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      whatsapp: 'https://wa.me',
      googlemaps: 'https://maps.google.com',
      webpage: 'https://example.com',
      skills: ['JavaScript', 'React', 'CSS', 'HTML']
    },
    {
      id: 3,
      name: 'Carlos Lopez',
      imgSrc: 'https://via.placeholder.com/100',
      title: 'Backend Developer',
      description: 'Freelancer',
      availability: '3 a 4 años',
      experience: 'Remoto',
      location: 'México',
      profession: 'developer',
      specialty: 'backend',
      province: 'buenosaires',
      city: 'buenosaires',
      zone: 'north',
      link: 'https://github.com/backenddev',
      linkedin: 'https://www.linkedin.com',
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      whatsapp: 'https://wa.me',
      googlemaps: 'https://maps.google.com',
      webpage: 'https://example.com',
      skills: ['Node.js', 'Express', 'MongoDB', 'SQL']
    },
    {
      id: 4,
      name: 'Ana Gomez',
      imgSrc: 'https://via.placeholder.com/100',
      title: 'Desarrollador Mobile',
      description: 'Disponible para trabajar',
      availability: '2 a 3 años',
      experience: 'Remoto',
      location: 'Perú',
      profession: 'developer',
      specialty: 'frontend',
      province: 'buenosaires',
      city: 'cordoba',
      zone: 'south',
      link: 'https://github.com/mobiledev',
      linkedin: 'https://www.linkedin.com',
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      whatsapp: 'https://wa.me',
      googlemaps: 'https://maps.google.com',
      webpage: 'https://example.com',
      skills: ['Flutter', 'Dart', 'React Native', 'Java']
    },
    {
      id: 5,
      name: 'Luis Martinez',
      imgSrc: 'https://via.placeholder.com/100',
      title: 'Data Scientist',
      description: 'Científico de datos',
      availability: '4 a 5 años',
      experience: 'Presencial',
      location: 'Colombia',
      profession: 'developer',
      specialty: 'backend',
      province: 'cordoba',
      city: 'buenosaires',
      zone: 'north',
      link: 'https://github.com/datascientist',
      linkedin: 'https://www.linkedin.com',
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      whatsapp: 'https://wa.me',
      googlemaps: 'https://maps.google.com',
      webpage: 'https://example.com',
      skills: ['Python', 'R', 'Machine Learning', 'Data Analysis']
    },
    {
      id: 6,
      name: 'Elena Torres',
      imgSrc: 'https://via.placeholder.com/100',
      title: 'DevOps Engineer',
      description: 'Ingeniero DevOps',
      availability: '1 a 2 años',
      experience: 'Remoto',
      location: 'Uruguay',
      profession: 'developer',
      specialty: 'backend',
      province: 'buenosaires',
      city: 'cordoba',
      zone: 'south',
      link: 'https://github.com/devops',
      linkedin: 'https://www.linkedin.com',
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      whatsapp: 'https://wa.me',
      googlemaps: 'https://maps.google.com',
      webpage: 'https://example.com',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
    },
    {
      id: 7,
      name: 'Roberto Diaz',
      imgSrc: 'https://via.placeholder.com/100',
      title: 'Full Stack Developer',
      description: 'Disponible para proyectos',
      availability: '3 a 4 años',
      experience: 'Remoto',
      location: 'Argentina',
      profession: 'developer',
      specialty: 'frontend',
      province: 'buenosaires',
      city: 'buenosaires',
      zone: 'north',
      link: 'https://github.com/fullstackdev',
      linkedin: 'https://www.linkedin.com',
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      whatsapp: 'https://wa.me',
      googlemaps: 'https://maps.google.com',
      webpage: 'https://example.com',
      skills: ['JavaScript', 'Node.js', 'React', 'SQL']
    },
    {
      id: 8,
      name: 'Camila Vargas',
      imgSrc: 'https://via.placeholder.com/100',
      title: 'Frontend Engineer',
      description: 'Ingeniero Frontend',
      availability: '2 a 3 años',
      experience: 'Remoto',
      location: 'Brasil',
      profession: 'developer',
      specialty: 'frontend',
      province: 'cordoba',
      city: 'cordoba',
      zone: 'south',
      link: 'https://github.com/frontendengineer',
      linkedin: 'https://www.linkedin.com',
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      whatsapp: 'https://wa.me',
      googlemaps: 'https://maps.google.com',
      webpage: 'https://example.com',
      skills: ['Vue.js', 'CSS', 'HTML', 'JavaScript']
    },
    {
      id: 9,
      name: 'Andres Rios',
      imgSrc: 'https://via.placeholder.com/100',
      title: 'Backend Engineer',
      description: 'Ingeniero Backend',
      availability: '4 a 5 años',
      experience: 'Remoto',
      location: 'Ecuador',
      profession: 'developer',
      specialty: 'backend',
      province: 'buenosaires',
      city: 'buenosaires',
      zone: 'north',
      link: 'https://github.com/backendengineer',
      linkedin: 'https://www.linkedin.com',
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      whatsapp: 'https://wa.me',
      googlemaps: 'https://maps.google.com',
      webpage: 'https://example.com',
      skills: ['Python', 'Django', 'PostgreSQL', 'APIs']
    },
    {
      id: 10,
      name: 'Patricia Salas',
      imgSrc: 'https://via.placeholder.com/100',
      title: 'Desarrollador Web',
      description: 'Desarrollador Web',
      availability: '5 a 6 años',
      experience: 'Presencial',
      location: 'Bolivia',
      profession: 'developer',
      specialty: 'frontend',
      province: 'cordoba',
      city: 'cordoba',
      zone: 'south',
      link: 'https://github.com/webdeveloper',
      linkedin: 'https://www.linkedin.com',
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      whatsapp: 'https://wa.me',
      googlemaps: 'https://maps.google.com',
      webpage: 'https://example.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP']
    },
    {
      id: 11,
      name: 'Fernando Morales',
      imgSrc: 'https://via.placeholder.com/100',
      title: 'Machine Learning Engineer',
      description: 'Ingeniero de Machine Learning',
      availability: '3 a 4 años',
      experience: 'Remoto',
      location: 'Paraguay',
      profession: 'developer',
      specialty: 'backend',
      province: 'buenosaires',
      city: 'buenosaires',
      zone: 'north',
      link: 'https://github.com/mlengineer',
      linkedin: 'https://www.linkedin.com',
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      whatsapp: 'https://wa.me',
      googlemaps: 'https://maps.google.com',
      webpage: 'https://example.com',
      skills: ['Python', 'TensorFlow', 'Keras', 'NLP']
    },
    {
      id: 12,
      name: 'Gabriela Ruiz',
      imgSrc: 'https://via.placeholder.com/100',
      title: 'Data Analyst',
      description: 'Analista de Datos',
      availability: '2 a 3 años',
      experience: 'Remoto',
      location: 'Venezuela',
      profession: 'developer',
      specialty: 'backend',
      province: 'cordoba',
      city: 'cordoba',
      zone: 'south',
      link: 'https://github.com/dataanalyst',
      linkedin: 'https://www.linkedin.com',
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      whatsapp: 'https://wa.me',
      googlemaps: 'https://maps.google.com',
      webpage: 'https://example.com',
      skills: ['Excel', 'Python', 'SQL', 'Data Visualization']
    },
    {
      id: 13,
      name: 'Sofia Mendez',
      imgSrc: 'https://via.placeholder.com/100',
      title: 'Software Architect',
      description: 'Arquitecto de Software',
      availability: '5 a 6 años',
      experience: 'Presencial',
      location: 'Argentina',
      profession: 'developer',
      specialty: 'backend',
      province: 'buenosaires',
      city: 'buenosaires',
      zone: 'north',
      link: 'https://github.com/softwarearchitect',
      linkedin: 'https://www.linkedin.com',
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      whatsapp: 'https://wa.me',
      googlemaps: 'https://maps.google.com',
      webpage: 'https://example.com',
      skills: ['Java', 'Microservices', 'Docker', 'Kubernetes']
    },
    // Añade más tarjetas aquí...
  ];

  const updateFilteredCards = () => {
    setFilteredCards(cards.filter(card => {
      return (
        
        (selectedProfession ? card.profession === selectedProfession : true) &&
        (selectedSpecialty ? card.specialty === selectedSpecialty : true) &&
        (selectedProvince ? card.province === selectedProvince : true) &&
        (selectedCity ? card.city === selectedCity : true) &&
        (selectedZone ? card.zone === selectedZone : true) &&
        (selectedSkill ? card.skills.some(skill => skill.toLowerCase().includes(selectedSkill.toLowerCase())) : true)
      );
    }));
  };

  useEffect(() => {
    updateFilteredCards();
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
    setCurrentPage(1);
    updateFilteredCards();
  };

  const searchSkills = (query) => {
    const normalizedQuery = query.toLowerCase();
    return skillsList.filter(skill => skill.toLowerCase().includes(normalizedQuery));
  };

  return (
    <>
    
    <Header />

    <div className="container">
      
      <Filters className="filters"
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
        updateFilteredCards={updateFilteredCards}
      />

      <div className="cards">
        {paginatedCards.map(card => (
          <Card key={card.id} card={card} openModal={openModal} />
        ))}
      </div>

      <Pagination className="pagination"
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
