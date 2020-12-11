import "./styles/style.css";

const contact = (() => {
  const content = document.getElementById("content");
  const container =  document.createElement("div");


  const contactBox = document.createElement("div");
  const headline =   document.createElement("h2");
  const body =       document.createElement("p");
  const img =        _createImg();

  contactBox.classList.add("contact-box");
  container.classList.add("container");

  headline.textContent = "Contact Us";
  body.textContent = "If you need to get in touch with us, one of our phone jabronis is available to take your call. 267-555-GOBIRDS.";

  contactBox.appendChild(headline);
  contactBox.appendChild(body);
  container.appendChild(img);
  container.appendChild(contactBox);

  function _createImg() {
    const figure =  document.createElement("figure");
    const img =     document.createElement("IMG");
    const caption = document.createElement("figcaption");

    img.src = "https://lh3.googleusercontent.com/proxy/bYs7yYi1lMYe1EPRXYfCtgkc35zUyDndUTmB_9mSswKzSSF8UaJtZOiOhFQYT9Co2Zm8xXL1Fy2d6VXY4yTe1JunC6dJBCDmJrd4x2KCN9TH6aYuOGhzH6IxqOD8WC2RGAWHoq2UV_9ikEcK7t8cidyn3LyHJb6SMhuCwSmojRQ";
    img.alt ="Carmine's staff manning the phones"
    caption.textContent = "We'll be happy to take your call";

    figure.appendChild(img);
    figure.appendChild(caption);

    return figure;
  }

  function render() {
    content.appendChild(container);
  }

  return { render }
})();

export default contact;