(()=>{"use strict";const e=(()=>{const e=document.getElementById("content");return{render:function(){const t=function(){const e=document.createElement("header"),t=document.createElement("h1"),n=document.createElement("h4"),d=function(){const e=document.createElement("nav"),t=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div");return t.textContent="Home",n.textContent="Menu",d.textContent="Contact",t.setAttribute("id","home-btn"),n.setAttribute("id","menu-btn"),d.setAttribute("id","contact-btn"),e.appendChild(t),e.appendChild(n),e.appendChild(d),e}();return t.textContent="Carmines",n.textContent="A Place for Steaks",e.appendChild(t),e.appendChild(n),e.appendChild(d),e}();e.appendChild(t)}}})(),t=(()=>{const e=document.getElementById("content");return{render:function(){const t=function(){const e=document.createElement("div");e.classList.add("home-container"),e.classList.add("container");const t=function(){const e=document.createElement("figure"),t=document.createElement("IMG"),n=document.createElement("figcaption");return t.src="https://www.indiewire.com/wp-content/uploads/2018/10/Its-Always-Sunny-in-Philadelphia-Seinfeld.png?w=670&h=377&crop=1",t.alt="Carmine's friendly staff",n.textContent="Our friendly wait staff will be happy to serve you.",e.appendChild(t),e.appendChild(n),e}(),n=function(){const e=document.createElement("div"),t=document.createElement("h3"),n=document.createElement("p");return e.classList.add("text-box"),t.textContent="An Unforgettable Experience",n.textContent="Welcome to Philadelphia's finest place for steaks, Carmine's. Nothing sexual. Carmine's features a mostly functioning bar, comfortable bar stools, a lovely outdoor patio, a VIP lounge, and of course, our renowned wait staff.",e.appendChild(t),e.appendChild(n),e}();return e.appendChild(t),e.appendChild(n),e}();e.appendChild(t)}}})(),n=(()=>{const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("h3"),d=document.createElement("ul"),o=document.createElement("li"),c=document.createElement("li"),a=document.createElement("li");return t.classList.add("menu-box"),t.classList.add("container"),n.textContent="Menu:",o.textContent="Steak, well done",c.textContent="Bar nuts",a.textContent="Chicken, uncooked",d.appendChild(o),d.appendChild(c),d.appendChild(a),t.appendChild(d),{render:function(){e.appendChild(t)}}})(),d=(()=>{const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("h2"),d=document.createElement("p");return t.classList.add("contact-box"),t.classList.add("container"),n.textContent="Contact Us",d.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",t.appendChild(n),t.appendChild(d),{render:function(){e.appendChild(t)}}})();e.render(),t.render(),document.getElementById("content");const o=document.getElementById("home-btn"),c=document.getElementById("menu-btn"),a=document.getElementById("contact-btn");function i(){document.getElementsByClassName("container")[0].remove()}o.addEventListener("click",(function(){i(),t.render()})),c.addEventListener("click",(function(){i(),n.render()})),a.addEventListener("click",(function(){i(),d.render()}))})();