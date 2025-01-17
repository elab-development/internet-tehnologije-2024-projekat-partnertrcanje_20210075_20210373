import React from 'react';
import './Card.css';

const Card = ({ title, description, imageUrl, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      {imageUrl && <img src={imageUrl} alt={title} className="card-img" />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
