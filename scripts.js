const myOpen = document.querySelector('.hamburger');
const nav = document.querySelector('.main-menu');
const myClose = document.querySelector('.close');
const myLinks = document.querySelector('.links');

myOpen.onclick = () => {
  nav.classList.add('open');
  myOpen.classList.add('display');
};
myClose.onclick = () => {
  nav.classList.remove('open');
  myOpen.classList.remove('display');
};
myLinks.onclick = () => {
  nav.classList.remove('open');
  myOpen.classList.remove('display');
};
