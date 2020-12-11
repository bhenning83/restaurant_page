import "./styles/style.css";

const menu = (() => {
  const content = document.getElementById("content");

  const container =  document.createElement("div");
  const menu =       document.createElement("h3");
  const list =       document.createElement("ul");
  const li1 =        document.createElement("li");
  const li2 =        document.createElement("li");
  const li3 =        document.createElement("li");
  const drinks =     document.createElement("h3");
  const li4 =        document.createElement("li")


  list.classList.add("menu-box");
  container.classList.add("container");

  menu.textContent = "Menu:";
  li1.textContent = "Steak, well done";
  li2.textContent = "Bar nuts";
  li3.textContent = "Chicken, uncooked";
  drinks.textContent = "Drinks:"
  li4.textContent = "Coors Light"

  list.appendChild(menu)
  list.appendChild(li1);
  list.appendChild(li2);
  list.appendChild(li3);
  list.appendChild(drinks);
  list.appendChild(li4);

  container.appendChild(list)

  function render() {
    content.appendChild(container);
  }
  return { render }
})();

export default menu;