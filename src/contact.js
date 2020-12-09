const contact = (() => {
  const content = document.getElementById("content");

  const contactBox = document.createElement("div");
  const headline =   document.createElement("h2");
  const body =       document.createElement("p");

  contactBox.classList.add("contact-box");

  headline.textContent = "Contact Us";
  body.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  contactBox.appendChild(headline);
  contactBox.appendChild(body);

  function render() {
    content.appendChild(contactBox)
  }

  return { render }
})();

export default contact;