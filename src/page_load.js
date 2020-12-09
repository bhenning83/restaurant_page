const DOM = (() => {
  const content = document.getElementById("content");

  function _createHeader() {
    const header = document.createElement("header");
    const h1 =     document.createElement("h1");
    const h4 =     document.createElement("h4");
    const navBar = _createNavBar();

    h1.textContent = "Carmines";
    h4.textContent = "A Place for Steaks";
    
    header.appendChild(h1);
    header.appendChild(h4);
    header.appendChild(navBar);

    return header;
  }

  function _createNavBar() {
    const navBar = document.createElement("nav");
    const home = document.createElement("div");
    const menu = document.createElement("div");
    const contact = document.createElement("div");

    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    home.setAttribute("id", "home-btn");
    menu.setAttribute("id", "menu-btn");
    contact.setAttribute("id", "contact-btn");

    navBar.appendChild(home);
    navBar.appendChild(menu);
    navBar.appendChild(contact);

    return navBar;
  }

  function render() {
    const header = _createHeader();

    content.appendChild(header);
  }

  return { render }
})();

export default DOM