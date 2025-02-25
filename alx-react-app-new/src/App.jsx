// import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <WelcomeMessage />
        <Header />
      </div>
      <div>
        <MainContent />
        <UserProfile name="Alice" age="25" bio="I love cats" />
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
