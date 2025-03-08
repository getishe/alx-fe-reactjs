import useRecipeStore from "./recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const addToFavorites = useRecipeStore((state) => state.addToFavorites);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  return (
    <div className="recommendations-container">
      <div className="recommendations-header">
        <h2>Recommended for You</h2>
        <button
          onClick={generateRecommendations}
          className="refresh-recommendations-btn"
        >
          Refresh Recommendations
        </button>
      </div>
      <div className="recommendations-grid">
        {recommendations.map((recipe) => (
          <div key={recipe.id} className="recommendation-card">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button
              onClick={() => addToFavorites(recipe.id)}
              className="add-favorite-btn"
            >
              Add to Favorites
            </button>
          </div>
        ))}
        {recommendations.length === 0 && (
          <p>No recommendations available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default RecommendationsList;
