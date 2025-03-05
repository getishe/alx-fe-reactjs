import { create } from "zustand";
import PRODUCTS from "../components/Product";

const useStore = create((set) => ({
  products: PRODUCTS,
  cart: [],
  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((p) => p.id !== productId),
    })),
  clearCart: () => set({ cart: [] }),
}));

export default useStore;
