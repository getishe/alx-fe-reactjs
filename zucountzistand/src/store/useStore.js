// Import Zustand's create function which is used to create a store
import { create } from "zustand";
// Import our product data from the Products component
import PRODUCTS from "../components/Product";

// Create and export a Zustand store
// create() accepts a function that defines the store's behavior
const useStore = create((set) => ({
  // --- State Properties ---
  // products: Array of all available products in our shop
  // This is initialized with our PRODUCTS data
  products: PRODUCTS,

  // cart: Array to store items added to shopping cart
  // Initialized as an empty array
  cart: [],

  // --- Actions/Methods ---
  // addToCart: Adds a product to the shopping cart
  // Parameters:
  //   - product: The product object to be added
  // Returns: Updated state with new product added to cart array
  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product], // Create new array with existing items plus new product
    })),

  // removeFromCart: Removes a specific product from cart using its ID
  // Parameters:
  //   - productId: The ID of the product to remove
  // Returns: Updated state with product filtered out of cart array
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((p) => p.id !== productId), // Filter out product with matching ID
    })),

  // clearCart: Resets the cart to empty
  // Parameters: None
  // Returns: Updated state with empty cart array
  clearCart: () => set({ cart: [] }), // Simply set cart back to empty array
}));

// Export the store hook for use in components
export default useStore;
