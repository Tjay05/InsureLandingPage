const hBurger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

let displayValue = menu.style.display;

function mobileView () {
  hBurger.addEventListener('click', function() {
    if (menu.style.display === displayValue) {
      menu.style.display = 'flex';
      hBurger.setAttribute('src', 'images/icon-close.svg');
    } else {
      menu.style.display = displayValue;
      hBurger.setAttribute('src', 'images/icon-hamburger.svg');
    }
  });
}

const mediaQuery = window.matchMedia('(min-width: 768px)');

function desktopView() {
  if (mediaQuery >= '768px') {
    menu.style.position = 'unset';
	} else {
    alert('naaaaa');
  }
}

function toggleView (e) {
  if (e.matches) {
    desktopView();
  } else {
    mobileView();
  }
}

toggleView(mediaQuery);

mediaQuery.addEventListener('change', toggleView);