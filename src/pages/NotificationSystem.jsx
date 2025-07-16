import React, { useState,useEffect } from 'react';
import  './NotificationSystem.css';

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(()=>{
    console.log("New notification!");
  },[notifications]);

  const addNotification = (message) => {
    setNotifications([...notifications, message]);
    setTimeout(() => {
      setNotifications((prev) => prev.slice(1));
    }, 3000); 
  };

  return (
    <div>
      <button onClick={() => addNotification('Novi zahtev za partnerstvo!')}>
        Primi zahtev
      </button>
      <button onClick={() => addNotification('Događaj uspešno kreiran!')}>
        Kreiraj događaj
      </button>

      <div className="notifications">
        {notifications.map((notification, index) => (
          <div key={index} className="notification">
            {notification}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationSystem;
