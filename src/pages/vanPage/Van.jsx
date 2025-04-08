import React from 'react';
import './Van.css';
import { vans } from '../../vans';
import { Link } from 'react-router-dom';

export const Van = () => {
  return (
    <div className="van-container">
      <h1 className="van-heading">Explore Our Vans</h1>
      <p className="van-description">
        Whether you're hitting the mountains or cruising the coast, our travel vans give you freedom, comfort, and style.
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
