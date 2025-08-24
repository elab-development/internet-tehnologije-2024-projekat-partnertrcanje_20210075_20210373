import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from './ApiService';
import './Registration.css';
import logo from '../assets/logo.png';


const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ime: '',
    prezime: '',
    datum_rodjenja: '',
    pol: '',
    mesto: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegistration = async () => {
    console.log('Register button clicked');
    console.log('Form data:', formData);
    
    try {
      console.log('Calling apiService.register...');
      const response = await apiService.register(formData);
      console.log('Registration response:', response);
      console.log('Response data:', response.data);
      
      // Proveri da li je registracija uspešna
      if (response.data[0] === 'Greska pri registraciji!') {
        // Greška validacije
        const errors = response.data[1];
        console.error('Validation errors:', errors);
        
        // Prikaži greške korisniku
        let errorMessage = 'Greške pri registraciji:\n';
        Object.keys(errors).forEach(key => {
          errorMessage += `${key}: ${errors[key].join(', ')}\n`;
        });
        
        alert(errorMessage);
        return;
      }
      
      // Uspešna registracija
      console.log('Access token:', response.data.access_token);

      apiService.setToken(response.data.access_token);
      console.log('Token set:', response.data.access_token);

      apiService.setLoginInfo(response.data.role, formData.email);
      console.log('Login info set');
      
      // alert('Registracija uspešna! Sada se možete ulogovati.');
      navigate("/login");
    } catch (error) {
      console.error('Greška prilikom registracije:', error);
      console.error('Error details:', error.response?.data);
      // alert('Greška pri registraciji: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="registration-container">
      <div className="form-container">
        <div className="registration-logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="ime"
            placeholder="Ime"
            onChange={handleInputChange}
            className="registration-input"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="prezime"
            placeholder="Prezime"
            onChange={handleInputChange}
            className="registration-input"
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            name="datum_rodjenja"
            placeholder="Datum rođenja"
            onChange={handleInputChange}
            className="registration-input"
          />
        </div>
        <div className="form-group">
          <select
            name="pol"
            onChange={handleInputChange}
            className="select"
          >
            <option value="">Izaberite pol</option>
            <option value="musko">Muško</option>
            <option value="zensko">Žensko</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="mesto"
            placeholder="Mesto"
            onChange={handleInputChange}
            className="registration-input"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleInputChange}
            className="registration-input"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInputChange}
            className="registration-input"
          />
        </div>
        <button onClick={handleRegistration}
          style={{
            backgroundColor: 'transparent',
            color: '#fff',
            padding: '8px 20px',
            border: '1px solid var(--primary)',
            transition: 'all 0.3s ease-out',
            borderRadius: '10px',
            cursor: 'pointer',
            width: "150px",
          }}
        >Registruj se</button>

      </div>
    </div>
  );
}

export default Registration;
