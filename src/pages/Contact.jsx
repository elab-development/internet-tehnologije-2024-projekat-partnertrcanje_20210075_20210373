import React, { useState } from 'react';
import './Contact.css';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Poruka je poslata!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-container">
      <h1>Kontaktirajte nas</h1>
      <p>Imate pitanje? Pošaljite nam poruku i odgovorićemo što je pre moguće!</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Ime</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Unesite vaše ime"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Unesite vaš email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Poruka</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Unesite vašu poruku"
            required
          />
        </div>

        <button type="submit" className="submit-btn">Pošaljite</button>
      </form>
    </div>
  );
};

export default Contact;
