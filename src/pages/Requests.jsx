import React, { useState } from "react";
import "../CSS/Requests.css"; 
import NavBar from '../components/NavBar';

const Requests = () => {
  const [requests, setRequests] = useState([
    { id: 1, item: "Black Wallet", claimer: "ahmed@estin.dz", phone: "0555-123-456", status: "pending" },
    { id: 2, item: "Laptop Bag", claimer: "sara@estin.dz", phone: null, status: "accepted" },
    { id: 3, item: "Car Keys", claimer: "fatima@estin.dz", phone: "0666-987-654", status: "pending" }
  ]);

  // Handle accept action
  const handleAccept = (id) => {
    setRequests(requests.map(req => req.id === id ? { ...req, status: "accepted" } : req));
  };

  // Handle reject action
  const handleReject = (id) => {
    setRequests(requests.map(req => req.id === id ? { ...req, status: "rejected" } : req));
  };

  return (
    <div className="requests-container">
      <NavBar/>
      <h2>My Requests</h2>
      {requests.length === 0 ? (
        <p className="empty">No requests yet.</p>
      ) : (
        <ul className="requests-list">
          {requests.map((request, index) => (
            <li 
              key={request.id} 
              className={`request-item ${request.status}`} 
              style={{ animationDelay: `${index * 0.1}s` }} // Staggered animation
            >
              <p><strong>Item:</strong> {request.item}</p>
              <p><strong>Claimer:</strong> {request.claimer}</p>
              {request.phone && <p className="phone"><strong>Phone:</strong> {request.phone}</p>}
              <p className="status"><strong>Status:</strong> {request.status}</p>
              
              {request.status === "pending" && (
                <div className="actions">
                  <button className="accept-btn" onClick={() => handleAccept(request.id)}>Accept</button>
                  <button className="reject-btn" onClick={() => handleReject(request.id)}>Reject</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Requests;
