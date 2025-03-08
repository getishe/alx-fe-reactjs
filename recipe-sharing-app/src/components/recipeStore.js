// import { create } from "zustand"; // Update this line

// const useRecipeStore = create((set) => ({
//   recipes: [
//     {
//       id: 1,
//       title: "Spaghetti Carbonara",
//       description: "Classic Italian pasta dish with eggs, cheese, and bacon",
//     },
//     {
//       id: 2,
//       title: "Chicken Curry",
//       description: "Spicy Indian curry with tender chicken pieces",
//     },
//   ],
//   addRecipe: (newRecipe) =>
//     set((state) => ({
//       recipes: [...state.recipes, newRecipe],
//     })),

//   updateRecipe: (updatedRecipe) =>
//     set((state) => ({
//       recipes: state.recipes.map((recipe) =>
//         recipe.id === updatedRecipe.id ? updatedRecipe : recipe
//       ),
//     })),
//   deleteRecipe: (recipeId) =>
//     set((state) => ({
//       recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
//     })),
//   setRecipes: (recipes) => set({ recipes }),
// }));

// export default useRecipeStore;

// import { create } from "zustand";

// const useRecipeStore = create((set, get) => ({
//   recipes: [
//     {
//       id: 1,
//       title: "Spaghetti Carbonara",
//       description: "Classic Italian pasta dish with eggs, cheese, and bacon",
//     },
//     {
//       id: 2,
//       title: "Chicken Curry",
//       description: "Spicy Indian curry with tender chicken pieces",
//     },
//   ],
//   searchTerm: "",
//   filteredRecipes: [],

//   // Existing actions
//   addRecipe: (newRecipe) =>
//     set((state) => ({
//       recipes: [...state.recipes, newRecipe],
//     })),

//   updateRecipe: (updatedRecipe) =>
//     set((state) => ({
//       recipes: state.recipes.map((recipe) =>
//         recipe.id === updatedRecipe.id ? updatedRecipe : recipe
//       ),
//     })),

//   deleteRecipe: (recipeId) =>
//     set((state) => ({
//       recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
//     })),

//   setRecipes: (recipes) => set({ recipes }),

//   // New search and filter actions
//   setSearchTerm: (term) => {
//     set({ searchTerm: term });
//     get().filterRecipes();
//   },

//   filterRecipes: () =>
//     set((state) => ({
//       filteredRecipes: state.recipes.filter(
//         (recipe) =>
//           recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
//           recipe.description
//             .toLowerCase()
//             .includes(state.searchTerm.toLowerCase())
//       ),
//     })),

//   // Initialize filtered recipes
//   initializeFilteredRecipes: () =>
//     set((state) => ({ filteredRecipes: state.recipes })),
// }));

// export default useRecipeStore;

import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      description: "Classic Italian pasta dish with eggs, cheese, and bacon",
    },
    {
      id: 2,
      title: "Chicken Curry",
      description: "Spicy Indian curry with tender chicken pieces",
    },
  ],
  favorites: [],
  recommendations: [],
  searchTerm: "",
  filteredRecipes: [],

  // Favorites management
  addToFavorites: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  removeFromFavorites: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Recommendations system
  generateRecommendations: () =>
    set((state) => {
      const userFavorites = state.favorites;
      const recommendedRecipes = state.recipes.filter((recipe) => {
        // Simple recommendation logic:
        // 1. Recipe is not already in favorites
        // 2. Random selection based on some criteria
        return !userFavorites.includes(recipe.id) && Math.random() > 0.5;
      });
      return { recommendations: recommendedRecipes };
    }),

  // Existing recipe management
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
      // Also remove from favorites if present
      favorites: state.favorites.filter((id) => id !== recipeId),
      recommendations: state.recommendations.filter(
        (recipe) => recipe.id !== recipeId
      ),
    })),

  // Search and filter functionality
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          recipe.description
            .toLowerCase()
            .includes(state.searchTerm.toLowerCase())
      ),
    })),

  // Initialize filtered recipes
  initializeFilteredRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes,
      recommendations: state.recipes.slice(0, 2), // Initial recommendations
    })),
}));

export default useRecipeStore;
