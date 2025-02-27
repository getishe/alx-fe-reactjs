// import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import UserContext from "./components/UserContext";
// import UserDetails from "./components/UserDetails";

function App() {
  const userData = {
    name: "John",
    age: 30,
    bio: "Software developer",
  };
  return (
    <>
      <div>
        <WelcomeMessage />
        <Header />
      </div>
      <div>
        <MainContent />
        <UserContext.Provider value={userData}>
          <UserProfile name="Alice" age="25" bio="I love cats" />
          {/* <UserDetails /> */}
        </UserContext.Provider>
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
