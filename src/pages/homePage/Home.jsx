import React from "react";
import "./Home.css"; 
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-background">
     
     <h1>You got the travel plans, we got the travel vans.</h1>

     <p>Add advwnture t your life by joining the #vanlife movement.</p>
     <p>Rent the perfect van to make your perfect road trip.</p>

     <button onClick={()=>navigate('/vans')}>Find your van</button>
    </div>
  );
};
