import { renderMenu } from './menu.js';
import { renderFilters } from './searcher.js'; 
import { initEvents } from './events.js'; 
import { initCart } from './cart.js';
import { initReceipt } from './receipt.js';

function initApp() {
  renderMenu();
  renderFilters();
  initEvents();
  initCart();     
  initReceipt();  
}

document.addEventListener('DOMContentLoaded', initApp);

