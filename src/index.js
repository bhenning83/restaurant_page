import header from './header';
import home from './home'
import menu from './menu';
import contact from './contact'

initLoad();

const homeBtn =    document.getElementById("home-btn");
const menuBtn =    document.getElementById("menu-btn");
const contactBtn = document.getElementById("contact-btn");

homeBtn.addEventListener("click", showHome);
menuBtn.addEventListener("click", showMenu);
contactBtn.addEventListener("click", showContact);

function initLoad() {
  header.render();
  home.render();
}
function showHome() {
  clear();
  home.render();
  homeBtn.classList.add("active");
}

function showMenu() {
  clear();
  menu.render();
  menuBtn.classList.add("active");
}

function showContact() {
  clear();
  contact.render();
  contactBtn.classList.add("active");
}

function clear() {
  const container =  document.getElementsByClassName("container")[0];
  container.remove();
  homeBtn.classList.remove("active");
  menuBtn.classList.remove("active");
  contactBtn.classList.remove("active");
}

