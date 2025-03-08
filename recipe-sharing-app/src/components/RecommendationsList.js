import React, { useEffect } from "react";
import useRecipeStore from "./recipeStore";

const RecommendationsList = () => {
  const { recommendations, generateRecommendations, addFavorite } =
    useRecipeStore();

  // Generate fresh recommendations when component mounts
  // or when user interactions might affect recommendations
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div className="recommendations-list">
      <h2>Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>Add some favorites to get personalized recommendations!</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id} className="recommendation-item">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <div className="recipe-meta">
              <span>Rating: {recipe.rating}★</span>
              <span>Category: {recipe.category}</span>
            </div>
            <button
              onClick={() => addFavorite(recipe.id)}
              className="favorite-button"
            >
              Add to Favorites
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
