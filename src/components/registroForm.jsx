import "../style/RegistroForm.css"
import bosquePina from "../img/pinabosq.jpg"
import { useState } from "react";


  
const registroForm = () => {
        const [form, setForm] = useState({
          nombre: '',
          usuario: '',
          email: '',
          contrasena: ''
        });
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setForm({
            ...form,
            [name]: value
          });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log('Form submitted:', form);
        };
      
        return (
          <div className="custom-login-page">
           
              <div className="custom-form-content">
                
                <form onSubmit={handleSubmit}>
                  <div className="custom-group-form">
                    <div className="custom-form-group">
                      <label htmlFor="nombre">Nombre</label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="custom-form-group">
                      <label htmlFor="usuario">Usuario</label>
                      <input
                        type="text"
                        id="usuario"
                        name="usuario"
                        value={form.usuario}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="custom-form-group-second">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="custom-form-group-second">
                    <label htmlFor="contrasena">Contraseña</label>
                    <input
                      type="password"
                      id="contrasena"
                      name="contrasena"
                      value={form.contrasena}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="custom-links">
                    <p>
                      Al registrarte estás aceptando nuestros{' '}
                      <a href="#">términos y condiciones.</a>
                    </p>
                  </div>
                  <button type="submit" className="custom-btn-submit">
                    Crear cuenta
                  </button>
                </form>
              </div>
              <div className="custom-image-content">
                <img
                  src={bosquePina}
                  alt="Side"
                  className="custom-side-image"
                />
              </div>
            
          </div>
  );
};

export default registroForm