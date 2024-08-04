
import { useParams } from 'react-router-dom';
import cardsData from '../../data/cards.json';
import "../style/detallesProfesional.css"
import Header from './header';
// import Footer from './footer';

const detallesProfesional = () => {
    const { id } = useParams();
    const profesional = cardsData.cards.find(card => card.id === parseInt(id));

    if (!profesional) {
        return <div>Profesional no encontrado</div>;
    }

    return (
        <>
            <Header />

            <div className="detalles-container">

                <h2>{profesional.name}</h2>
                <h3>{profesional.title}</h3>
                <p>{profesional.description}</p>
                <img src={profesional.imgSrc} alt={profesional.name} />
                <div className="skills">
                    {profesional.skills.map(skill => (
                        <span key={skill}>{skill}</span>
                    ))}
                </div>
                <div className="details">
                    <div className="detail">
                        <img src="https://img.icons8.com/ios-filled/50/000000/clock.png" width="20" height="20" alt="clock" />
                        <span>{profesional.experience}</span>
                    </div>
                    <div className="detail">
                        <img src="https://img.icons8.com/ios-filled/50/000000/globe.png" width="20" height="20" alt="globe" />
                        <span>{profesional.location}</span>
                    </div>
                    <div className="detail">
                        <img src="https://img.icons8.com/ios-filled/50/000000/github.png" width="20" height="20" alt="github" />
                        <a href={profesional.link} target="_blank" rel="noopener noreferrer">Perfil de GitHub</a>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>

    );
}

export default detallesProfesional