
import "../style/profileLogin.css";
import "../style/profileContact.css"


const ProfileContact = () => {
    return (
        <div className="profile-login">
            <h1>Perfil</h1>
            <div className="profile-header">
                <div className="profile-photo">
                    <img src="https://via.placeholder.com/100" alt="Foto de perfil" style={{ borderRadius: '50%' }} />
                </div>
                <div className="profile-actions">
                    <button className="btn gray">Cambiar foto</button>
                    <button className="btn white">Ver online <i className="fas fa-external-link-alt"></i></button>
                </div>
            </div>
        </div>
    );
};

export default ProfileContact;
