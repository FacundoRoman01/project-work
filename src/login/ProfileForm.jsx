import  { useState, useEffect } from 'react';
import "../style/profileLogin.css";
// import "../style/profileContact.css";
import ProfileContact from "../login/ProfileContact.jsx";

const ProfileForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        description: '',
        availability: '',
        experience: '',
        location: '',
        profession: '',
        specialty: '',
        province: '',
        city: '',
        zone: '',
        link: '',
        linkedin: '',
        twitter: '',
        facebook: '',
        instagram: '',
        whatsapp: '',
        googlemaps: '',
        webpage: '',
        skills: ''
    });

    useEffect(() => {
        // Simulate fetching data from a server
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(data => {
                // Update formData with the fetched data
                setFormData({
                    name: data.name,
                    title: 'Desarrollador Full Stack Jr',
                    description: 'Disponible para trabajar',
                    availability: '6 meses a 1 año',
                    experience: 'Remoto',
                    location: data.address.city,
                    profession: 'developer',
                    specialty: 'frontend',
                    province: 'buenosaires',
                    city: 'buenosaires',
                    zone: 'north',
                    link: 'https://github.com/pemaldonado',
                    linkedin: 'https://www.linkedin.com',
                    twitter: 'https://twitter.com',
                    facebook: 'https://facebook.com',
                    instagram: 'https://instagram.com',
                    whatsapp: 'https://wa.me',
                    googlemaps: 'https://maps.google.com',
                    webpage: 'https://example.com',
                    skills: 'Python, SQL, Algorithm, Development'
                });
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate sending data to a server
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Datos guardados con éxito');
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Error al guardar los datos');
            });
    };

    return (
        <form className="profile-form" onSubmit={handleSubmit}>
             <ProfileContact /> 
            <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="title">Titular</label>
                <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="description">Descripción</label>
                <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="availability">Disponibilidad</label>
                <input type="text" id="availability" name="availability" value={formData.availability} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="experience">Experiencia</label>
                <input type="text" id="experience" name="experience" value={formData.experience} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="location">Ubicación</label>
                <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="profession">Profesión</label>
                <input type="text" id="profession" name="profession" value={formData.profession} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="specialty">Especialidad</label>
                <input type="text" id="specialty" name="specialty" value={formData.specialty} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="province">Provincia</label>
                <input type="text" id="province" name="province" value={formData.province} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="city">Ciudad</label>
                <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="zone">Zona</label>
                <input type="text" id="zone" name="zone" value={formData.zone} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="link">Link</label>
                <input type="url" id="link" name="link" value={formData.link} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="linkedin">LinkedIn</label>
                <input type="url" id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="twitter">Twitter</label>
                <input type="url" id="twitter" name="twitter" value={formData.twitter} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="facebook">Facebook</label>
                <input type="url" id="facebook" name="facebook" value={formData.facebook} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="instagram">Instagram</label>
                <input type="url" id="instagram" name="instagram" value={formData.instagram} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="whatsapp">WhatsApp</label>
                <input type="url" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="googlemaps">Google Maps</label>
                <input type="url" id="googlemaps" name="googlemaps" value={formData.googlemaps} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="webpage">Página Web</label>
                <input type="url" id="webpage" name="webpage" value={formData.webpage} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="skills">Conocimientos y atributos</label>
                <textarea id="skills" name="skills" value={formData.skills} onChange={handleChange}></textarea>
            </div>
            <button className="btn black">Guardar cambios</button>
            
        </form>
    );
};

export default ProfileForm;
