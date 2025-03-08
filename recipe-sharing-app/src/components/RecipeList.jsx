import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>Recipe List</h1>
      <Link to="/add">Add New Recipe</Link>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "15px",
            marginBottom: "15px",
            backgroundColor: "white",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>{recipe.title}</h3>
          <p style={{ marginBottom: "15px" }}>{recipe.description}</p>
          <Link
            to={`/recipe/${recipe.id}`}
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "8px 16px",
              textDecoration: "none",
              borderRadius: "4px",
              display: "inline-block",
            }}
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
