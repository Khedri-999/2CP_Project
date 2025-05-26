import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import '../CSS/Notification.css'; 

const Notification = ({ notifications }) => {
  const [isOpen, setIsOpen] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="notification-container">
      <button
        className="notification-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBell size={22} />
        {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
      </button>

      {isOpen && (
        <div className="notification-dropdown">
          {notifications.length === 0 ? (
            <p className="empty">No notifications</p>
          ) : (
            notifications.map((n, i) => (
              <div key={i} className={`notification-item ${n.read ? '' : 'unread'}`}>
                {n.message}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Notification;
