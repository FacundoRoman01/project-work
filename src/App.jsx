import './App.css'
import Header from './components/header.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./page/home.jsx"
import Perfiles from "./page/perfiles.jsx"


function App() {

  // const profesionales = [
  //   { id: 1, nombre: 'Juan Pérez', ocupacion: 'Ingeniero de Software', imagen: 'https://fakeimg.pl/300/' },
  //   { id: 2, nombre: 'María García', ocupacion: 'Diseñadora UX/UI', imagen: 'https://fakeimg.pl/300/' },
  //   { id: 3, nombre: 'Carlos López', ocupacion: 'Desarrollador Frontend', imagen: 'https://fakeimg.pl/300/' },

  // ];

 

  return (
    <Router>
      <Header />
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/perfiles' element={<Perfiles />} />
        </Routes>
     </Router>
  )
}

export default App
