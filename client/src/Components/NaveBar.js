import React from "react";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><NavLink to="/" className="active">Home</NavLink></li>
        <li><NavLink to="/about" className="active">About</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;