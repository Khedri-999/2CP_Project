import NavBar from "../components/NavBar";
import FilterBar from "../components/FilterBar";
import SideBar from "../components/SideBar";
import FoundItemCard from "../components/FoundItemCard";
import '../CSS/Home.CSS';
import React,{ useState, useEffect } from "react";
import img1 from '../assets/picture.jpg';
import axios from 'axios';

function Home() {
  const [items, setItems] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const [image, setImage] = useState(null);
  const [selectedSide,setSelectedSide] = useState('Home');
  const [claimForm, setClaimForm] = useState({
  phone: "",
  message: "",
  imageFile: null,
  });


  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Attempting to fetch data from: http://127.0.0.1:8000/api/posts/post-items/all/");
  
    axios
      .get("http://127.0.0.1:8000/api/posts/post-items/all/", {
        headers: token ? { Authorization: `Token ${token}` } : undefined,
      })
      .then(res => {
        console.log("API Response Status:", res.status);
        console.log("API Data:", res.data);
  
        if (Array.isArray(res.data)) {
          setItems(res.data);
        } else if (res.data && Array.isArray(res.data.results)) {
          setItems(res.data.results); // if paginated
        } else {
          console.warn("Received data is not an array:", res.data);
          setItems([]);
        }
      })
      .catch(err => {
        if (err.response) {
          console.error("Error Response Data:", err.response.data);
          console.error("Error Response Status:", err.response.status);
          console.error("Error Response Headers:", err.response.headers);
        } else if (err.request) {
          console.error("Error Request:", err.request);
          alert("Could not connect to the backend server. Is it running?");
        } else {
          console.error("Error Message:", err.message);
        }
        setItems([]); // empty on error
      });
  }, []);
  

  const handleClaimChange = e => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setClaimForm(f => ({ ...f, imageFile: files[0] }));
    } else {
      setClaimForm(f => ({ ...f, [name]: value }));
    }
  };

  const handleClaimSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("post_item", selectedContact.id);
    formData.append("message", claimForm.message);
    if (claimForm.imageFile) {
      formData.append("image", claimForm.imageFile);
    }
  
    axios.post(
      "http://localhost:8000/api/claims/",
      formData,
      {
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then((res) => {
      alert("Claim submitted!");
      setSelectedContact(null);
      setClaimForm({ phone: "", message: "", imageFile: null });
    })
    .catch((err) => {
      console.error("Claim error:", err.response?.data || err);
      alert("Failed to submit claim.");
    });
  };
  
  
  


  const filteredItems = items.filter((item) => {
    if (selectedFilter === "all") return true;
    if (!item.category || item.category.id == null) return false;
    return String(item.category.id) === String(selectedFilter);
  });
  
  

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

      <SideBar/>

      <div className="items-container">
        {filteredItems.map((item) => (
          <FoundItemCard
            item={item}
            key={item.id}
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
              <img src={selectedItem.image || img1} alt="item" className={`modal-image ${selectedItem.blur_image ? "blurred" : ""}`} />
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
