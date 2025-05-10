import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./VanInfo.css";

export const VanInfo = () => {
  const { id } = useParams();
  const [van, setVan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/vans/${id}`)
      .then((res) => {
        setVan(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Van not found.");
        setLoading(false);
      });
  }, [id]);

  const handleBooking = () => {
  const bookingData = {
    vanId: van.id, // Send only vanId as booking data
  };

  axios
    .post("http://localhost:3000/book-van", bookingData) // Correct endpoint
    .then((response) => {
      setBookingSuccess(true);
      alert("Booking successful!");
    })
    .catch((error) => {
      alert("Booking failed. Please try again.");
      console.error(error);
    });
};


  if (loading) return <div className="vaninfo-container">Loading...</div>;
  if (error) return <div className="vaninfo-container">{error}</div>;

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
            {van.infoPoints?.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          <h3>Features</h3>
          <div className="vaninfo-tags">
            {van.features?.map((feature, index) => (
              <span key={index} className="tag">{feature}</span>
            ))}
          </div>

          <h3>Customer Reviews</h3>
          <div className="vaninfo-reviews">
            {van.reviews?.map((review, index) => (
              <div key={index} className="review">
                <strong>{review.user}</strong>: {review.comment}
              </div>
            ))}
          </div>

          <button className="book-btn" onClick={handleBooking}>
            Book Now
          </button>

          {bookingSuccess && <p>Your booking was successful!</p>}
        </div>
      </div>
    </div>
  );
};
