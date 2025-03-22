// fetching the data from data.json (mock data)

// import React, { useState, useEffect } from "react";

// const HomePage = () => {
//   const [recipes, setRecipes] = useState([]); // initialize  empty array

//   useEffect(() => {
//     // Fetching the data from data.json (mock data)
//     fetch("/public/data.json")
//       .then((response) => response.json())
//       .then((data) => setRecipes(data))
//       .catch((error) => console.error("Error loading recipes:", error));
//   }, []);

//   return (
//     <div className="container mx-auto p-4 hover:shadow-lg duration-75 ">
//       <h1 className="text-3xl font-bold mb-4">Recipe Sharing Platform</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid grid-flow-col-w lg:grid-cols-3 gap-4">
//         {recipes.map((recipe) => (
//           <div
//             key={recipe.id}
//             className="bg-white rounded-lg shadow-lg p-4 border-2 border-solid border-red-500"
//           >
//             <img
//               src={recipe.image}
//               alt={recipe.title}
//               className="w-full h-32 object-cover rounded-t-lg"
//             />
//             <div className="mt-2">
//               <h2 className="text-xl font-semibold">{recipe.title}</h2>
//               <p className="text-gray-600">{recipe.summary}</p>
//               <p className="text-gray-600">{recipe.ingredients}</p>
//               <p className="text-gray-600">{recipe.steps}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// fetching the data from data.json (mock data)

// Accept recipes as props instead of fetching them from a JSON file:

import React from "react";
import { Link } from "react-router-dom";
const HomePage = ({ recipes }) => {
  return (
    <div className="container mx-auto p-4 hover:shadow-lg duration-75">
      <div className="flex justify-between items-center mb-4 sm:flex-row flex-col gap-7">
        <h1 className="text-3xl font-bold text-center">
          Recipe Sharing Platform
        </h1>
        <Link
          to="/add-recipe"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add New Recipe
        </Link>
        
      </div>

      {recipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-lg p-4 border-2 border-solid border-red-500"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="mt-2">
                <h2 className="text-xl font-semibold"> {recipe.title}</h2>
                <p className="text-gray-600 text-xl">
                  Summary: {recipe.summary}{" "}
                </p>
                <p className="text-gray-600">
                  ingredients: {recipe.ingredients}{" "}
                </p>
                <p className="text-gray-600">
                  Steps: {recipe.steps.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 my-10">
          No recipes yet. Add your first recipe!
        </p>
      )}
    </div>
  );
};

export default HomePage;
