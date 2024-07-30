
import '../style/dashboard.css';
import CardContact from './CardContact';

const Dashboard = () => {
    return (
        <div className="main-content">
            <h1>Juan,</h1>
            <p>Chequea estos accesos rápidos:</p>
            <div className="cards-login">
                <CardContact 
                    icon="&#x1F4BB;" 
                    title="Desafíos" 
                    description="Participa en desafíos de programación" 
                    buttonText="Ver más" 
                />
                <CardContact 
                    icon="&#x1F464;" 
                    title="Tu perfil" 
                    description="Completa tu perfil si quieres aparecer en las búsquedas" 
                    buttonText="Modificar mi cuenta" 
                />
                <CardContact
                    icon="&#x1F4E3;" 
                    title="Comparte" 
                    description="Comparte tu link con todos tus amigos, contactos y LinkedIn" 
                    buttonText="Compartir" 
                />
            </div>
        </div>
    );
};

export default Dashboard;
