import React, { useState } from 'react';
import './ActivityLog.css';

const ActivityLog = () => {
  const [activities, setActivities] = useState([
    { id: 1, date: '2025-01-20', type: 'Trčanje', duration: '30 minuta' },
    { id: 2, date: '2025-01-22', type: 'Jogging', duration: '60 minuta' },
  ]);
  const [newActivity, setNewActivity] = useState({ date: '', type: '', duration: '' });
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewActivity({ ...newActivity, [name]: value });
  };

  const handleAddActivity = (e) => {
    e.preventDefault();
    if (!newActivity.date || !newActivity.type || !newActivity.duration) {
      setMessage('Molimo popunite sva polja.');
      return;
    }

    const newId = activities.length ? activities[activities.length - 1].id + 1 : 1;
    setActivities([...activities, { id: newId, ...newActivity }]);
    setNewActivity({ date: '', type: '', duration: '' });
    setMessage('Aktivnost je uspešno dodata!');
  };

  return (
    <div>
      <h1>Aktivnosti korisnika</h1>
      {message && <p>{message}</p>}


      <form onSubmit={handleAddActivity}>
        <label>
          Datum:
          <input
            type="date"
            name="date"
            value={newActivity.date}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Tip aktivnosti:
          <input
            type="text"
            name="type"
            placeholder="Trčanje, Jogging..."
            value={newActivity.type}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Trajanje:
          <input
            type="text"
            name="duration"
            placeholder="npr. 30 minuta"
            value={newActivity.duration}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Dodaj aktivnost</button>
      </form>

   
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            {activity.date} - {activity.type} ({activity.duration})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLog;
