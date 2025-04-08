import React from 'react'
import './Explore.css'
import { useNavigate } from 'react-router-dom'
export const Explore = () => {
    const navigate = useNavigate();
  return (
    <div>

<h1 className='heading'>Don't squeeze in a sedan when you could relax in a van.</h1>
<p className='mission'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. <br />(Hitch costs extra)</p>
   
    <p className='car-wheels'>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
    
    <div className='container'>

        <h1>Your destination is waiting.</h1>
        <h1>Your van is ready.</h1>


        <button onClick={()=>navigate('/vans')}>Explore our vans</button>
    </div>
    
    </div>
  )
}
