import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo__placeholder">LOGO</div>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/inquiry">Inquiry</Link>
        <Link to="/payments">Payments</Link>
      </nav>
    </div>
  );
};

export default Navbar;
