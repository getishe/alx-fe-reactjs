import React from "react";
import { Navigate, Link } from "react-router-dom";
function Home() {
  const Navigate = () => {
    return <Navigate to="/search" />;
  };
  return (
    <div>
      {" "}
      Home <Link to="/search">Search</Link>
    </div>
  );
}

export default Home;
