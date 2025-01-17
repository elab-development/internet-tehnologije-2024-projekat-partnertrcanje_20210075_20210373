import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotificationSystem from './pages/NotificationSystem';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Početna</Link>
        <Link to="/login">Prijava</Link>
        <Link to="/contact">Kontakt</Link>
        <Link to="/notifications">Notifikacije</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notifications" element={<NotificationSystem />} />
        
      </Routes>
    </Router>
  );
};

export default App;
