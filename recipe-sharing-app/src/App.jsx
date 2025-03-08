// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Suspense } from "react";
// import RecipeList from "./components/RecipeList";
// import AddRecipeForm from "./components/AddRecipeForm";
// import RecipeDetails from "./components/RecipeDetails";

// const App = () => {
//   return (
//     <Router>
//       <div
//         style={{
//           maxWidth: "800px",
//           margin: "0 auto",
//           padding: "20px",
//           minHeight: "100vh",
//           backgroundColor: "#f5f5f5",
//         }}
//       >
//         <nav
//           style={{
//             marginBottom: "20px",
//             padding: "10px",
//             backgroundColor: "#ffffff",
//             borderRadius: "5px",
//             boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//           }}
//         >
//           <Link to="/" style={{ marginRight: "20px", textDecoration: "none" }}>
//             Recipe List
//           </Link>
//           <Link to="/add" style={{ textDecoration: "none" }}>
//             Add Recipe
//           </Link>
//         </nav>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             <Route path="/" element={<RecipeList />} />
//             <Route path="/add" element={<AddRecipeForm />} />
//             <Route path="/recipe/:id" element={<RecipeDetails />} />
//           </Routes>
//         </Suspense>
//       </div>
//     </Router>
//   );
// };

// export default App;

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense } from "react";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import FavoritesList from "./components/FavoritesList ";
import RecommendationsList from "./components/RecommendationsList ";

const App = () => {
  return (
    <Router>
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "20px",
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <nav
          style={{
            marginBottom: "20px",
            padding: "10px",
            backgroundColor: "#ffffff",
            borderRadius: "5px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <Link to="/" style={{ marginRight: "20px", textDecoration: "none" }}>
            Recipe List
          </Link>
          <Link
            to="/add"
            style={{ marginRight: "20px", textDecoration: "none" }}
          >
            Add Recipe
          </Link>
          <Link
            to="/favorites"
            style={{ marginRight: "20px", textDecoration: "none" }}
          >
            Favorites
          </Link>
          <Link to="/recommendations" style={{ textDecoration: "none" }}>
            Recommendations
          </Link>
        </nav>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/add" element={<AddRecipeForm />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/favorites" element={<FavoritesList />} />
            <Route path="/recommendations" element={<RecommendationsList />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
