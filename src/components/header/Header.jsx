import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">#VANLIFE</h1>
      <nav className="nav-links">
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/vans" className="nav-link">Vans</NavLink>
      </nav>
    </header>
  );
};
