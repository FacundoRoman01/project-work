import "../style/cardLogin.css";
import "../style/dashboard.css";
import "../style/sidebar.css";
import "../style/mainContent.css"
import "../style/profileLogin.css";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import SideBar from "../login/Sidebar.jsx";
// import ProfileContact from "../login/ProfileContact.jsx";
import Dashboard from "../login/Dashboard.jsx";
// import MainContent from "../login/MainContent.jsx";
// import LoginContact from "../components/loginContact"

const login = () => {
  return (
    <div>
      {/* <LoginContact /> */}
      <SideBar />
      {/* <CardContact /> */}
      {/* <MainContent /> */}
      <Dashboard />
      {/* <ProfileContact /> */}
    </div>
  )
}

export default login