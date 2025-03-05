import "./App.css"; // Imports the CSS file for styling the App component.
import Addproduct from "./components/Addproduct"; // Imports the Addproduct component.
import Cart from "./components/Cart"; // Imports the Cart component.
import PRODUCTS from "./components/Product"; // Imports the PRODUCTS array (presumably containing product data).
import { useState } from "react"; // Imports the useState hook from React for managing state.

import React from "react"; // Imports the React library.

function App() {
  // Defines the main App component.
  const [cart, setCart] = useState([]); // Initializes a state variable 'cart' as an empty array using the useState hook. 'setCart' is the function to update the 'cart' state.
  return (
    // Returns the JSX structure for the App component.
    <div>
      {/* Wraps the content in a div. */}
      <h1>App</h1>
      {/* Renders a heading with the text "App". */}
      {PRODUCTS.length === 0 ? (
        <p>No products to display.</p>
      ) : (
        <>
          <Addproduct products={PRODUCTS} setCart={setCart} />
          {/* Renders the Addproduct component, passing the PRODUCTS array and the setCart function as props. */}
          <Cart cart={cart} setCart={setCart} />
          {/* Renders the Cart component, passing the cart state and the setCart function as props. */}
        </>
      )}
    </div>
  );
}

export default App; // Exports the App component to make it available for use in other parts of the application.
