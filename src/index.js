import DOM from './page_load';
import home from './home'
import menu from './menu';
import contact from './contact'

initLoad();

const content =    document.getElementById("content");
const homeBtn =    document.getElementById("home-btn");
const menuBtn =    document.getElementById("menu-btn");
const contactBtn = document.getElementById("contact-btn");

homeBtn.addEventListener("click", showHome);
menuBtn.addEventListener("click", showMenu);
contactBtn.addEventListener("click", showContact);

function initLoad() {
  DOM.render();
  home.render();
}
function showHome() {
  clear();
  home.render();
}

function showMenu() {
  clear();
  menu.render();
}

function showContact() {
  clear();
  contact.render();
}

function clear() {
  const container =  document.getElementsByClassName("container")[0];

  container.remove();
}

