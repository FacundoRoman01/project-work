
import '../style/cardLogin.css';
// import '../style/dashboard.css';

const CardContact = ({ icon, title, description, buttonText }) => {
    return (
        <div className="card-login">
            <div className="logo-login" dangerouslySetInnerHTML={{__html: icon}}  />
            <h2>{title}</h2>
            <p>{description}</p>
            <button>{buttonText}</button>
        </div>
    );
};

export default CardContact;
