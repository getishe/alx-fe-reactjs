// import { useState, useEffect } from "react";
// import HomePage from "./components/HomePage";
// import AddRecipeForm from "./components/AddRecipeForm";

// function App() {
//   // Initialize recipes from localStorage
//   const [recipes, setRecipes] = useState(() => {
//     const savedRecipes = localStorage.getItem("recipes");
//     return savedRecipes ? JSON.parse(savedRecipes) : [];
//   });

//   const [showForm, setShowForm] = useState(false);

//   // Save recipes to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem("recipes", JSON.stringify(recipes));
//   }, [recipes]);

//   const handleAddRecipe = (newRecipe) => {
//     setRecipes([...recipes, newRecipe]);
//     setShowForm(false); // Return to homepage after adding recipe
//   };

//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="text-3xl font-bold text-center my-6">
//         Recipe Sharing Platform
//       </h1>

//       {showForm ? (
//         <AddRecipeForm onAddRecipe={handleAddRecipe} />
//       ) : (
//         <>
//           <button
//             onClick={() => setShowForm(true)}
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
//           >
//             Add New Recipe
//           </button>
//           <HomePage recipes={recipes} />
//         </>
//       )}
//     </div>
//   );
// }

// export default App;
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
// import HomePage from "./components/HomePage";
// import AddRecipeForm from "./components/AddRecipeForm";

// function App() {
//   const [recipes, setRecipes] = useState(() => {
//     const savedRecipes = localStorage.getItem("recipes");
//     return savedRecipes ? JSON.parse(savedRecipes) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("recipes", JSON.stringify(recipes));
//     console.log("Recipes saved to localStorage:", recipes);
//   }, [recipes]);

//   const handleAddRecipe = (newRecipe) => {
//     console.log("Adding new recipe:", newRecipe);
//     setRecipes([...recipes, newRecipe]);
//   };

//   return (
//     <Router>
//       <div className="container mx-auto px-4 py-8">
//         <Routes>
//           <Route path="/" element={<HomePage recipes={recipes} />} />
//           <Route
//             path="/add-recipe"
//             element={<AddRecipeForm onAddRecipe={handleAddRecipe} />}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-recipe" element={<RecipeDetail />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
