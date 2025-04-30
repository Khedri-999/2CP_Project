import { useState,useEffect } from "react";
import "../CSS/MyClaims.css";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import axios from 'axios';

/*
[
  {
    "name": "name 1",
    "place": "place 1",
    "date": 1744834789,
    "status": "rejected",
    "finderEmail": "finderEmail 1",
    "finderPhone": "finderPhone 1",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFB--qQwqxiCg2aiDWzt826EsyMoAAk37WmA&s",
    "id": "1"
  },
  {
    "name": "name 2",
    "place": "place 2",
    "date": 1744834729,
    "status": "accepted",
    "finderEmail": "finderEmail 2",
    "finderPhone": "finderPhone 2",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXxn1cJViyxDRkaKaEC5JT9J3TVYNUIS_XcA&s",
    "id": "2"
  },
  {
    "name": "name 3",
    "place": "place 3",
    "date": 1744834669,
    "status": "pending",
    "finderEmail": "finderEmail 3",
    "finderPhone": "finderPhone 3",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr5jozk_ak5Xzj25Nr5Uwric1s6TRvwlfUew&s",
    "id": "3"
  },
  {
    "name": "name 4",
    "place": "place 4",
    "date": 1744834609,
    "status": "status 4",
    "finderEmail": "finderEmail 4",
    "finderPhone": "finderPhone 4",
    "image": "bb",
    "id": "4"
  },
  {
    "name": "name 5",
    "place": "place 5",
    "date": 1744834549,
    "status": "status 5",
    "finderEmail": "finderEmail 5",
    "finderPhone": "finderPhone 5",
    "image": "image 5",
    "id": "5"
  },
  {
    "name": "name 6",
    "place": "place 6",
    "date": 1744834489,
    "status": "status 6",
    "finderEmail": "finderEmail 6",
    "finderPhone": "finderPhone 6",
    "image": "image 6",
    "id": "6"
  },
  {
    "name": "name 7",
    "place": "place 7",
    "date": 1744834429,
    "status": "status 7",
    "finderEmail": "finderEmail 7",
    "finderPhone": "finderPhone 7",
    "image": "image 7",
    "id": "7"
  }
]


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
