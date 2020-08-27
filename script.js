const startSript = () => {
  // Loads Hello world and image at the starting of script.
  console.log("Hello, world");
  document.body.style.backgroundImage = 'url("img/bg.jpg")';
};

document.addEventListener("DOMContentLoaded", startSript); // function starts when the content is loaded.

// Element created with id title-wrapper
var mydiv = document.createElement("div"); // creates element div and sets id to title wrapper.
mydiv.setAttribute("id", "tile-wrapper");
document.body.appendChild(mydiv); // appends this div to body.
mydiv.style.width = "100%";
mydiv.style.textAlign = "center%";
mydiv.style.fontFamily = "impact%";
mydiv.style.position = "absolute%";
mydiv.style.color = "white%";
mydiv.style.top = "50%";
mydiv.style.textTransform = "uppercase";

// Element created with id title
var myTitle = document.createElement("h1");
myTitle.setAttribute("id", "title");
myTitle.innerText = "Work under progress";
mydiv.appendChild(myTitle);
myTitle.style.width = "fit-content";
myTitle.style.margin = "auto";
myTitle.style.background = "black";
myTitle.style.color = "white";

// Generating ul and li
var list = document.createElement("ul");
list.setAttribute("id", "nav");
document.body.appendChild(list);

navElement = ["home", "news", "contact", "about"]; // All the elements of Nav Bar

for (var i = 0; i < navElement.length; i++) {
  // iterartion for all elements of nav bar.
  var li = document.createElement("li"); //creates li for all the elements
  document.getElementById("nav").appendChild(li); // appends li to the parent element ul
  li.innerText = navElement[i]; //providing innerText
  li.setAttribute("id", navElement[i]); // giving id
  li.setAttribute("class", "btn"); // giving class of btn
  if (navElement[i] === "home") {
    // if elemnt is home then link wil be default.asp
    li.innerHTML = navElement[i].link(`default.asp`);
  } else {
    //otherwise it will be as per the name of element.
    var str = navElement[i];
    var result = str.link(`${navElement[i]}.asp`);
    li.innerHTML = result;
  }
}

// var list = document.createElement("ul");
// var listElement1 = document.createElement("li");
// var listElement2 = document.createElement("li");
// var listElement3 = document.createElement("li");
// var listElement4 = document.createElement("li");

// document.body.appendChild(list);
// list.appendChild(listElement1);
// list.appendChild(listElement2);
// list.appendChild(listElement3);
// list.appendChild(listElement4);

// listElement1.innerHTML = `<a id="home" class="btn" href="default.asp">Home</a>`;
// listElement2.innerHTML = `<a id="news" class="btn" href="news.asp">News</a>`;
// listElement3.innerHTML = `<a id="contact" class="btn" href="contact.asp">Contact</a>`;
// listElement4.innerHTML = `<a id="about" class="btn" href="#">About</a>`;

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
