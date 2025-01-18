import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotificationSystem from './pages/NotificationSystem';
import EventCreator from './pages/EventCreator';
import RunnerSearch from './pages/RunnerSearch';
import GoalsTracker from './pages/GoalsTracker';
import FilerPaginacija from './pages/FilerPaginacija';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Početna</Link>
        <Link to="/login">Prijava</Link>
        <Link to="/contact">Kontakt</Link>
        <Link to="/notifications">Notifikacije</Link>
        <Link to="/event-creator">Kreiranje događaja</Link>
        <Link to="/runner-search">Pretraga trkača</Link>
        <Link to="/goals-tracker">Ciljevi</Link>
        <Link to="/filtered-pagination">Trkači</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notifications" element={<NotificationSystem />} />
        <Route path="/event-creator" element={<EventCreator />} />
        <Route path="/runner-search" element={<RunnerSearch />} />
        <Route path="/goals-tracker" element={<GoalsTracker />} />
        <Route path="/filtered-pagination" element={<FilerPaginacija />} />
        
      </Routes>
    </Router>
  );
};

export default App;
