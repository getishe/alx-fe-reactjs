import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    backgroundColor: "#333",
    padding: "1rem",
  };

  const ulStyle = {
    display: "flex",
    justifyContent: "space-around",
    listStyle: "none",
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <div>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li>
            <Link style={linkStyle} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to="/services">
              Our Services
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
