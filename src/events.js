import { products } from "../assets/data/data.js";
import { addToCart } from "./cart.js";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "./cart.js";

export function initEvents() {
  const container = document.querySelector("#products");

  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-button")) {
      const id = Number(e.target.dataset.id);

      const product = products.find((p) => p.id === id);

      addToCart(product);
    }
  });
  const cartContainer = document.querySelector("#cart-products");

  cartContainer.addEventListener("click", (e) => {
    const id = Number(e.target.dataset.id);

    // ❌ eliminar
    if (e.target.classList.contains("close-button")) {
      removeFromCart(id);
    }

    // ➕ aumentar
    if (e.target.dataset.action === "plus") {
      increaseQuantity(id);
    }

    // ➖ disminuir
    if (e.target.dataset.action === "minus") {
      decreaseQuantity(id);
    }
  });
}
