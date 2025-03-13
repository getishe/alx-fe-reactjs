import "./App.css";
import React from "react";
// import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";
function App() {
  return (
    <div className="App">
      <h1>Form Handling with React</h1>
      <FormikForm />
      {/* <RegistrationForm /> */}
    </div>
  );
}

export default App;
