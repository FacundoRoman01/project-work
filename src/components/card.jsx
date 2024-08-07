// import { useState, useEffect } from 'react';
// import cardsData from '../../data/cards.json'; 
import "../style/card.css";

const Card = ({ card, openModal }) => {
  return (
    <div key={card.id} className="card" onClick={() => openModal(card)}>
      <img src={card.imgSrc} alt={`${card.name} profile`} title={`foto de ${card.name}`} />
      <h2>{card.title}</h2>
      <p>{card.name}</p>
      <p>{card.description}</p>
      <div className="skills">
        {card.skills.map(skill => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </div>
  );
};

export default Card;
