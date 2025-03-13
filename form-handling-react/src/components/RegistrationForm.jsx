import React from "react";
import { useState } from "react";

/**
 * Defines the main registration form component for the application.
 */
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    // name: "",
    username: "", // Added username field
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    // name: "",
    username: "",
    email: "",
    password: "",
  }); // Added username error

  const handleChange = (event) => {
    const { username, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [username]: value }));
    console.log(formData);
  };

  const validationForm = () => {
    const newErrors = {};
    let isValid = true;

    // if (!formData.name) {
    //   newErrors.name = "Name is required";
    //   isValid = false;
    // }

    if (!username) {
      // Added username validation
      newErrors.username = "Username is required";
      isValid = false;
    }

    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }
    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validationForm()) {
      alert("Form submitted successfully!");
      // Perform form submission or further processing
      console.log("Form submitted:", formData);

      // Reset the form after submission
      setFormData({ username: "", email: "", password: "" }); // Reset username field
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <input
        className="name"
        type="text"
        name="name"
        placeholder="name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <div>{errors.name}</div>} */}
      <input
        className="username"
        type="text"
        name="username"
        placeholder="username"
        value={username} // Added username input
        onChange={handleChange}
      />
      {errors.username && <div>{errors.username}</div>} // Added username error
      display
      <input
        className="email"
        type="email"
        name="email"
        placeholder="email"
        value={email}
        // style={{ color: "red" }}
        onChange={handleChange}
      />
      {errors.email && <div>{errors.email}</div>}
      <input
        className="password"
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={handleChange}
      />
      {errors.password && <div>{errors.password}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
