import { setupStore } from "./store";
import { setupShoppingCart } from "./shoppingCart";

// Wait for DOM to be ready before initializing
document.addEventListener('DOMContentLoaded', () => {
  setupStore();
  setupShoppingCart();
});
