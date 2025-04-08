import React from "react";
import { useParams } from "react-router-dom";
import { vans } from "../../vans";
import "./VanInfo.css";

export const VanInfo = () => {
  const { id } = useParams();
  const van = vans.find((van) => van.id === parseInt(id));

  if (!van) {
    return <div className="vaninfo-container">Van not found.</div>;
  }

  return (
    <div className="vaninfo-container">
      <div className="vaninfo-card">
        <img src={van.image} alt={van.name} className="vaninfo-image" />
        <div className="vaninfo-details">
          <h1>{van.name}</h1>
          <p className="vaninfo-type">Type: {van.type}</p>
          <p className="vaninfo-price">${van.price}/day</p>
          <p className="vaninfo-rating">⭐ {van.rating} / 5</p>
          <p className="vaninfo-availability">{van.availability}</p>

          <ul className="vaninfo-list">
            {van.infoPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          <h3>Features</h3>
          <div className="vaninfo-tags">
            {van.features.map((feature, index) => (
              <span key={index} className="tag">{feature}</span>
            ))}
          </div>

          <h3>Customer Reviews</h3>
          <div className="vaninfo-reviews">
            {van.reviews.map((review, index) => (
              <div key={index} className="review">
                <strong>{review.user}</strong>: {review.comment}
              </div>
            ))}
          </div>

          <button className="book-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
};
