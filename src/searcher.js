

import { renderMenu } from './menu.js';
import { filters, products } from '../assets/data/data.js';

export function renderFilters() {
  const container = document.querySelector('#filters');
  container.innerHTML = '';

  filters.forEach(categoria => {
    const button = document.createElement("button");
    button.classList.add('filter');
    button.textContent = categoria;

    button.addEventListener('click', () => {

      if (categoria === 'todos') {
        renderMenu(products);
      } else {
        const filtered = products.filter(
          product => product.category === categoria
        );

        renderMenu(filtered);
      }

    });

    container.appendChild(button);
  });
}


//DEBE buscar los productos por los filtros