

let cart = [];

// 👉 Inicializar carrito
export function initCart() {
  renderCart();
}

// 👉 Añadir producto al carrito
export function addToCart(product) {
    console.log("ENTRANDO A addToCart"); // 👈 añade esto
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  renderCart();
}

// 👉 Pintar carrito en pantalla
export function renderCart() {
  const container = document.querySelector('#cart-products');
  const totalContainer = document.querySelector('#cart-total');

  container.innerHTML = '';

  if (cart.length === 0) {
    container.innerHTML = `<h3>Añade un plato a tu menú</h3>`;
    totalContainer.textContent = `Total: €0`;
    return;
  }

  let total = 0;

  cart.forEach(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;

    container.innerHTML += `
      <div class="cart-container">
        
        <button class="close-button" data-id="${item.id}">
          ❌
        </button>

        <div class="text-container">
          <h3>${item.name}</h3>
          <h5>${item.price} €</h5>
        </div>

        <div class="quantity-container">
          <button data-action="plus" data-id="${item.id}">+</button>
          <p class="quantity">${item.quantity}</p>
          <button data-action="minus" data-id="${item.id}">-</button>
        </div>

      </div>
    `;
  });

  totalContainer.textContent = `Total: €${total.toFixed(2)}`;
}

// 👉 Eliminar producto
export function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  renderCart();
}

// 👉 Aumentar cantidad
export function increaseQuantity(id) {
  const item = cart.find(item => item.id === id);
  if (item) item.quantity++;
  renderCart();
}

// 👉 Disminuir cantidad
export function decreaseQuantity(id) {
  const item = cart.find(item => item.id === id);

  if (!item) return;

  item.quantity--;

  if (item.quantity <= 0) {
    removeFromCart(id);
  } else {
    renderCart();
  }
}

export function getCart() {
  return cart;
}