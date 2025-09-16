const hBurger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

let displayValue = menu.style.display;

hBurger.addEventListener('click', function() {
  if (menu.style.display === displayValue) {
    menu.style.display = 'flex';
    hBurger.setAttribute('src', 'images/icon-close.svg');
  } else {
    menu.style.display = displayValue;
    hBurger.setAttribute('src', 'images/icon-hamburger.svg');
  }
})