import { useState,useEffect } from "react";
import "../CSS/MyClaims.css";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import axios from 'axios';
import img1 from "../assets/picture.jpg";


function MyClaims() {
  const [claims, setClaims] = useState([]);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
    
    axios.get('http://localhost:8000/api/claims/', {
      headers: {
        Authorization: `Token ${token}`,
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
      src={claim.image || img1}          
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

    <a
  href={`mailto:${claim.finderEmail}?subject=Claim about ${encodeURIComponent(claim.name)}&body=${encodeURIComponent(`Hello,\n\nI'm contacting you regarding the item "${claim.name}" I claimed on Found-It.\n\nThank you!`)}`}
  className="email-btn"
>
  Email Finder
</a>

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
