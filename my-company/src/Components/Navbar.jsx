import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    backgroundColor: "#333",
    padding: "1rem",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const ulStyle = {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    justifyContent: "center",
    gap: "2rem",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    transition: "background-color 0.3s",
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li>
          <Link
            to="/"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#555")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#555")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#555")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#555")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
