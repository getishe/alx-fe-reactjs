import React from "react";

function AddProduct({ products, setCart }) {
  return (
    <div>
      {/* Map through the products array and render each product */}
      {products?.map((product) => (
        <div key={product.id}>
          {/* Display product name */}
          <h2>{product.name} Product</h2>
          {/* Display product price */}
          <h3>{product.price} Price</h3>
          {/* Display product description */}
          <p>{product.description} description</p>

          {/* Button to add the product to the cart */}
          <button onClick={() => setCart((cart) => [...cart, product])}>
            Add to cart
          </button>

          {/* Alternative button implementation (commented out) */}
          {/* <button
            onClick={() =>
              setProducts((prevProducts) =>
                prevProducts.filter((p) => p.id !== product.id)
              )
            }
          >
            Delete
          </button> */}
        </div>
      ))}
    </div>
  );
}

export default AddProduct;
