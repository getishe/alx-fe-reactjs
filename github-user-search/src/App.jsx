import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import "./App.css";

function App() {
  return;
  <Router>
    <div>
      <header>
        <h1>GitHub user search</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/search" element={Search} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </main>
      <Footer>
        <p>© 2025 GitHub User Search</p>
      </Footer>
    </div>
  </Router>;
}

export default App;
