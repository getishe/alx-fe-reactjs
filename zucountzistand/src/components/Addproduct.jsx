import React from "react";
import useStore from "../store/useStore";

// Component that displays all available products and allows adding them to cart
function AddProduct() {
  // Get products list and addToCart function from Zustand store
  const { products, addToCart } = useStore();

  return (
    <div>
      {/* Map through all products and display their details */}
      {products?.map((product) => (
        <div key={product.id}>
          <h2>{product.name} Product</h2>
          <h3>{product.price} Price</h3>
          <p>{product.description} description</p>
          {/* Button to add the product to cart */}
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default AddProduct;
