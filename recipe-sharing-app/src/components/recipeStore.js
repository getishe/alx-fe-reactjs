import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      description: "Classic Italian pasta dish with eggs, cheese, and bacon",
      category: "Italian",
      rating: 4.5,
      dateAdded: new Date().toISOString(),
    },
    {
      id: 2,
      title: "Chicken Curry",
      description: "Spicy Indian curry with tender chicken pieces",
      category: "Indian",
      rating: 4.2,
      dateAdded: new Date().toISOString(),
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

  // Enhanced favorite management
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

  // Enhanced recommendation system
  generateRecommendations: () =>
    set((state) => {
      const userPreferences = state.favorites
        .map((id) => state.recipes.find((r) => r.id === id))
        .filter(Boolean);

      const categoryCount = userPreferences.reduce((acc, recipe) => {
        acc[recipe.category] = (acc[recipe.category] || 0) + 1;
        return acc;
      }, {});

      const recommended = state.recipes
        .filter((recipe) => !state.favorites.includes(recipe.id))
        .sort((a, b) => {
          const scoreA = (categoryCount[a.category] || 0) + a.rating;
          const scoreB = (categoryCount[b.category] || 0) + b.rating;
          return scoreB - scoreA;
        })
        .slice(0, 5);

      return { recommendations: recommended };
    }),

  // Add these selectors
  getFavoriteRecipes: () => {
    const state = get();
    return state.recipes.filter((recipe) =>
      state.favorites.includes(recipe.id)
    );
  },

  getRecommendedRecipes: () => {
    const state = get();
    return state.recommendations;
  },
}));

export default useRecipeStore;
