import Sidebar from "../login/Sidebar"
import ProfileForm from '../login/ProfileForm.jsx';
// import ProfileContact from "../login/ProfileContact.jsx";
import "../style/profileLogin.css";


const cunetaLogin = () => {
  return (
    <div>
        <Sidebar />
        {/* <ProfileContact />  */}
        <ProfileForm />
    </div>
  )
}

export default cunetaLogin