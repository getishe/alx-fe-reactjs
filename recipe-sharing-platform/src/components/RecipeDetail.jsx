import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const RecipeDetail = ({ recipes }) => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]); // initialize  empty array
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
    navigate("/");
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Link
        to="/add-recipe"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Add New Recipe
      </Link>

      <div className="container mx-auto p-4 shadow-sm">
        <h2 className="text-xl">{recipe.title}</h2>
        <p className="text-xs">{recipe.summary}</p>
        <p className="text-gray-600">{recipe.ingredients}</p>
        <p>{recipe.instructions} </p>
        <p>{recipe.image}</p>
      </div>
    </div>
  );
};
export default RecipeDetail;
