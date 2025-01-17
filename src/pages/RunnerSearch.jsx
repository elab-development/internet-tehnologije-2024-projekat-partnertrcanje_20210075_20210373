import React, { useState } from 'react';
import './RunnerSearch.css';


const runners = [
  { name: 'Ana', city: 'Beograd', level: 'Početnik' },
  { name: 'Marko', city: 'Novi Sad', level: 'Napredni' },
  { name: 'Jovana', city: 'Niš', level: 'Srednji' },
];

const RunnerSearch = () => {
  const [search, setSearch] = useState('');
  const [filteredRunners, setFilteredRunners] = useState(runners);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);
    setFilteredRunners(
      runners.filter(
        (runner) =>
          runner.name.toLowerCase().includes(query) ||
          runner.city.toLowerCase().includes(query) ||
          runner.level.toLowerCase().includes(query)
      )
    );
  };

  return (
    <div>
      <h1>Pretraga trkača</h1>
      <input
        type="text"
        placeholder="Pretraži trkače..."
        value={search}
        onChange={handleSearch}
      />
      <ul>
        {filteredRunners.map((runner, index) => (
          <li key={index}>
            {runner.name} - {runner.city} ({runner.level})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RunnerSearch;
