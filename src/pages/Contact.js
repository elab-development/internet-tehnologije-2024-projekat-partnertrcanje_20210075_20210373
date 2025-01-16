import React from 'react';
import Button from '../components/Button';

const Contact = () => {
  const handleContact = () => {
    alert('Kontaktiraj nas putem email-a');
  };

  return (
    <div>
      <h1>Kontakt stranica</h1>
      <p>Email: kontakt@trcanjepartner.rs</p>
      <p>Telefon: +381 123 456 789</p>
      <Button text="Kontaktiraj nas" onClick={handleContact} />
    </div>
  );
};

export default Contact;
