const startSript = () => {
  console.log("Hello, world");
};
document.addEventListener("DOMContentLoaded", startSript);

document.body.style.backgroundImage = 'url("img/bg.jpg")';

// Element created with id title-wrapper
var mydiv = document.createElement("div");
mydiv.setAttribute("id", "tile-wrapper");
document.body.appendChild(mydiv);
// mydiv.innerHTML = "<h1>Hello</h1>  ";
mydiv.classList.add("uppercase");

// Element created with id title
var myTitle = document.createElement("h1");
myTitle.setAttribute("id", "title");
myTitle.innerText = "Work under progress";
mydiv.appendChild(myTitle);
myTitle.classList.add("white");
