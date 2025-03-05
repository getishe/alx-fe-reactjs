import React, { useState, useContext } from "react";
import { LoginContext } from "../Contexts/Logincontext";

function Login() {
  // Access the setUsername, setPassword, and setShowProfile functions from LoginContext
  const { setUsername, setPassword, setShowProfile } = useContext(LoginContext);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit called"); // Debugging line
    // Set showProfile to true when the form is submitted
    setShowProfile(true);
  };

  return (
    <div className="App">
      {/* Login form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          {/* Input for username */}
          <input
            type="text"
            placeholder="Enter Your name"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          {/* Input for password */}
          <input
            type="password"
            placeholder="Enter Your password"
            required
            minLength="6"
            maxLength="12"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        {/* Submit button */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
