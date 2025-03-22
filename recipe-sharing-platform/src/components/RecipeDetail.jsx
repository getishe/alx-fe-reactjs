import React from "react";

const RecipeDetail = ({ recipe }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl">{recipe.title}</h2>
      <p className="text-xs">{recipe.summary}</p>
      <p>{recipe.ingredients}</p>
      <p>{recipe.steps}</p>
    </div>
  );
};
export default RecipeDetail;
