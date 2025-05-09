import React from "react";
import img1 from "../assets/picture.jpg";
import "../CSS/FoundItemCard.css";

function FoundItemCard({ item, onDetailClick, onContactClick }) {
  const title     = item.category?.name || item.name;
  const location  = item.location;
  const dateFound = item.date_found;
  const imageSrc  = item.image || img1;

  return (
    <div className="item-card">
      <div className="image-container">
        <img
          src={imageSrc}
          alt={title}
          className={`item-image ${
            item.blur_image === true || item.blur_image === "true" ? "blurred" : ""
          }`}
                  />
      </div>
      <div className="item-details">
        <h3>{title}</h3>
        <p>Found at: {location}</p>
        <p>Date found: {dateFound}</p>
        <div className="buttons">
          <button className="contact-btn" onClick={onContactClick}>
            Claim
          </button>
          <button className="details-btn" onClick={onDetailClick}>
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoundItemCard;
