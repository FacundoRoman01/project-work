import { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import '../style/filters.css';

const Filters = ({
  selectedProfession,
  setSelectedProfession,
  selectedSpecialty,
  setSelectedSpecialty,
  selectedProvince,
  setSelectedProvince,
  selectedCity,
  setSelectedCity,
  selectedZone,
  setSelectedZone,
  selectedSkill,
  setSelectedSkill,
  clearFilters,
  searchSkills,
  updateFilteredCards
}) => {
  const [suggestions, setSuggestions] = useState([]);
  const [showFilters, setShowFilters] = useState(false); // Estado para manejar la visibilidad de los filtros

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(searchSkills(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = suggestion => suggestion;

  const renderSuggestion = suggestion => (
    <div>
      {suggestion}
    </div>
  );

  const handleSkillChange = (e, { newValue }) => {
    setSelectedSkill(newValue);
  };

  const handleSkillBlur = () => {
    updateFilteredCards();
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters); // Alternar la visibilidad de los filtros
  };

  return (
    <div className="filters-wrapper">
      <button className="toggle-filters-button" onClick={toggleFilters}>
        {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
      </button>
      <div className={`filters ${showFilters ? 'show' : 'hide'}`}>
        <select value={selectedProfession} onChange={(e) => setSelectedProfession(e.target.value)}>
          <option value="" disabled>Profesión</option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
        </select>
        <select value={selectedSpecialty} onChange={(e) => setSelectedSpecialty(e.target.value)}>
          <option value="" disabled>Especialidad</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
        </select>
        <select value={selectedProvince} onChange={(e) => setSelectedProvince(e.target.value)}>
          <option value="" disabled>Provincia</option>
          <option value="buenosaires">Buenos Aires</option>
          <option value="cordoba">Córdoba</option>
        </select>
        <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
          <option value="" disabled>Ciudad</option>
          <option value="buenosaires">Buenos Aires</option>
          <option value="cordoba">Córdoba</option>
        </select>
        <select value={selectedZone} onChange={(e) => setSelectedZone(e.target.value)}>
          <option value="" disabled>Zona</option>
          <option value="north">North</option>
          <option value="south">South</option>
        </select>
        <div className="search-skills">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={{
              placeholder: 'Buscar por habilidades',
              value: selectedSkill,
              onChange: handleSkillChange,
              onBlur: handleSkillBlur
            }}
          />
        </div>
        <button className="filter-button" onClick={clearFilters}>Limpiar Filtros</button>
      </div>
    </div>
  );
};

export default Filters;
