import React from "react";
import useStore from "../store/useStore";

// Cart component to display items in shopping cart
function Cart() {
  // Extract cart state and actions from Zustand store
  const { cart, removeFromCart, clearCart } = useStore();

  return (
    <div>
      {/* Map through cart items and display each product */}
      {cart?.map((product) => (
        <div key={product.id}>
          <h2>{product.name} Product</h2>
          <h3>{product.price} Price</h3>
          <p>{product.description} description</p>
          {/* Button to remove individual items from cart */}
          <button onClick={() => removeFromCart(product.id)}>Removes</button>
        </div>
      ))}

      {/* Show clear cart button only if cart has items */}
      {cart.length > 0 && <button onClick={clearCart}>Clear button</button>}
    </div>
  );
}

export default Cart;
