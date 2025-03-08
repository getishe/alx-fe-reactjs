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
  favorites: [], // Array to hold user's favorite recipe IDs
  recommendations: [], // Array for storing personalized recommendations
  lastFavoriteDate: null,

  // Existing actions
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

  // New search and filter actions
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

  // New favorite-related actions
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
      lastFavoriteDate: new Date().toISOString(),
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  sortFavorites: (criteria = "date") =>
    set((state) => {
      const sortedFavorites = [...state.favorites].sort((a, b) => {
        const recipeA = state.recipes.find((r) => r.id === a);
        const recipeB = state.recipes.find((r) => r.id === b);
        return criteria === "date"
          ? new Date(recipeB.dateAdded) - new Date(recipeA.dateAdded)
          : recipeB.rating - recipeA.rating;
      });
      return { favorites: sortedFavorites };
    }),

  // New recommendations-related action
  generateRecommendations: () =>
    set((state) => {
      // Improved recommendation logic using categories and ratings
      const userPreferences = state.favorites
        .map((id) => state.recipes.find((r) => r.id === id))
        .filter(Boolean);

      const recommended = state.recipes
        .filter(
          (recipe) =>
            !state.favorites.includes(recipe.id) &&
            (userPreferences.some(
              (pref) => pref.category === recipe.category
            ) ||
              recipe.rating >= 4)
        )
        .slice(0, 5);

      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
