import "../style/card.css"

const card = ({ card, openModal }) => {
  return (
    <div className="card" onClick={() => openModal(card)}>
      <img src={card.imgSrc} alt="Profile Picture" title="hola"/>
      <h2>{card.title}</h2>
      <p>{card.name}</p> {/* Añadido para mostrar el nombre */}
      <p>{card.description}</p>
      <div className="skills">
        {card.skills.map(skill => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </div>
  )
}

export default card