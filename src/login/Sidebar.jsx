
import { Link } from 'react-router-dom';
import '../style/sidebar.css';
// import MainContent from "../login/MainContent.jsx";
// import { useState } from 'react';


const Sidebar = ( onNavigate) => {

    // const [currentView, setCurrentView] = useState('dashboard');

    // const handleNavigation = (view) => {
    //     setCurrentView(view);
    // };

    // Sidebar.propTypes = {
    //     onNavigate: PropTypes.func.isRequired,
    //   };
      

    return (
        <div className="sidebar-login">
            <div className="logo-sidebar"> <Link to="/">GuiaPin</Link>   </div>
            <nav className='nav-login'>
                <ul>
                    {/* <Link to="/inicioLogin"> 🏠  Inicio </Link> */}
                    <li><a href="#" onClick={() => onNavigate('dashboard')}><i className="fas fa-home"></i>🏠  Inicio</a></li>
                    <li><a href="#"><i className="fas fa-briefcase"> </i>💼  Mis empleos</a></li>
                    <li><a href="#"><i className="fas fa-code"></i>🖱️  Desafíos</a></li>
                    <li><a href="#"><i className="fas fa-search"></i>🔍  Buscar talento</a></li>
                    {/* <li><a href="#" onClick={() => onNavigate('profile')}><i className="fas fa-user"></i> 👤 Mi cuenta</a></li> */}
                    <Link to="/cuenta"> 👤 Mi cuenta</Link>
                </ul>
            </nav>
            {/* <Sidebar onNavigate={handleNavigation} />
            <MainContent currentView={currentView} /> */}
        </div>
    );

    
};

export default Sidebar;
