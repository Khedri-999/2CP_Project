import React, { useState } from "react";
import "../CSS/Requests.css";

const Requests = () => {
  const [requests, setRequests] = useState([
    { id: 1, item: "Black Wallet", claimer: "ahmed@estin.dz", phone: "0555-123-456", image: null, details: "Leather wallet with a zipper.", status: "pending" },
    { id: 2, item: "Laptop Bag", claimer: "sara@estin.dz", phone: null, image: "laptop-bag.jpg", details: "Black Dell laptop bag.", status: "pending" },
    { id: 3, item: "Black Wallet", claimer: "ahmed@estin.dz", phone: "0555-123-456", image: null, details: "Leather wallet with a zipper.", status: "pending" },
    { id: 4, item: "Laptop Bag", claimer: "sara@estin.dz", phone: null, image: "laptop-bag.jpg", details: "Black Dell laptop bag.", status: "pending" },
  ]);

  const [selectedRequest, setSelectedRequest] = useState(null);

  // Open modal with selected request
  const openModal = (request) => {
    setSelectedRequest(request);
  };

  // Close modal
  const closeModal = () => {
    setSelectedRequest(null);
  };

  // Handle accept
  const handleAccept = (id) => {
    setRequests(requests.map(req => req.id === id ? { ...req, status: "accepted" } : req));
    closeModal();
  };

  // Handle reject
  const handleReject = (id) => {
    setRequests(requests.map(req => req.id === id ? { ...req, status: "rejected" } : req));
    closeModal();
  };

  return (
    <div className="requests-container">
      <h2>My Requests</h2>
      {requests.length === 0 ? (
        <p className="empty">No requests yet.</p>
      ) : (
        <ul className="requests-list">
          {requests.map((request) => (
            <li key={request.id} className={`request-item ${request.status}`}>
              <p><strong>Item:</strong> {request.item}</p>
              <p><strong>Claimer:</strong> {request.claimer}</p>
              {request.phone && <p><strong>Phone:</strong> {request.phone}</p>}
              <p className="status"><strong>Status:</strong> {request.status}</p>
              {request.status === "pending" && (
                <button className="view-btn" onClick={() => openModal(request)}>View Details</button>
              )}
            </li>
          ))}
        </ul>
      )}

      {/* Modal Popup */}
      {selectedRequest && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Claim Details</h3>
            <p><strong>Item:</strong> {selectedRequest.item}</p>
            <p><strong>Claimer:</strong> {selectedRequest.claimer}</p>
            {selectedRequest.phone && <p><strong>Phone:</strong> {selectedRequest.phone}</p>}
            <p><strong>Details:</strong> {selectedRequest.details}</p>
            {selectedRequest.image && <img src={selectedRequest.image} alt="Item" className="modal-image" />}
            
            <div className="modal-actions">
              <button className="accept-btn" onClick={() => handleAccept(selectedRequest.id)}>Accept</button>
              <button className="reject-btn" onClick={() => handleReject(selectedRequest.id)}>Reject</button>
              <button className="close-btn" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Requests;
