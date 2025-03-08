import React from "react";
import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import FavoriteButton from "./FavoriteButton";
import { useRecipeStore } from "./recipeStore";
const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites
      .map((id) => state.recipes.find((recipe) => recipe.id === id))
      .filter(Boolean)
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>My Favorite Recipes</h2>
      {favorites.length === 0 ? (
        <p>No favorite recipes yet. Start adding some!</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {favorites.map((recipe) => (
            <div
              key={recipe.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "20px",
                backgroundColor: "white",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ marginBottom: "15px" }}>{recipe.title}</h3>
              <p style={{ marginBottom: "20px", color: "#666" }}>
                {recipe.description}
              </p>
              <div style={{ display: "flex", gap: "10px" }}>
                <Link
                  to={`/recipe/${recipe.id}`}
                  style={{
                    backgroundColor: "#007bff",
                    color: "white",
                    padding: "10px 20px",
                    textDecoration: "none",
                    borderRadius: "6px",
                    display: "inline-block",
                  }}
                >
                  View Details
                </Link>
                <FavoriteButton recipeId={recipe.id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;
