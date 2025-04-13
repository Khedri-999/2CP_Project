import React, { useState } from "react";
import "../styles/founditem.css";

const FoundItemForm = () => {
  const [item, setItem] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [timeFrom, setTimeFrom] = useState("");
  const [timeTo, setTimeTo] = useState("");
  const [image, setImage] = useState(null);
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agree) {
      alert("You must agree to the terms of use.");
      return;
    }

    // Prepare form data (later to be sent to backend)
    const formData = {
      item,
      description,
      location,
      date,
      timeFrom,
      timeTo,
      image,
    };
    console.log("Submitted Found Item:", formData);
    alert("Item reported!");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="found-container">
      <h2 className="found-title">Report Found Item</h2>
      <form className="found-form" onSubmit={handleSubmit}>
        <label>Item:</label>
        <select value={item} onChange={(e) => setItem(e.target.value)} required>
          <option value="">-- Select --</option>
          <option value="keys">Keys</option>
          <option value="wallet">Wallet</option>
          <option value="phone">Phone</option>
          <option value="bag">Bag</option>
          <option value="other">Other</option>
        </select>

        <label>Description:</label>
        <textarea
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label>Location:</label>
        <select value={location} onChange={(e) => setLocation(e.target.value)} required>
          <option value="">-- Select --</option>
          <option value="RU1">RU1</option>
          <option value="RU2">RU2</option>
          <option value="Library">Library</option>
          <option value="Amphi">Amphi</option>
        </select>

        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

        <label>Time:</label>
        <div className="time-inputs">
          <input
            type="time"
            value={timeFrom}
            onChange={(e) => setTimeFrom(e.target.value)}
            required
          />
          <span>to</span>
          <input
            type="time"
            value={timeTo}
            onChange={(e) => setTimeTo(e.target.value)}
            required
          />
        </div>

        <label>Upload Image:</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {image && <img src={image} alt="Preview" className="preview-image" />}

        <div className="checkbox-row">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            required
          />
          <label>I agree to the <a href="#">Terms of Use</a></label>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );

};

export default FoundItemForm;


