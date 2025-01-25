import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [resetMode, setResetMode] = useState(false); 
  const [resetEmail, setResetEmail] = useState('');
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage(`Dobrodošli nazad, ${email}!`);
    setEmail('');
    setPassword('');
    setModalOpen(true);
    navigate('/');
  };
  const requestToken = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setMessage('Token je poslat na vaš email!');
    }, 1000);
  };

  const resetPassword = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setMessage('Lozinka je uspešno promenjena!');
      setResetMode(false); 
    }, 1000);
  };

  return (
    <div>
      <h1>{resetMode ? 'Resetovanje lozinke' : 'Prijava'}</h1>
      {message && <p>{message}</p>}

      {!resetMode ? (
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Lozinka:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Prijava</button>
          <p onClick={() => setResetMode(true)} style={{ cursor: 'pointer', color: '#007bff' }}>
            Zaboravili ste lozinku?
          </p>
        </form>
      ) : (
        <form onSubmit={token ? resetPassword : requestToken}>
          {!token ? (
            <>
              <label>Unesite vaš email:</label>
              <input
                type="email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                required
              />
              <button type="submit">Zatraži token</button>
            </>
          ) : (
            <>
              <label>Unesite token:</label>
              <input
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                required
              />
              <label>Nova lozinka:</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <button type="submit">Promeni lozinku</button>
            </>
          )}
          <p onClick={() => setResetMode(false)} style={{ cursor: 'pointer', color: '#007bff' }}>
            Vrati se na prijavu
          </p>
        </form>
      )}
    </div>
  );
};

export default Login;
