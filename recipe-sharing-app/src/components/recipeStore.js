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
  searchTerm: "",
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  // Favorites management
  addFavorite: (recipe) =>
    set((state) => ({
      favorites: [...state.favorites, recipe],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((recipe) => recipe.id !== recipeId),
    })),

  // Recommendations system
  generateRecommendations: () =>
    set((state) => {
      const userFavoriteCategories = state.favorites.map((recipe) =>
        recipe.title.toLowerCase()
      );
      const recommended = state.recipes.filter(
        (recipe) =>
          !state.favorites.some((fav) => fav.id === recipe.id) &&
          userFavoriteCategories.some(
            (category) =>
              recipe.title.toLowerCase().includes(category) ||
              recipe.description.toLowerCase().includes(category)
          )
      );
      return { recommendations: recommended };
    }),

  // Existing functionality
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
    })),

  setRecipes: (recipes) => set({ recipes }),

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

  initializeFilteredRecipes: () =>
    set((state) => ({ filteredRecipes: state.recipes })),
}));

export default useRecipeStore;
