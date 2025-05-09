import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import FilterBar from "../components/FilterBar";
import SideBar from "../components/SideBar";
import FoundItemCard from "../components/FoundItemCard";
import img1 from '../assets/picture.jpg';
import '../CSS/Home.css';

// set a default base URL for axios
axios.defaults.baseURL = "http://127.0.0.1:8000";

function Home() {
  const [items, setItems] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const [claimForm, setClaimForm] = useState({
    phone: "",
    message: "",
    imageFile: null,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("/api/posts/post-items/all/", {
        headers: token ? { Authorization: `Token ${token}` } : undefined,
      })
      .then((res) => {
        const data = Array.isArray(res.data)
          ? res.data
          : Array.isArray(res.data.results)
          ? res.data.results
          : [];
        setItems(data);
      })
      .catch((err) => {
        console.error(err);
        setItems([]);
      });
  }, []);

  const handleClaimChange = (e) => {
    const { name, value, type, files } = e.target;
    setClaimForm((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleClaimSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("post_item", selectedContact.id);
    formData.append("message", claimForm.message);
    if (claimForm.imageFile) formData.append("image", claimForm.imageFile);

    axios
      .post("/api/claims/", formData, {
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        alert("Claim submitted!");
        setSelectedContact(null);
        setClaimForm({ phone: "", message: "", imageFile: null });
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to submit claim.");
      });
  };

  const filteredItems = items.filter((item) => {
    if (selectedFilter === "all") return true;
  
    const catId =
      typeof item.category === "object"
        ? item.category.id
        : item.category;
  
    return String(catId) === String(selectedFilter);
  });
  

  document.title = "Home";

  return (
    <div>
      <div className="header">
        <NavBar />
        <FilterBar
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </div>

      <SideBar />

      <div className="items-container">
        {filteredItems.map((item) => (
          <FoundItemCard
            key={item.id}
            item={item}
            onContactClick={() => setSelectedContact(item)}
            onDetailClick={() => setSelectedItem(item)}
          />
        ))}
      </div>

   

      {/* Item Details Modal */}
      {selectedItem && (
        <div className="modal-container">
          <div className="modal">
            <div className="modal-image-container">
            <img 
              src={selectedItem.image || img1} 
              alt="item" 
              className={`modal-image ${selectedItem.blur_image ? "blurred" : ""}`} 
            />
            </div>
            <div className="modal-details-container">
              <h3>{selectedItem.category?.name || selectedItem.name}</h3>
              <p>Found at: {selectedItem.location}</p>
              <p>Date found: {selectedItem.date_found}</p>
              {selectedItem.time_found && (
                <p>Time found: {selectedItem.time_found}</p>
              )}
              <p>Description: {selectedItem.description}</p>
              <button
                className="close-btn"
                onClick={() => setSelectedItem(null)}
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Form */}
      {selectedContact && (
  <div className="form-container">
    <form className="form" onSubmit={handleClaimSubmit}>

      <h3>Claim "{selectedContact.category?.name || selectedContact.name}"</h3>


      <label>Proof of ownership (message):</label>
      <textarea
        name="message"
        placeholder="Where/when did you lose it?"
        value={claimForm.message}
        onChange={handleClaimChange}
        required
      />

      <label>Upload a photo (optional):</label>
      <input
        type="file"
        name="imageFile"
        accept="image/*"
        onChange={handleClaimChange}
      />
      {claimForm.imageFile && (
        <img
          src={URL.createObjectURL(claimForm.imageFile)}
          alt="Preview"
          className="preview-image"
        />
      )}

      <div className="buttons">
        <button
          type="button"
          className="close-btn"
          onClick={() => setSelectedContact(null)}
        >
          Close
        </button>
        <button type="submit" className="submit-btn">
          Submit Claim
        </button>
      </div>
    </form>
  </div>
)}

</div>
  );
}

export default Home;
