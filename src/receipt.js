import { getCart } from './cart.js';

export function initReceipt() {

  const payBtn = document.querySelector('#proceedPay-button');
  const receiptContainer = document.querySelector('#receipt-container');
  const receiptProducts = document.querySelector('#receipt-product');
  const receiptTotal = document.querySelector('#receipt-total');
  const closeReceipt = document.querySelector('#close-receipt');
  const payButton = document.querySelector('#pay-button');

  // 👉 abrir recibo
  payBtn.addEventListener('click', () => {

    const cart = getCart();

    receiptProducts.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
      const subtotal = item.price * item.quantity;
      total += subtotal;

      receiptProducts.innerHTML += `
        <div class="receipt-product">
          <h3>${item.name}</h3>
          <div class="receipt-price">
            <p>Cantidad: ${item.quantity}</p>
            <h5>${subtotal.toFixed(2)} €</h5>
          </div>
        </div>
      `;
    });

    receiptTotal.textContent = `Total: €${total.toFixed(2)}`;

    receiptContainer.classList.add('active');
  });

  // 👉 cerrar recibo
  closeReceipt.addEventListener('click', () => {
    receiptContainer.classList.remove('active');
  });

  // 👉 pagar (vaciar todo)
  payButton.addEventListener('click', () => {
    receiptProducts.innerHTML = '';
    receiptTotal.textContent = 'Total: €0';
    receiptContainer.classList.remove('active');
    alert("Pago realizado ✅");
  });

}