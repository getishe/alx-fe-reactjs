import "./App.css";
import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <div className="App">
        <h1>My Company</h1>

        <div className="card">
          <p>Welcome to my application </p>
        </div>
      </div>
      <div>
        <Home />
        <About />
        <Services />
        <Contact />
      </div>
    </>
  );
}

export default App;
