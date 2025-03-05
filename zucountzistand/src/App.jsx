import "./App.css";
import Addproduct from "./components/Addproduct";
import Cart from "./components/Cart";
import useStore from "./store/useStore";

function App() {
  const products = useStore((state) => state.products);

  return (
    <div>
      <h1>App</h1>
      {products.length === 0 ? (
        <p>No products to display.</p>
      ) : (
        <>
          <Addproduct />
          <Cart />
        </>
      )}
    </div>
  );
}

export default App;
