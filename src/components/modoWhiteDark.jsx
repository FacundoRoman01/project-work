import { useState,useEffect } from "react";
import "../style/modoWhiteOscuro.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';



const modoWhiteDark = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true';
      });
      useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
        localStorage.setItem('darkMode', darkMode);
      }, [darkMode]);

      const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };
    

  return (
    <button onClick={toggleDarkMode} className="btn-modoWO">
      <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
    </button>
  )
}

export default modoWhiteDark