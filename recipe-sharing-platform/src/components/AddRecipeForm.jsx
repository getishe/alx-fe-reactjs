import { useState } from "react";

function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: " ",
    summary: " ",
    image: "",
  });

  const [error, setError] = useState({
    title: " ",
    summary: " ",
    image: " ",
  });

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
    console.log(event.target.value);
    console.log(event.target.name);
    console.log(event.target.title);
    console.log(event.target.summary);
  };

  const validation = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.title) {
      newErrors.title = alert("new title required");
      isValid = false;
    } else if (!formData.summary) {
      newErrors.summary = alert("new summary required");
      isValid = false;
    } else if (!formData.image) {
      newErrors.image = alert("new image required");
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (validation()) {
      alert("success");

      console.log(" for is submitted", formData);
    }

    setFormData({ title: "", summary: "", image: "" });
  };

  return (
    <div className=" grid gap-12 m-2 max-w-md mx-auto p-12  bg-slate-50 rounded-md hover:shadow-lg duration-75 ">
      {/* // <div className="grid gap-6 m-2 max-w-md mx-auto p-12 hover:shadow-lg duration-75 flex items-center justify-center"> */}
      <h1>Add new recipe</h1>

      <form onSubmit={handleOnSubmit} className="grid gap-3">
        <label htmlFor="title">Title:</label>

        <input
          className="border-2 border-solid border-grey-500 rounded-lg"
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleOnchange}
        />
        {error.title && (
          <p className="text-slate-500 font-extrabold">{error.title}</p>
        )}
        <label htmlFor="summary">Summary:</label>
        <textarea
          className="border-2 border-solid border-grey-500 rounded-lg"
          id="summary"
          name="summary"
          value={formData.summary}
          onChange={handleOnchange}
        />
        {error.summary && (
          <p className="text-slate-500 font-extrabold">{error.summary}</p>
        )}

        <label htmlFor="image">Image URL:</label>
        <input
          className="border-2 border-solid border-grey-500 rounded-lg"
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleOnchange}
        />
        {error.image && (
          <p className="text-slate-500 font-extrabold">{error.image}</p>
        )}
        <button
          type="submit"
          className="hover:shadow-lg duration-75 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}
export default AddRecipeForm;
