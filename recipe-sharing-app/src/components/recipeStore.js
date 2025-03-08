import { create } from "zustand"; // Update this line

const useRecipeStore = create((set) => ({
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
}));

export default useRecipeStore;
