import React from "react";
import "./Header.css";

function Header() {
  return (
    <header
      className="header"
      style={{ backgroundColor: "navy", color: "white", textAlign: "center" }}
    >
      <h1>My Favorite Cities</h1>
      <nav className="nav-menu">
        <a href="#home">Home</a>
        <a href="#cities">Cities</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
}

export default Header;
