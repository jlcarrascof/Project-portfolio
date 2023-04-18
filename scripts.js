const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",
  () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

/*
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
*/

/*
let burguer_menu = document.getElementById('burguer_menu');
let	slideMenu = document.getElementById('slidemenu');
let	elem_menu = document.querySelectorAll('#slidemenu a');

function toggleMenu() {
	slideMenu.classList.toggle("active");
}

burguer_menu.addEventListener('click', toggleMenu); 

for (let i = 0; i < elem_menu.length; i++) {
	elem_menu[i].addEventListener('click', toggleMenu);
}
*/

