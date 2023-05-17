import './style.css';
import { display } from './storeItems.js';
import { del } from './review.js';

const clsBtn = document.getElementById('clsBtn');
const refres = document.getElementById('refres');

refres.onclick = () => {
  window.location.reload();
};
refres.addEventListener('mouseover', () => {
  refres.classList.add('fa-spin');
});
refres.addEventListener('mouseout', () => {
  refres.classList.remove('fa-spin');
});

clsBtn.addEventListener('click', (event) => {
  console.log(event);
  del();
});

display();