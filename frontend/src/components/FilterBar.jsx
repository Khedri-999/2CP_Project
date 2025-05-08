import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/FilterBar.css";

function FilterBar({ setSelectedFilter }) {
  const [categories, setCategories] = useState([
  ]);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/categories/")
      .then((res) => {
        // API gives [{id:1,name:"Keys"},…]
        setCategories([
          { id: "all", name: "All" },
          ...res.data,
        ]);
      })
      .catch((err) => console.error("Failed to load categories:", err));
  }, []);

  const handleFilter = (filterId) => {
    setActiveFilter(filterId);
    setSelectedFilter(filterId);
  };

  return (
    <div className="filter-container">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={String(cat.id) === String(activeFilter) ? "active" : ""}
          onClick={() => handleFilter(cat.id)}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
