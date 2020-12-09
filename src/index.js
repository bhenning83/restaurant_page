import DOM from './page_load';
import home from './home'
import menu from './menu';
import contact from './contact'

DOM.render();

const content = document.getElementById("content");
const homeBtn =    document.getElementById("home-btn");
const menuBtn =    document.getElementById("menu-btn");
const contactBtn = document.getElementById("contact-btn");

homeBtn.addEventListener("click", showHome);
menuBtn.addEventListener("click", showMenu);
contactBtn.addEventListener("click", showContact);

function showHome() {
  home.render();
}

function showMenu() {
  menu.render();
}

function showContact() {
  contact.render();
}

