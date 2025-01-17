import React, { useState } from 'react';
import './EventCreator.css';


const EventCreator = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ name: '', location: '', date: '' });

  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const addEvent = () => {
    setEvents([...events, newEvent]);
    setNewEvent({ name: '', location: '', date: '' });
  };

  return (
    <div>
      <h1>Kreiraj događaj</h1>
      <input
        type="text"
        name="name"
        placeholder="Naziv događaja"
        value={newEvent.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="location"
        placeholder="Lokacija"
        value={newEvent.location}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        value={newEvent.date}
        onChange={handleChange}
      />
      <button onClick={addEvent}>Dodaj događaj</button>

      <h3>Lista događaja:</h3>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            {event.name} - {event.location} ({event.date})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventCreator;
