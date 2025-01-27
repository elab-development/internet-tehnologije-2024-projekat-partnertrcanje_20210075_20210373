import React, { useState } from 'react';
import './PartnerRequests.css';

const PartnerRequests = () => {
  const [requests, setRequests] = useState([
    { id: 1, name: 'Marko', city: 'Beograd', status: 'Pending' },
    { id: 2, name: 'Jovana', city: 'Novi Sad', status: 'Accepted' },
  ]);
  const [newRequest, setNewRequest] = useState({
    name: '',
    city: '',
    activityLevel: '',
  });
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRequest({ ...newRequest, [name]: value });
  };

  const handleAddRequest = (e) => {
    e.preventDefault();
    if (!newRequest.name || !newRequest.city || !newRequest.activityLevel) {
      setMessage('Molimo popunite sva polja.');
      return;
    }

    const newId = requests.length ? requests[requests.length - 1].id + 1 : 1;
    setRequests([
      ...requests,
      { id: newId, ...newRequest, status: 'Pending' },
    ]);
    setNewRequest({ name: '', city: '', activityLevel: '' });
    setMessage('Zahtev je uspešno poslat!');
  };

  const handleDeleteRequest = (id) => {
    const updatedRequests = requests.filter((request) => request.id !== id);
    setRequests(updatedRequests);
    setMessage('Zahtev je obrisan.');
  };

  return (
    <div>
      <h1>Zahtevi za partnerstvo</h1>
      {message && <p>{message}</p>}

      {/* Forma za slanje novog zahteva */}
      <form onSubmit={handleAddRequest}>
        <label>
          Ime:
          <input
            type="text"
            name="name"
            value={newRequest.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Grad:
          <input
            type="text"
            name="city"
            value={newRequest.city}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Nivo aktivnosti:
          <select
            name="activityLevel"
            value={newRequest.activityLevel}
            onChange={handleInputChange}
            required
          >
            <option value="">Izaberite...</option>
            <option value="Početnik">Početnik</option>
            <option value="Srednji">Srednji</option>
            <option value="Napredni">Napredni</option>
          </select>
        </label>
        <button type="submit">Pošalji zahtev</button>
      </form>

      {/* Lista postojećih zahteva */}
      <ul>
        {requests.map((request) => (
          <li key={request.id}>
            {request.name} - {request.city} ({request.activityLevel}) -{' '}
            {request.status}{' '}
            <button onClick={() => handleDeleteRequest(request.id)}>Obriši</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PartnerRequests;
