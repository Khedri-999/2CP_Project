import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import "../CSS/Report.css";

export default function Report() {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    category: "",
    name: "",
    description: "",
    location: "",
    date_found: "",
    time_found: "",   
    image: null,
    blur: false,      
    agree: false,
  });

  // 1️⃣ fetch categories
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8000/api/categories/", {
        headers: token ? { Authorization: `Token ${token}` } : undefined,
      })
      .then((res) => setCategories(res.data))
      .catch((err) =>
        console.error("Failed to load categories:", err.response?.data || err)
      );
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    if (type === "file") {
      setForm((f) => ({ ...f, image: files[0] }));
    } else if (type === "checkbox") {
      setForm((f) => ({ ...f, [name]: checked }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.agree) {
      alert("You must agree to the terms of use.");
      return;
    }

    const data = new FormData();
    data.append("category", form.category);
    data.append("name", form.name);
    data.append("description", form.description);
    data.append("location", form.location);
    data.append("date_found", form.date_found);
    data.append("time_found", form.time_found);
    if (form.image)     data.append("image", form.image);
    data.append("blur_image", form.blur);

    const token = localStorage.getItem("token");
    console.log("Sending token:", token);

    axios
      .post("http://localhost:8000/api/posts/post-items/", data, {
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        alert("Item reported successfully!");
        setForm({
          category: "",
          name: "", 
          description:"",
          location: "", 
          date_found: "", 
          time_found: "",
          image: null, 
          blur: false, 
          agree: false
        });
      })
      .catch((err) => {
        console.error(
          "Report error:",
          err.response?.data || err.message
        );
        alert("Failed to report item. Please try again.");
      });
  };

  return (
    <>
      <div className="header-chat">
        <NavBar />
      </div>
      <SideBar />
      <div className="found-container">
        <h2 className="found-title">Report Found Item</h2>
        <form
          className="found-form"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <label>Category:</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          >
            <option value="">-- Select --</option>
            {categories
              .filter((cat) => cat.name !== "All")
              .map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
            ))}
          </select> 

          <div className="form-group">
            <label>Item Name:</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>


          <label>Description:</label>
          <textarea
            name="description"
            placeholder="Enter description"
            value={form.description}
            onChange={handleChange}
            required
          />

          <label>Location:</label>
          <select
            name="location"
            value={form.location}
            onChange={handleChange}
            required
          >
            <option value="">-- Select --</option>
            <option value="RU1">RU1</option>
            <option value="RU2">RU2</option>
            <option value="Library">Library</option>
            <option value="Amphi">Amphi</option>
          </select>

          <div className="datetime-row">
            <div className="form-group">
              <label>Date Found:</label>
              <input
                type="date"
                name="date_found"
                value={form.date_found}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Time Found:</label>
              <input
                type="time"
                name="time_found"
                value={form.time_found}
                onChange={handleChange}
                required
              />
            </div>
          </div>


          <label>Upload Image:</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
          {form.image && (
            <img
              src={URL.createObjectURL(form.image)}
              alt="Preview"
              className="preview-image"
            />
          )}

            <div className="checkbox-row">
              <input
                type="checkbox"
                name="blur"
                checked={form.blur}
                onChange={handleChange}
              />
              <label>Blur image for privacy</label>
            </div>

          <div className="checkbox-row">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              required
            />
            <label>
              I agree to the <a href="#">Terms of Use</a>
            </label>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
