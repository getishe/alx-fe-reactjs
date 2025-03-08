// src/components/DeleteRecipeButton.jsx
import useRecipeStore from "./recipeStore";

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
    onDelete && onDelete();
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        backgroundColor: "#ff4444",
        color: "white",
        padding: "8px 16px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        marginTop: "10px",
      }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
