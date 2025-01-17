import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const Home = () => {
  const openDetails = () => {
    alert('Pogledaj detalje');
  };

  return (
    <div>
      <h1>Početna stranica</h1>
      <p>Dobrodošli na aplikaciju za nalaženje partnera za trčanje!</p>

      <Card
        title="Grupa trkača"
        description="Započnite trčanje sa grupom u Beogradu!"
        imageUrl="/images/group.jpg"
        onClick={openDetails}
      />

      <Button text="Pogledaj detalje" onClick={openDetails} />
    </div>
  );
};

export default Home;
