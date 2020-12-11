import "./styles/style.css";

const home = (() => {
  const content = document.getElementById("content");
  const container =  document.createElement("div");


  function _createHomeContainer() {
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container");
    homeContainer.classList.add("container");

    const img = _createImg();
    const textBox = _createTextBox();

    homeContainer.appendChild(img);
    homeContainer.appendChild(textBox);

    return homeContainer;
  }

  function _createImg() {
    const figure =  document.createElement("figure");
    const img =     document.createElement("IMG");
    const caption = document.createElement("figcaption");

    img.src = "https://www.indiewire.com/wp-content/uploads/2018/10/Its-Always-Sunny-in-Philadelphia-Seinfeld.png?w=670&h=377&crop=1";
    img.alt ="Carmine's friendly staff"
    caption.textContent = "Our friendly wait staff will be happy to serve you";

    figure.appendChild(img);
    figure.appendChild(caption);

    return figure;
  }

  function _createTextBox() {
    const textBox =    document.createElement("div");
    const experience = document.createElement("h3");
    const body =       document.createElement("p");

    textBox.classList.add("text-box");

    experience.textContent = "An Unforgettable Experience";
    body.textContent = "Welcome to Philadelphia's finest place for steaks, Carmine's. Nothing sexual. Carmine's features a mostly functioning bar, comfortable bar stools, a lovely outdoor patio, a VIP lounge, and of course, our renowned wait staff.";
 

    textBox.appendChild(experience);
    textBox.appendChild(body);

    return textBox;
  }

  function render() {
    const homeContainer = _createHomeContainer();
    container.appendChild(homeContainer);
    content.appendChild(container);
  }

  return { render }
})();

export default home;