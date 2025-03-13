import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our Application</h1>
      <nav>
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/posts">View Posts</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Protected Profile Management</li>
          <li>Dynamic Blog Posts</li>
          <li>User Authentication</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
