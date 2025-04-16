import { useState,useEffect } from "react";
import "../CSS/MyClaims.css";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import axios from 'axios';

/*
const sampleClaims = [
  { id: 1, name: "Student Card", image: "../assets/card.png", place: "Library", date: "2025-03-17", status: "pending" },
  { id: 2, name: "Charger", image: "../assets/charger.png", place: "Cafeteria", date: "2025-03-16", status: "accepted", finderEmail: "johndoe@estin.dz", finderPhone: "+213 555 123 456" },
  { id: 3, name: "Glasses", image: "../assets/glasses.png", place: "Classroom", date: "2025-03-15", status: "rejected" },
  { id: 4, name: "Student Card", image: "../assets/card.png", place: "Library", date: "2025-03-17", status: "pending" },
  { id: 5, name: "Charger", image: "../assets/charger.png", place: "Cafeteria", date: "2025-03-16", status: "accepted", finderEmail: "johndoe@estin.dz", finderPhone: "+213 555 123 456" },
  { id: 6, name: "Glasses", image: "../assets/glasses.png", place: "Classroom", date: "2025-03-15", status: "rejected" },
];
*/
function MyClaims() {
  const [claims, setClaims] = useState([]);
  useEffect(() => {
    axios.get('https://67fd5ab53da09811b1758011.mockapi.io/api/claim')
      .then(res => {
        console.log('API Data:', res.data); 
        setClaims(res.data);
      })
      .catch(err => console.log(err));
  }, []);


  const cancelClaim = (id) => {
    setClaims(claims.filter(claim => claim.id !== id));
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
            <img src={claim.image} alt={claim.name} className="claim-image" />
            <h3>{claim.name}</h3>
            <p><strong>Found at:</strong> {claim.place}</p>
            <p><strong>Claimed on:</strong> {claim.date}</p>
            <p className="status-label">Status: {claim.status.toUpperCase()}</p>
            
            {claim.status === "pending" && (
              <button className="cancel-btn" onClick={() => cancelClaim(claim.id)}>Cancel Claim</button>
            )}
            
            {claim.status === "accepted" && (
              <div className="finder-info">
                <p><strong>Finder:</strong> {claim.finderEmail}</p>
                <p><strong>Phone:</strong> {claim.finderPhone}</p>
                <button className="message-btn">Message Finder</button>
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
