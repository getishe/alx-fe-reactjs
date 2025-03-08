import React from "react";
import useRecipeStore from "./recipeStore";

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorited = favorites.includes(recipeId);

  return (
    <button
      onClick={() =>
        isFavorited ? removeFavorite(recipeId) : addFavorite(recipeId)
      }
    >
      {isFavorited ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
};

export default FavoriteButton;
