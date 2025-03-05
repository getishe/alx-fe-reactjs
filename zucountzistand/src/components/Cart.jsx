import React from "react";
import useStore from "../store/useStore";

function Cart() {
  const { cart, removeFromCart, clearCart } = useStore();

  return (
    <div>
      {cart?.map((product) => (
        <div key={product.id}>
          <h2>{product.name} Product</h2>
          <h3>{product.price} Price</h3>
          <p>{product.description} description</p>
          <button onClick={() => removeFromCart(product.id)}>Removes</button>
        </div>
      ))}

      {cart.length > 0 && <button onClick={clearCart}>Clear button</button>}
    </div>
  );
}

export default Cart;
