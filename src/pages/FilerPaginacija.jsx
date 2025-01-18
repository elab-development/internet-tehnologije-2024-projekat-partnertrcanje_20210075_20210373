import React, { useState } from 'react';
import './FilterPaginacija.css';

const data = [
  { id: 1, name: 'Ana', city: 'Beograd' },
  { id: 2, name: 'Marko', city: 'Novi Sad' },
  { id: 3, name: 'Jovana', city: 'Niš' },
  { id: 4, name: 'Petar', city: 'Beograd' },
  { id: 5, name: 'Milica', city: 'Kragujevac' },
  { id: 6, name: 'Stefan', city: 'Subotica' },
  { id: 7, name: 'Ivana', city: 'Beograd' },
  { id: 8, name: 'Nikola', city: 'Novi Sad' },
];

const FilterPaginacija = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [filter, setFilter] = useState('');

  
  const filteredData = data.filter((item) =>
    item.city.toLowerCase().includes(filter.toLowerCase())
  );

  
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h2>Lista trkača</h2>
      <input
        type="text"
        placeholder="Filtriraj po gradu..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {currentData.map((item) => (
          <li key={item.id}>
            {item.name} - {item.city}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Prethodna
        </button>
        <span>
          Stranica {currentPage} od {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Sledeća
        </button>
      </div>
    </div>
  );
};

export default FilterPaginacija;
