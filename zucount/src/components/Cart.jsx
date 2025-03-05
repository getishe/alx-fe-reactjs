import React from "react";

function Cart({ cart, setCart }) {
  return (
    <div>
      {/* Map through the cart array and render each product */}
      {cart?.map((product) => (
        <div key={product.id}>
          {/* Display product name */}
          <h2>{product.name} Product</h2>
          {/* Display product price */}
          <h3>{product.price} Price</h3>
          {/* Display product description */}
          <p>{product.description} description</p>

          {/* Button to remove the product from the cart */}
          <button
            onClick={() => setCart(cart.filter((p) => p.id !== product.id))}
          >
            Removes
          </button>

          {/* Alternative button implementation (commented out) */}
          {/* <button
            onClick={() =>
              setCart((prevCart) =>
                prevCart.filter((p) => p.id !== product.id)
              )
            }
          >
            Remove from cart
          </button> */}
        </div>
      ))}
    </div>
  );
}

export default Cart;
