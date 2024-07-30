
import Dashboard from '../login/Dashboard.jsx';
import ProfileContact from '../login/ProfileContact.jsx';
import '../style/mainContent.css';

const MainContent = ({ currentView }) => {
    return (
        <div className="main-content">
            {currentView === 'dashboard' && <Dashboard />}
            {currentView === 'profile' && <ProfileContact />}
        </div>
    );
};

export default MainContent;
