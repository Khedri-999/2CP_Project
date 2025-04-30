import NavBar from "../components/NavBar";
import FilterBar from "../components/FilterBar";
import SideBar from "../components/SideBar";
import FoundItemCard from "../components/FoundItemCard";
import '../CSS/Home.CSS';
import { useState, useEffect } from "react";
import img1 from '../assets/picture.jpg';
import axios from 'axios';

function Home() {
  const [items, setItems] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const [image, setImage] = useState(null);
  const [selectedSide,setSelectedSide] = useState('Home');

  useEffect(() => {
    console.log(`Attempting to fetch data from: `);

    axios.get('http://127.0.0.1:8000/api/found-items/')
      .then(res => {
        console.log('API Response Status:', res.status);
        console.log('API Data:', res.data); 
        if (Array.isArray(res.data)) {
          setItems(res.data);
     } else if (res.data && Array.isArray(res.data.results)) {
          // Common pattern for DRF pagination
          setItems(res.data.results);
     } else {
          console.warn("Received data is not an array:", res.data);
          setItems([]);
       }
      }).catch(err => {
        console.log( err);
        if (err.response) {
        // Request made and server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error Response Data:", err.response.data);
        console.error("Error Response Status:", err.response.status);
        console.error("Error Response Headers:", err.response.headers);
      } else if (err.request) {
        // The request was made but no response was received
        console.error("Error Request:", err.request);
        alert("Could not connect to the backend server. Is it running?");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error Message:', err.message);
      }
      setItems([]); // Set empty array on error
    });
  }, []);

/*
  useEffect(() => {
    axios.get('https://67fd5ab53da09811b1758011.mockapi.io/api/items')
      .then(res => setItems(res.data))
      .catch(err => console.log(err));
  }, []);

useEffect(() => {
  axios.get('https://67fd5ab53da09811b1758011.mockapi.io/api/items')
    .then(res => {
      console.log('API Data:', res.data); // <-- Add this
      setItems(res.data);
    })
    .catch(err => console.log(err));
}, []);
*/


  const filteredItems = items.filter((item) =>
    selectedFilter === 'all' || item.category === selectedFilter
  );

  document.title = 'home';

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };


  return (
    <div>
      <div className="header">
        <NavBar />
        <FilterBar setSelectedFilter={setSelectedFilter} />
      </div>

      <SideBar selectedSide="Home"/>

      <div className="items-container">
        {filteredItems.map((item) => (
          <FoundItemCard
            item={item}
            key={item.id}
            onContactClick={() => setSelectedContact(item.poster)}
            onDetailClick={() => setSelectedItem(item)}
          />
        ))}
      </div>

      {/* Item Details Modal */}
      {selectedItem && (
        <div className="modal-container">
          <div className="modal">
            <div className="modal-image-container">
              <img src={selectedItem.image} alt="item" className="modal-image" />
            </div>
            <div className="modal-details-container">
              <h3>{selectedItem.name}</h3>
              <p>Found at: {selectedItem.place}</p>
              <p>Time: {selectedItem.time}</p>
              <p>Description: {selectedItem.discription}</p>
              <button className="close-btn" onClick={() => setSelectedItem(null)}>X</button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Form */}
      {selectedContact && (
        <div className="form-container">
          <div className="form">
            <input
              type="tel"
              pattern="[0-9]{10}"
              placeholder="Enter phone number"
              maxLength={10}
            />
            <p>Give some details to prove the ownership:</p>
            <input type="text" className="form-text" required />
            <br />
            <label>Upload Image:</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {image && <img src={image} alt="Preview" className="preview-image" />}
            <br />
            <div className="buttons">
              <button className="close-btn" onClick={() => setSelectedContact(null)}>Close</button>
              <button className="submit-btn" onClick={() => alert("Submitted (not implemented yet)")}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
