import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Breadcrumbs from './pages/Breadcrumbs';
import Login from './pages/Login';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotificationSystem from './pages/NotificationSystem';
import EventCreator from './pages/EventCreator';
import RunnerSearch from './pages/RunnerSearch';
import GoalsTracker from './pages/GoalsTracker';
import FilerPaginacija from './pages/FilerPaginacija';
import PartnerRequests from './pages/PartnerRequests';
import RunningGroups from './pages/RunningGroups';
import ActivityLog from './pages/ActivityLog';
import ConnectPartner from './pages/ConnectPartner';
import { MdRunCircle } from 'react-icons/md';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <nav>
      <div className="logo">
          <MdRunCircle size={46} color="white" />
        </div>
  <Link to="/">Početna</Link>
  <Link to="/login">Prijava</Link>
  <div className="dropdown">
    <button>Partnerstvo</button>
    <div className="dropdown-content">
      <Link to="/partner-requests">Zahtevi za partnerstvo</Link>
      <Link to="/connect-partner">Poveži se sa partnerom</Link>
    </div>
  </div>

  <div className="dropdown">
    <button>Grupe i događaji</button>
    <div className="dropdown-content">
      <Link to="/running-groups">Trkačke grupe</Link>
      <Link to="/event-creator">Kreiranje događaja</Link>
    </div>
  </div>

  <div className="dropdown">
    <button>Trkači</button>
    <div className="dropdown-content">
      <Link to="/runner-search">Pretraga trkača</Link>
      <Link to="/filtered-pagination">Trkači</Link>
    </div>
  </div>

  <div className="dropdown">
    <button>Aktivnosti</button>
    <div className="dropdown-content">
      <Link to="/activity-log">Aktivnosti</Link>
      <Link to="/goals-tracker">Ciljevi</Link>
    </div>
  </div>

  <Link to="/notifications">Notifikacije</Link>
  <Link to="/contact">Kontakt</Link>
</nav>
      <Breadcrumbs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notifications" element={<NotificationSystem />} />
        <Route path="/event-creator" element={<EventCreator />} />
        <Route path="/runner-search" element={<RunnerSearch />} />
        <Route path="/goals-tracker" element={<GoalsTracker />} />
        <Route path="/filtered-pagination" element={<FilerPaginacija />} />
        <Route path="/partner-requests" element={<PartnerRequests />} />
        <Route path="/running-groups" element={<RunningGroups />} />
        <Route path="/activity-log" element={<ActivityLog />} />
        <Route path="/connect-partner" element={<ConnectPartner />} />

      </Routes>
    </Router>
  );
};

export default App;
