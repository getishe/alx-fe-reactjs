import "./App.css";
import React, { useState } from "react";
import Login from "./components/login";
import Profile from "./components/Profile";
import { LoginContext } from "./Contexts/Logincontext";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div>
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
        {showProfile ? <Profile username={username} /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
