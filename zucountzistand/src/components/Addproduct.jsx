import React from "react";
import useStore from "../store/useStore";

function AddProduct() {
  const { products, addToCart } = useStore();

  return (
    <div>
      {products?.map((product) => (
        <div key={product.id}>
          <h2>{product.name} Product</h2>
          <h3>{product.price} Price</h3>
          <p>{product.description} description</p>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default AddProduct;
