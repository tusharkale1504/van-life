import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Van.css";

export const Van = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/vans")
      .then((res) => {
        setVans(res.data);
        console.log("Fetched Vans:", res.data);
      })
      .catch((err) => {
        console.error("Error fetching vans:", err);
      });
  }, []);

  return (
    <div className="van-container">
      <h1 className="van-heading">Explore Our Vans</h1>
      <p className="van-description">
        Whether you're hitting the mountains or cruising the coast, our travel
        vans give you freedom, comfort, and style.
      </p>

      <div className="van-gallery">
        {vans.map((van) => (
          <Link to={`/van/${van.id}`} key={van.id} className="van-card-link">
            <div className="van-card">
              <img src={van.image} alt={van.name} />
              <h3>{van.name}</h3>
              <p>${van.price}/day</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
