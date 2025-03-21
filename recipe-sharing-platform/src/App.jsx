import "./App.css";
import HomePage from "./components/HomePage";
import AddRecipeForm from "./components/AddRecipeForm";
function App() {
  return (
    <>
      <div>
        <AddRecipeForm />
        <HomePage />
      </div>
    </>
  );
}

export default App;
