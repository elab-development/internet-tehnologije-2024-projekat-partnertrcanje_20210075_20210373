import React, { useState } from 'react';
import './ConnectPartner.css';

const ConnectPartner = () => {
  const [partnerId, setPartnerId] = useState('');
  const [message, setMessage] = useState('');

  const handleConnect = (e) => {
    e.preventDefault();

    if (!partnerId.trim()) {
      setMessage('Molimo unesite ID partnera.');
      return;
    }

    // Simulacija povezivanja sa partnerom
    setTimeout(() => {
      setMessage(`Uspešno ste se povezali sa partnerom ID: ${partnerId}!`);
      setPartnerId('');
    }, 1000);
  };

  return (
    <div>
      <h1>Povezivanje sa partnerom</h1>
      {message && <p>{message}</p>}

      <form onSubmit={handleConnect}>
        <label>
          Unesite ID partnera:
          <input
            type="text"
            value={partnerId}
            onChange={(e) => setPartnerId(e.target.value)}
            placeholder="npr. 12345"
            required
          />
        </label>
        <button type="submit">Poveži se</button>
      </form>
    </div>
  );
};

export default ConnectPartner;
