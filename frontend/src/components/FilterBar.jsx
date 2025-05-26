import React, { useEffect } from "react";
import axios from "axios";
import "../CSS/FilterBar.css";

function FilterBar({ selectedFilter, setSelectedFilter }) {
  const [categories, setCategories] = React.useState([
    { id: "all", name: "All" }
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/categories/")
      .then((res) => {
        
        const filteredCategories = res.data.filter(
          (cat) => cat.name.toLowerCase() !== "all"
        );
        setCategories([{ id: "all", name: "All" }, ...filteredCategories]);
      })
      .catch((err) => console.error("Failed to load categories:", err));
  }, []);
  

  return (
    <div className="filter-container">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={
            String(cat.id) === String(selectedFilter) ? "active" : ""
          }
          onClick={() => setSelectedFilter(cat.id)}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;