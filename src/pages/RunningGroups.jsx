import React, { useState } from 'react';
import './RunningGroups.css';

const RunningGroups = () => {
  const [groups, setGroups] = useState([
    { id: 1, name: 'Beogradski trkači', location: 'Beograd', members: 10 },
    { id: 2, name: 'Novi Sad Runners', location: 'Novi Sad', members: 8 },
  ]);
  const [newGroup, setNewGroup] = useState({ name: '', location: '' });
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGroup({ ...newGroup, [name]: value });
  };

  const handleAddGroup = (e) => {
    e.preventDefault();
    if (!newGroup.name || !newGroup.location) {
      setMessage('Molimo popunite sva polja.');
      return;
    }

    const newId = groups.length ? groups[groups.length - 1].id + 1 : 1;
    setGroups([...groups, { id: newId, ...newGroup, members: 0 }]);
    setNewGroup({ name: '', location: '' });
    setMessage('Grupa je uspešno dodata!');
  };

  const handleSelectGroup = (group) => {
    setSelectedGroup(group);
  };

  return (
    <div>
      <h1>Trkačke grupe</h1>
      {message && <p>{message}</p>}

      <form onSubmit={handleAddGroup}>
        <label>
          Naziv grupe:
          <input
            type="text"
            name="name"
            value={newGroup.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Lokacija:
          <input
            type="text"
            name="location"
            value={newGroup.location}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Dodaj grupu</button>
      </form>

      <ul>
        {groups.map((group) => (
          <li key={group.id} onClick={() => handleSelectGroup(group)}>
            {group.name} - {group.location} ({group.members} članova)
          </li>
        ))}
      </ul>

      {selectedGroup && (
        <div>
          <h2>Detalji grupe</h2>
          <p>
            <strong>Naziv:</strong> {selectedGroup.name}
          </p>
          <p>
            <strong>Lokacija:</strong> {selectedGroup.location}
          </p>
          <p>
            <strong>Broj članova:</strong> {selectedGroup.members}
          </p>
        </div>
      )}
    </div>
  );
};

export default RunningGroups;
