// import { Link } from "react-router-dom";
// import useRecipeStore from "./recipeStore";

// const RecipeList = () => {
//   const recipes = useRecipeStore((state) => state.recipes);

//   return (
//     <div>
//       <h1 style={{ marginBottom: "20px" }}>Recipe List</h1>
//       <Link to="/add">Add New Recipe</Link>
//       {recipes.map((recipe) => (
//         <div
//           key={recipe.id}
//           style={{
//             border: "1px solid #ddd",
//             borderRadius: "8px",
//             padding: "15px",
//             marginBottom: "15px",
//             backgroundColor: "white",
//           }}
//         >
//           <h3 style={{ marginBottom: "10px" }}>{recipe.title}</h3>
//           <p style={{ marginBottom: "15px" }}>{recipe.description}</p>
//           <Link
//             to={`/recipe/${recipe.id}`}
//             style={{
//               backgroundColor: "#007bff",
//               color: "white",
//               padding: "8px 16px",
//               textDecoration: "none",
//               borderRadius: "4px",
//               display: "inline-block",
//             }}
//           >
//             View Details
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RecipeList;

// import { Link } from "react-router-dom";
// import useRecipeStore from "./recipeStore";
// import { useEffect } from "react";

// const RecipeList = () => {
//   const recipes = useRecipeStore((state) => state.recipes);
//   const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
//   const searchTerm = useRecipeStore((state) => state.searchTerm);
//   const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

//   useEffect(() => {
//     const results = recipes.filter(
//       (recipe) =>
//         recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     useRecipeStore.setState({ filteredRecipes: results });
//   }, [searchTerm, recipes]);

//   return (
//     <div>
//       <h1 style={{ marginBottom: "20px" }}>Recipe List</h1>
//       <div style={{ marginBottom: "20px" }}>
//         <input
//           type="text"
//           placeholder="Search recipes..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             padding: "8px",
//             width: "200px",
//             borderRadius: "4px",
//             border: "1px solid #ddd",
//           }}
//         />
//       </div>
//       <Link to="/add">Add New Recipe</Link>
//       {(filteredRecipes.length > 0 ? filteredRecipes : recipes).map(
//         (recipe) => (
//           <div
//             key={recipe.id}
//             style={{
//               border: "1px solid #ddd",
//               borderRadius: "8px",
//               padding: "15px",
//               marginBottom: "15px",
//               backgroundColor: "white",
//             }}
//           >
//             <h3 style={{ marginBottom: "10px" }}>{recipe.title}</h3>
//             <p style={{ marginBottom: "15px" }}>{recipe.description}</p>
//             <Link
//               to={`/recipe/${recipe.id}`}
//               style={{
//                 backgroundColor: "#007bff",
//                 color: "white",
//                 padding: "8px 16px",
//                 textDecoration: "none",
//                 borderRadius: "4px",
//                 display: "inline-block",
//               }}
//             >
//               View Details
//             </Link>
//           </div>
//         )
//       )}
//     </div>
//   );
// };

// export default RecipeList;

import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import { useEffect } from "react";
import FavoriteButton from "./FavoriteButton";
const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  useEffect(() => {
    const results = recipes.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    useRecipeStore.setState({ filteredRecipes: results });
  }, [searchTerm, recipes]);

  return (
    <div>
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
          marginBottom: "30px",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Recipe List</h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "20px",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: "12px",
              width: "300px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              fontSize: "16px",
            }}
          />

          <select
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              fontSize: "16px",
            }}
          >
            <option value="">Filter by time</option>
            <option value="quick">Quick (under 30min)</option>
            <option value="medium">Medium (30-60min)</option>
            <option value="long">Long (60min+)</option>
          </select>

          <Link
            to="/add"
            style={{
              backgroundColor: "#28a745",
              color: "white",
              padding: "12px 24px",
              textDecoration: "none",
              borderRadius: "6px",
              fontSize: "16px",
            }}
          >
            Add New Recipe
          </Link>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {(filteredRecipes.length > 0 ? filteredRecipes : recipes).map(
          (recipe) => (
            <div
              key={recipe.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "20px",
                backgroundColor: "white",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ marginBottom: "15px" }}>{recipe.title}</h3>
              <p style={{ marginBottom: "20px", color: "#666" }}>
                {recipe.description}
              </p>
              <Link
                to={`/recipe/${recipe.id}`}
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  padding: "10px 20px",
                  textDecoration: "none",
                  borderRadius: "6px",
                  display: "inline-block",
                  transition: "background-color 0.2s",
                }}
              >
                View Details
              </Link>

              <FavoriteButton recipeId={recipe.id} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RecipeList;
