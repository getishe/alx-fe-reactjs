import { act } from "react-dom/test-utils";
import useRecipeStore from "../components/recipeStore";

export const resetTestStore = () => {
  act(() => {
    useRecipeStore.setState({
      recipes: [],
      favorites: [],
      recommendations: [],
      searchTerm: "",
      filteredRecipes: [],
    });
  });
};

export const populateTestData = () => {
  act(() => {
    useRecipeStore.setState({
      recipes: [
        { id: 1, title: "Test Recipe 1", description: "Test Description 1" },
        { id: 2, title: "Test Recipe 2", description: "Test Description 2" },
      ],
    });
  });
};
