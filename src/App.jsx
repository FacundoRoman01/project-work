import './App.css'
import Header from './components/header.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./page/home.jsx"
import Perfiles from "./page/perfiles.jsx"
import Contacto from './page/contacto.jsx';
import RegistroForm from "./page/resgistroForm.jsx"
function App() {


  return (
    <Router>
      <Header />
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/perfiles' element={<Perfiles />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/registro' element={<RegistroForm />} />
        </Routes>
     </Router>
  )
}

export default App
