const Menu = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close-btn');
const openMenu = document.querySelector('.navbar1');
const show = () => {
  Menu.style.display = 'block';
};
const hide = () => {
  Menu.style.display = 'none';
};
closeMenu.addEventListener('click', hide);
openMenu.addEventListener('click', show);
