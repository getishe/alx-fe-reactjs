import useRecipeStore from "./recipeStore";

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) =>
      state.recipes.find((recipe) => recipe.id === id)
    )
  );
  const removeFromFavorites = useRecipeStore(
    (state) => state.removeFromFavorites
  );

  return (
    <div className="favorites-container">
      <h2>My Favorite Recipes</h2>
      <div className="favorites-grid">
        {favorites.map((recipe) => (
          <div key={recipe.id} className="favorite-card">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button
              onClick={() => removeFromFavorites(recipe.id)}
              className="remove-favorite-btn"
            >
              Remove from Favorites
            </button>
          </div>
        ))}
        {favorites.length === 0 && (
          <p>No favorite recipes yet. Start adding some!</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesList;
