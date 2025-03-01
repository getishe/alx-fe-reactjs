import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import UserContext from "./components/UserContext";
import UserDetails from "./components/UserDetails";

function App() {
  const [userData] = useState({
    name: "John Doe",
    bio: "Software Developer",
    email: "john@example.com",
  });

  const [anotherData] = useState({
    name: "Alice",
    age: 28,
    bio: "Web Designer",
  });

  //combine both user data into an array or object

  const combinedUserData = [userData, anotherData];

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ marginBottom: "20px" }}>
        <WelcomeMessage name="Visitor" />
        <Header title="My React App" />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <MainContent />
        <UserContext.Provider value={combinedUserData}>
          <UserProfile />
          <UserDetails />
        </UserContext.Provider>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Counter initialCount={0} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
