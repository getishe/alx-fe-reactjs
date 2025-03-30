import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [formData, setFormData] = useState({
    username: "",
    location: "", // Pre-filled location for testing
    minRepos: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchResults, setSearchResults] = useState([]); // Change userData to searchResults

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSearchResults([]);

    try {
      const data = await fetchUserData(
        formData.username.trim(),
        formData.location.trim(),
        formData.minRepos ? parseInt(formData.minRepos) : null
      );

      if (data.total_count === 0) {
        setError(`No users found. Try broadening your search criteria.
          Example: username: "john", location: "london", repos: "5".
          Query: "${formData.username} ${formData.location} ${formData.minRepos}"`);
      } else {
        setSearchResults(data.items);
      }
    } catch (err) {
      setError(
        `Search failed: ${err.message || "Please try different search terms"}.
        Check your rate limit or query construction.`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <form
        onSubmit={handleSubmit}
        className="grid space-y-4 items-center justify-center w-full max-w-2xl sm:flex-row"
      >
        <input
          type="text"
          name="username"
          placeholder="e.g., johndoe"
          value={formData.username}
          onChange={handleChange}
          className="border rounded p-2 text-xl m-3"
        />
        <input
          type="text"
          name="location"
          placeholder="e.g., San Francisco"
          value={formData.location}
          onChange={handleChange}
          className="border rounded p-2 text-xl m-3"
        />
        <input
          type="number"
          name="minRepos"
          placeholder="e.g., 10"
          min="0"
          value={formData.minRepos}
          onChange={handleChange}
          className="border rounded px-4 py-2 text-xl m-3"
        />
        <button
          type="submit"
          disabled={loading}
          className="border rounded p-2 m-3 text-xl bg-slate-400 border-slate-600 hover:bg-slate-500 transition duration-300 ease-in-out disabled:opacity-50"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      {searchResults.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {searchResults.map((user) => (
            <div key={user.id} className="border rounded-lg p-4 text-center">
              <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                className="mx-auto w-24 h-24 rounded-full"
              />
              <p className="text-lg font-semibold mt-2">{user.login}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 inline-block mt-2"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}

      {searchResults.length === 0 && !loading && !error && (
        <p className="text-center mt-4 text-gray-600">
          Enter search criteria and click Search to find GitHub users
        </p>
      )}
    </div>
  );
};

export default Search;
