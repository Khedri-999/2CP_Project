import React, { useState, useEffect, useCallback } from 'react';
import { FaBell } from 'react-icons/fa';
import '../CSS/Notification.css';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const token = localStorage.getItem('token');

  // Fetch notifications
  const fetchNotifications = useCallback(() => {
    fetch('/api/notifications/', {
      headers: { 'Authorization': `Token ${token}` },
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch notifications');
        return res.json();
      })
      .then(data => setNotifications(data))
      .catch(err => console.error(err));
  }, [token]);

  // Mark all as read, then re-fetch
  const markAllRead = () => {
    return fetch('/api/notifications/mark-all-read/', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json',
      },
    });
  };

  // When dropdown opens: mark all read, then refetch
  useEffect(() => {
    if (isOpen) {
      markAllRead()
        .then(res => {
          if (!res.ok) throw new Error('Failed to mark read');
          return fetchNotifications();
        })
        .catch(console.error);
    }
  }, [isOpen, fetchNotifications]);

  // initial fetch so badge shows up without having to open dropdown
  useEffect(() => {
    fetchNotifications();
    // optional: poll every 30s
    const iv = setInterval(fetchNotifications, 30000);
    return () => clearInterval(iv);
  }, [fetchNotifications]);

  const unreadCount = notifications.filter(n => !n.is_read).length;

  return (
    <div className="notification-container">
      <button
        className="notification-btn"
        onClick={() => setIsOpen(o => !o)}
        aria-label="Notifications"
      >
        <FaBell size={22} />
        {unreadCount > 0 && (
          <span className="notification-badge">{unreadCount}</span>
        )}
      </button>

      {isOpen && (
        <div className="notification-dropdown">
          {notifications.length === 0 ? (
            <p className="empty">No notifications</p>
          ) : (
            notifications.map(n => (
              <div
                key={n.id}
                className={`notification-item ${n.is_read ? '' : 'unread'}`}
              >
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
