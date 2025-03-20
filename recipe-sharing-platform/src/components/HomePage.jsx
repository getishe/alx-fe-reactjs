// import React from "react";
// import { useState, useEffect } from "react";

// function HomePage() {
//   const [recipes, setRecipes] = useState([]); // intialize

//   useEffect(() => {
//     fetch("/data.json")
//       .then((Response) => Response.json())
//       .then((data) => setRecipes(data))
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <div>
//       <h1>Welcome to the Recipe Sharing Platform</h1>
//       <p>Explore a wide variety of delicious recipes.</p>
//       <div className="card">
//         {recipes.map((recipe) => (
//           <div key={recipe.id}>
//             <h2>{recipe.title}</h2>
//             <p>{recipe.summary}</p>
//             <p> {recipe.image}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default HomePage;

import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetching the data from data.json (mock data)
    fetch("/public/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipes:", error));
  }, []);

  return (
    <div className="container mx-auto p-4 hover:shadow-lg duration-75 ">
      <h1 className="text-3xl font-bold mb-4">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-lg p-4">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <div className="mt-2">
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
