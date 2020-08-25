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

// Generating ul and li

var list = document.createElement("ul");
var listElement1 = document.createElement("li");
var listElement2 = document.createElement("li");
var listElement3 = document.createElement("li");
var listElement4 = document.createElement("li");

document.body.appendChild(list);
list.appendChild(listElement1);
list.appendChild(listElement2);
list.appendChild(listElement3);
list.appendChild(listElement4);

listElement1.innerHTML = `<a id="home" class="btn" href="default.asp">Home</a>`;
listElement2.innerHTML = `<a id="news" class="btn" href="news.asp">News</a>`;
listElement3.innerHTML = `<a id="contact" class="btn" href="contact.asp">Contact</a>`;
listElement4.innerHTML = `<a id="about" class="btn" href="#">About</a>`;

// Adding new element div#content to the page

var mydiv2 = document.createElement("div");
mydiv2.setAttribute("id", "content");
document.body.appendChild(mydiv2);

var loadAbout = () => {
  return (mydiv2.innerHTML = `<h1>Hello and Welcome to our page.</h1>`);
};

const about = document.querySelector("#about");
about.addEventListener("click", () => {
  myTitle.style.display = "none";
});
about.addEventListener("click", loadAbout);
