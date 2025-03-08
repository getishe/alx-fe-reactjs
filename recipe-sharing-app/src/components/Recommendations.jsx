import useRecipeStore from "./recipeStore";
import { useEffect } from "react";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );
  const addFavorite = useRecipeStore((state) => state.addFavorite);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div className="recommendations-list">
      <h2>Recommended Recipes</h2>
      {recommendations.length === 0 ? (
        <p>Add some favorites to get personalized recommendations!</p>
      ) : (
        <div className="recommendations-grid">
          {recommendations.map((recipe) => (
            <div key={recipe.id} className="recommendation-card">
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <button onClick={() => addFavorite(recipe)}>
                Add to Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendationsList;
