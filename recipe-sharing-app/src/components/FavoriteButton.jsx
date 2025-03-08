import React, { useState } from "react";
import useRecipeStore from "./recipeStore";
import FeedbackModal from "./FeedbackModal";

const FavoriteButton = ({ recipeId }) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const addFeedback = useRecipeStore((state) => state.addFeedback);

  const isFavorited = favorites.includes(recipeId);

  const handleUnfavorite = () => {
    setShowFeedback(true);
  };

  const handleFeedbackSubmit = (feedback) => {
    addFeedback({ ...feedback, recipeId });
    removeFavorite(recipeId);
  };

  return (
    <>
      <button
        onClick={() =>
          isFavorited ? handleUnfavorite() : addFavorite(recipeId)
        }
        style={{
          backgroundColor: isFavorited ? "#dc3545" : "#ffc107",
          color: isFavorited ? "white" : "black",
          padding: "10px 20px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
      >
        {isFavorited ? "♥ Unfavorite" : "♡ Favorite"}
      </button>

      {showFeedback && (
        <FeedbackModal
          onClose={() => setShowFeedback(false)}
          onSubmit={handleFeedbackSubmit}
        />
      )}
    </>
  );
};

export default FavoriteButton;
