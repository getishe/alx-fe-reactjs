// src/App.jsx
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={RecipeList} />
        <Route path="/add" component={AddRecipeForm} />
        <Route path="/recipe/:id" component={RecipeDetails} />
      </Switch>
    </Router>
  );
};

export default App;
