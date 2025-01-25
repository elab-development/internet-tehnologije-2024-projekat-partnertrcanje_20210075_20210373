import React, { useState } from 'react';
import './PartnerRequests.css';

const PartnerRequests = () => {
  const [requests, setRequests] = useState([
    { id: 1, name: 'Marko', status: 'Pending' },
    { id: 2, name: 'Jovana', status: 'Accepted' },
  ]);
  const [newRequest, setNewRequest] = useState('');

  const handleAddRequest = () => {
    if (newRequest.trim() === '') {
      alert('Unesite ime za novi zahtev.');
      return;
    }

    const newId = requests.length ? requests[requests.length - 1].id + 1 : 1;
    setRequests([...requests, { id: newId, name: newRequest, status: 'Pending' }]);
    setNewRequest('');
  };

  const handleDeleteRequest = (id) => {
    const updatedRequests = requests.filter((request) => request.id !== id);
    setRequests(updatedRequests);
  };

  return (
    <div>
      <h1>Zahtevi za partnerstvo</h1>

      <div>
        <input
          type="text"
          placeholder="Unesite ime"
          value={newRequest}
          onChange={(e) => setNewRequest(e.target.value)}
        />
        <button onClick={handleAddRequest}>Dodaj zahtev</button>
      </div>

      <ul>
        {requests.map((request) => (
          <li key={request.id}>
            {request.name} - {request.status}{' '}
            <button onClick={() => handleDeleteRequest(request.id)}>Obriši</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PartnerRequests;
