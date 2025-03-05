import React, { useContext } from "react";
import { LoginContext } from "../Contexts/Logincontext";

function Profile() {
  // Access the values from LoginContext
  const {
    username,
    setUsername,
    password,
    setPassword,
    showProfile,
    setShowProfile,
  } = useContext(LoginContext);
  return (
    <div>
      <h1>Profile Page</h1>
      {/* Display the username from the context */}
      <h2>Username: {username}</h2>
      {/* Display the password from the context */}
      <h2>Password: {password}</h2>
    </div>
  );
}

export default Profile;
