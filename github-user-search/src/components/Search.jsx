// import React from "react";
// import { useState } from "react";
// function Search() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(
//         `https://api.github.com/search/users?q=${searchTerm}`
//       );
//       const data = await response.json();
//       setSearchResults(data.items);
//     } catch (error) {
//       console.error("Error fetching search results:", error);
//     }
//   };
//   return (
//     <div className="search-container">
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Search for GitHub users..."
//         />
//         <button type="submit">Search</button>
//       </form>
//       <ul className="search-results">
//         {searchResults.map((user) => (
//           <li key={user.id}>
//             <a href={user.html_url} target="_blank" rel="noopener noreferrer">
//               {user.login}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Search;

import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen">
    <div>
      <form onSubmit={handleSubmit} className="text-center">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value.trim())}
          className="border rounded p-2 text-xl m-3"
        />
        <button
          type="submit"
          className="border rounded p-2 m-3 text-xl bg-slate-400 border-slate-600 hover:bg-slate-500 transition duration-300 ease-in-out"
        >
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {userData && (
        <div className="text-center">
          <img
            src={userData.avatar_url}
            alt={`${userData.login}'s avatar`}
            className="flex justify-center items-center mx-auto w-32 h-32 rounded-full m-3"
          />
          <p className="text-xl font-semibold">Name: {userData.name}</p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
