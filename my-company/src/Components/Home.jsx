import React from "react";

function Home() {
  const homeStyle = {
    textAlign: "center",
    padding: "4rem 2rem",
    backgroundColor: "#f5f5f5",
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const headingStyle = {
    fontSize: "3rem",
    color: "#333",
    marginBottom: "1rem",
  };

  const paragraphStyle = {
    fontSize: "1.2rem",
    color: "#666",
    maxWidth: "600px",
    lineHeight: "1.6",
  };

  return (
    <div style={homeStyle}>
      <h1 style={headingStyle}>Welcome to Our Company</h1>
      <p style={paragraphStyle}>
        We provide innovative solutions for your business needs. Discover how we
        can help you grow and succeed.
      </p>
    </div>
  );
}

export default Home;
