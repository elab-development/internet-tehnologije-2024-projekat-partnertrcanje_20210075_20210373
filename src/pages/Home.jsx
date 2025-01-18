import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const openDetails = () => {
    alert('Pogledaj detalje');
  };
  const navigate = useNavigate();
  const goToRunnerSearch = () => {
    navigate('/runner-search'); 
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
      <Card
        title="Trkači"
        description="Započnite trčanje sa novim trkačima!"
        imageUrl="/images/trkac.jpeg"
        onClick={goToRunnerSearch}
      />

      <Button text="Pogledaj detalje" onClick={openDetails} />
    </div>
  );
};

export default Home;
