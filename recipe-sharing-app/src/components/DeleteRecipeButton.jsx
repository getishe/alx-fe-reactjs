// src/components/DeleteRecipeButton.jsx
// import useRecipeStore from "./recipeStore";

// const DeleteRecipeButton = ({ recipeId, onDelete }) => {
//   const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

//   const handleDelete = () => {
//     deleteRecipe(recipeId);
//     onDelete && onDelete();
//   };

//   return (
//     <button
//       onClick={handleDelete}
//       style={{
//         backgroundColor: "#ff4444",
//         color: "white",
//         padding: "8px 16px",
//         border: "none",
//         borderRadius: "4px",
//         cursor: "pointer",
//         marginTop: "10px",
//       }}
//     >
//       Delete Recipe
//     </button>
//   );
// };

// export default DeleteRecipeButton;

// src / components / DeleteRecipeButton.jsx;
import useRecipeStore from "./recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    if (onDelete) {
      onDelete();
    }
    navigate("/"); // Navigate to home page after deletion
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
