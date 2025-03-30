import axios from "axios";

export const fetchUserData = async (username, location, minRepos) => {
  const query = [
    username ? `${username}` : "type:user",
    location ? `location:${location}` : "",
    minRepos ? `repos:>=${minRepos}` : "repos:>=0",
    "sort:repositories-desc",
  ]
    .filter(Boolean)
    .join(" ");

  try {
    const response = await fetch(
      `https://api.github.com/search/users?q=${encodeURIComponent(
        query
      )}&per_page=30`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          Authorization: `token ${import.meta.env.VITE_APP_GITHUB_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to fetch");
    }

    const data = await response.json();
    if (!data.items) {
      throw new Error("Invalid response format");
    }

    return data;
  } catch (error) {
    console.error("Search error:", error);
    throw error;
  }
};
