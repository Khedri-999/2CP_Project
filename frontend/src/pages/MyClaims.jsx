import { useState,useEffect } from "react";
import "../CSS/MyClaims.css";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import axios from 'axios';


function MyClaims() {
  const [claims, setClaims] = useState([]);
  
  useEffect(() => {
    // grab the token your GoogleSignIn flow stored
    const token = localStorage.getItem('token');
    axios.get('http://localhost:8000/api/claims/', {
      headers: {
        // if you used TokenAuthentication:
        Authorization: `Token ${token}`,
        // if you’d switched to JWT: `Bearer ${token}`
      }
    })
    .then(res => {
      console.log('Claims from backend:', res.data);
      setClaims(res.data);
    })
    .catch(console.error);
  }, []);


  const cancelClaim = (id) => {
    const token = localStorage.getItem('token');
    axios.delete(`http://localhost:8000/api/claims/${id}/`, {
      headers: { Authorization: `Token ${token}` }
    })
    .then(() => {
      setClaims(claims.filter(c => c.id !== id));
    })
    .catch(console.error);
  };
  

  return (
    <>
    <div className="header">
      <NavBar />
    </div>
    <SideBar/>
    <div className="my-claims-container">
      <h2>My Claims</h2>
      <div className="claims-grid">
      {claims.map((claim) => (
  <div key={claim.id} className={`claim-card ${claim.status}`}>
    <img
      src={claim.image || img1}           // use default if somehow empty
      alt={claim.name}
      className="claim-image"
    />
    <h3>{claim.name}</h3>
    <p><strong>Found at:</strong> {claim.place}</p>
    <p><strong>Claimed on:</strong> {claim.date}</p>
    <p className="status-label">
      Status: {claim.status.toUpperCase()}
    </p>

    {claim.status === "pending" && (
      <button
        className="cancel-btn"
        onClick={() => cancelClaim(claim.id)}
      >
        Cancel Claim
      </button>
    )}

    {claim.status === "accepted" && (
      <div className="finder-info">
        <p><strong>Finder:</strong> {claim.finderEmail}</p>
        <p><strong>Phone:</strong> {claim.finderPhone || "N/A"}</p>
        <button className="message-btn">
          Message Finder
        </button>
      </div>
    )}
  </div>
))}

      </div>
    </div>
    </>
  );
}

export default MyClaims;
