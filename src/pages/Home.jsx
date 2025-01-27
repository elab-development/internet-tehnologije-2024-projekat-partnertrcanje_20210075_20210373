import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
  const openDetails = () => {
    alert('Pogledaj detalje');
  };
  const navigate = useNavigate();
  const goToRunnerSearch = () => {
    navigate('/runner-search'); 
  };
  const goToRunningGroups = () => {
    navigate('/running-groups'); 
  };
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setUploadStatus('Fajl je spreman za slanje.');
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (!file) {
      setUploadStatus('Molimo izaberite fajl pre slanja.');
      return;
    }

    setTimeout(() => {
      setUploadStatus(`Fajl "${file.name}" je uspešno poslat!`);
      setFile(null);
    }, 1000);
  };
  return (
    <div>
      <h1>Početna stranica</h1>
      <p>Dobrodošli na aplikaciju za nalaženje partnera za trčanje!</p>

      <Card
        title="Grupa trkača"
        description="Započnite trčanje sa grupom u Beogradu!"
        imageUrl="/images/group.jpg"
        onClick={goToRunningGroups}
      />
      &emsp;<Button text="Pogledaj detalje" onClick={openDetails} />
      <Card
        title="Trkači"
        description="Započnite trčanje sa novim trkačima!"
        imageUrl="/images/trkac.jpeg"
        onClick={goToRunnerSearch}
      />
      &emsp;<Button text="Pogledaj detalje" onClick={openDetails} />

      <h2>Upload fajlova</h2>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Pošalji fajl</button>
      </form>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default Home;
