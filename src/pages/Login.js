import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import Modal from '../components/Modal';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Dodaj logiku za prijavu
    setModalOpen(true);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Unesite email"
        />
        <InputField
          label="Lozinka"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Unesite lozinku"
        />
        <Button text="Prijavi se" onClick={handleLogin} />
      </form>

      <Modal isOpen={isModalOpen} closeModal={() => setModalOpen(false)}>
        <h2>Uspešna prijava!</h2>
      </Modal>
    </div>
  );
};

export default Login;
