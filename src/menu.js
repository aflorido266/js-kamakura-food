import { products } from '../assets/data/data.js';

export function renderMenu(data = products) {
  const container = document.querySelector('#products');
  container.innerHTML = '';

  data.forEach(product => {
    container.innerHTML += `
      <div class="product-container">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price-container">
          <h5>${product.price} €</h5>
          <button class="add-button" data-id="${product.id}">
            Añadir
          </button>
        </div>
      </div>
    `;
  });
}
//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.