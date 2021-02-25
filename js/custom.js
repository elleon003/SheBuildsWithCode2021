let menuButton = document.getElementById('menuButton')
menuButton.addEventListener('click', showMenu, false)

let mobileMenu = document.getElementById('menu')
mobileMenu.addEventListener('click', hideMenu, false)

function showMenu(e) {
  mobileMenu.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function hideMenu(e) {
  mobileMenu.classList.remove('show');
  e.stopPropagation();

  document.body.style.overflow = 'auto';
}

