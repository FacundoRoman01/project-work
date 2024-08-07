import './style/App.css'
// import Header from './components/header.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./page/home.jsx"
import Perfiles from "./page/perfiles.jsx"
import Contacto from './page/contacto.jsx';
import RegistroForm from "./page/resgistroForm.jsx"
import Login from "./page/login.jsx";
import CuentaLogin from './page/cunetaLogin.jsx';
import DetallesProfesionales from "./components/detallesProfesional.jsx"



function App() {


  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/perfiles' element={<Perfiles />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/registro' element={<RegistroForm />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cuenta' element={<CuentaLogin />} />
            <Route path="/profesional/:id" element={<DetallesProfesionales />} />
        </Routes>
     </Router>
     
  )
}

export default App
