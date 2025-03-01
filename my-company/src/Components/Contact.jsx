import React from "react";

function Contact() {
  const contactStyle = {
    padding: "3rem",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
  };

  const headingStyle = {
    color: "#333",
    marginBottom: "2rem",
  };

  const contentStyle = {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  return (
    <div style={contactStyle}>
      <h2 style={headingStyle}>Contact Us</h2>
      <div style={contentStyle}>
        <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: "1.6" }}>
          Get in touch with us for any inquiries or support.
          <br />
          Email: contact@mycompany.com
          <br />
          Phone: (123) 456-7890
        </p>
      </div>
    </div>
  );
}

export default Contact;
