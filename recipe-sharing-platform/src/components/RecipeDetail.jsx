import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const RecipeDetail = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));
  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  useEffect(() => {
    // Fetching the data from data.json (mock data)
    fetch("/public/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipes:", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Link
        to="/add-recipe"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Add New Recipe
      </Link>

      <div className="container mx-auto p-4">
        <h2 className="text-xl">{recipe.title}</h2>
        <p className="text-xs">{recipe.summary}</p>
        <p>{recipe.instructions} </p>
        <p>{recipe.image}</p>
      </div>
    </div>
  );
};
export default RecipeDetail;
