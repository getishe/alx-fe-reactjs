import React from "react";
import Login from "./components/login";
import { LoginContext } from "./Contexts/Logincontext";
import { useState } from "react";
import Profile from "./components/Profile";

function App() {
  // State variables for username, password, and showing the profile
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  return (
    // Provide the LoginContext to the components
    <LoginContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        showProfile,
        setShowProfile,
      }}
    >
      {/* Login component */}
      <Login />
      {/* Conditionally render the Profile component */}
      {showProfile ? <Profile /> : null}
    </LoginContext.Provider>
  );
}

export default App;
