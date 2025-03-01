import React from "react";

const Header = ({ title }) => {
  return (
    <header style={{ background: "#f0f0f0", padding: "1rem" }}>
      <h2>{title}</h2>
    </header>
  );
};

export default Header;
