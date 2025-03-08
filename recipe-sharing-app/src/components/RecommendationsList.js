import React, { useEffect } from "react";
import useRecipeStore from "./recipeStore";

const RecommendationsList = () => {
  const { recommendations, generateRecommendations, addFavorite } =
    useRecipeStore();

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div className="recommendations-list">
      <h2>Recommended for You</h2>
      {recommendations.map((recipe) => (
        <div key={recipe.id} className="recommendation-item">
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => addFavorite(recipe.id)}>
            Add to Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
