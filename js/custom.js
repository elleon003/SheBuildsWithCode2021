let menuButton = document.getElementById('menuButton')
menuButton.addEventListener('click', showMenu, false)

let closeButton = document.getElementById('closeButton')
closeButton.addEventListener('click', hideMenu, false)

let mobileMenu = document.getElementById('menu')

function showMenu(e) {
  mobileMenu.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function hideMenu(e) {
  mobileMenu.classList.remove('show');
  e.stopPropagation();

  document.body.style.overflow = 'auto';
}

