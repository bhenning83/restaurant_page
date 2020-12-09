const menu = (() => {
  const content = document.getElementById("content");

  const menuBox =    document.createElement("div");
  const menu =       document.createElement("h3");
  const list =       document.createElement("ul");
  const li1 =        document.createElement("li");
  const li2 =        document.createElement("li");
  const li3 =        document.createElement("li");

  menuBox.classList.add("menu-box");

  menu.textContent = "Menu:";
  li1.textContent = "Steak, well done";
  li2.textContent = "Bar nuts";
  li3.textContent = "Chicken, uncooked";

  list.appendChild(li1);
  list.appendChild(li2);
  list.appendChild(li3);

  menuBox.appendChild(list);

  function render() {
    content.appendChild(menuBox);
  }
  return { render }
})();

export default menu;