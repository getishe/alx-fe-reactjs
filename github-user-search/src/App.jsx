import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import "./App.css";
// Import Footer if it exists
// import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="text-center flex flex-col items-center justify-center min-h-screen bg-gray-100 p-2 md:p-10 sm:p-5">
        <header>
          <h1>GitHub user search</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<h2>404 Not Found</h2>} />
          </Routes>
        </main>
        {/* Replace Footer with a valid JSX element or import it */}
        <footer>
          <p>© 2025 GitHub User Search</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
