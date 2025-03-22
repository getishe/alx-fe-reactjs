import { useState } from "react";
import { useNavigate } from "react-router-dom";
function AddRecipeForm({ onAddRecipe }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    image: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({
    title: " ",
    summary: " ",
    image: " ",
    ingredients: " ",
    steps: " ",
  });

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
    console.log(event.target.value);
    console.log(event.target.name);
    console.log(event.target.title);
    console.log(event.target.summary);
    console.log(event.target.image);
    console.log(event.target.ingredients);
    console.log(event.target.steps);
  };

  const validate = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.title.trim()) {
      newErrors.title = alert("new title required");
      isValid = false;
    } else if (!formData.summary.trim()) {
      newErrors.summary = alert("new summary required");
      isValid = false;
    } else if (!formData.image.trim()) {
      newErrors.image = alert("new image required");
      isValid = false;
    } else if (!formData.ingredients.trim()) {
      newErrors.ingredients = alert("new ingredients required");
      isValid = false;
    } else if (!formData.steps.trim()) {
      newErrors.steps = alert("new steps required");
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      const newRecipe = {
        id: Date.now(),
        title: formData.title,
        summary: formData.summary,
        image: formData.image,
        ingredients: formData.ingredients,
        steps: formData.steps.split("\n").map((step) => step.trim()),
      };

      onAddRecipe(newRecipe);

      setFormData({
        title: "",
        summary: "",
        image: "",
        ingredients: "",
        steps: "",
      });
      alert("success");

      console.log(" for is submitted", formData);
      navigate("/");
    }
  };

  return (
    <div className=" grid gap-12 m-2 max-w-md mx-auto p-12  bg-slate-50 rounded-md hover:shadow-lg duration-75 ">
      {/* // <div className="grid gap-6 m-2 max-w-md mx-auto p-12 hover:shadow-lg duration-75 flex items-center justify-center"> */}
      <h1>Add new recipe</h1>

      <form onSubmit={handleSubmit} className="grid gap-3">
        <label htmlFor="title">Title:</label>

        <input
          className="border-2 border-solid border-grey-500 rounded-lg"
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleOnchange}
        />
        {errors.title && (
          <p className="text-slate-500 font-extrabold">{errors.title}</p>
        )}
        <label htmlFor="summary">Summary:</label>
        <textarea
          className="border-2 border-solid border-grey-500 rounded-lg"
          id="summary"
          name="summary"
          value={formData.summary}
          onChange={handleOnchange}
        />
        {errors.summary && (
          <p className="text-slate-500 font-extrabold">{errors.summary}</p>
        )}

        <label htmlFor="image">Image URL:</label>
        <input
          className="border-2 border-solid border-grey-500 rounded-lg"
          src={`https://cors-anywhere.herokuapp.com/https://spoonacular.com/recipeImages/${formData.image}`}
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleOnchange}
        />
        {errors.image && (
          <p className="text-slate-500 font-extrabold">{errors.image}</p>
        )}
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          className="border-2 border-solid border-grey-500 rounded-lg"
          id="ingredients"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleOnchange}
        />
        {errors.ingredients && (
          <p className="text-slate-500 font-extrabold">{errors.ingredients}</p>
        )}
        <label htmlFor="steps">Steps:</label>
        <textarea
          className="border-2 border-solid border-grey-500 rounded-lg"
          id="steps"
          name="steps"
          value={formData.steps}
          onChange={handleOnchange}
        />
        {errors.steps && (
          <p className="text-slate-500 font-extrabold">{errors.steps}</p>
        )}

        {/* Some thing to do */}
        <button
          type="submit"
          className="hover:shadow-lg duration-75 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Recipe
        </button>

        {/* Some thing to do */}
      </form>
    </div>
  );
}
export default AddRecipeForm;
