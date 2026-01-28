import React, { useState, useEffect } from 'react'
import logo from "../../assets/Iwakusa_logo.png"
import "./navbar.css"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className='navbar'>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Iwakusa Logo" />
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links */}
        <div className={`navbar-link-container ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" className="navbar-links" onClick={() => setMenuOpen(false)}>
            <p>Home</p>
          </NavLink>

          <NavLink to="/about" className="navbar-links" onClick={() => setMenuOpen(false)}>
            <p>About</p>
          </NavLink>

          <NavLink to="/services" className="navbar-links" onClick={() => setMenuOpen(false)}>
            <p>Services</p>
          </NavLink>

          <NavLink to="/contact" className="navbar-links" onClick={() => setMenuOpen(false)}>
            <p>Contact</p>
          </NavLink>

          <div className="navbar-links-download">
            <p>Brochure</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
