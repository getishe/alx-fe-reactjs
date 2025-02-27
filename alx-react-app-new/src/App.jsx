import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <WelcomeMessage />
        <MainContent />
        <UserProfile name="Alice" age="25" bio="I love cats" />
        <Counter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
