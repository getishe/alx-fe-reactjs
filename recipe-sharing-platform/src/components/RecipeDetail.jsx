import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const RecipeDetail = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]); // initialize empty array
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    // Fetching the data from data.json (mock data)
    fetch("/public/data.json")
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading recipes:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    navigate("/");
    return <div>Recipe not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Link
        to="/"
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block"
      >
        Back to Recipes
      </Link>

      <Link
        to="/add-recipe"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 ml-2 inline-block"
      >
        Add New Recipe
      </Link>

      <div className="container mx-auto p-4 shadow-sm mt-4 border rounded">
        <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
        <p className="text-sm mb-4">{recipe.summary}</p>

        <h3 className="text-lg font-semibold mt-4">Ingredients:</h3>
        <p className="text-gray-600">{recipe.ingredients}</p>

        <h3 className="text-lg font-semibold mt-4">Instructions:</h3>
        <p>{recipe.instructions}</p>

        {recipe.image && (
          <div className="mt-4">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="max-w-full h-auto rounded"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDetail;
