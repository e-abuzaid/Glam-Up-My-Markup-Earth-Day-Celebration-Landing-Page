//Initializing and creating the necessary interactive elements
const earthContainer = document.createElement("div");
earthContainer.id = "earth-container";

const earth = document.createElement("div");
earth.id = "earth";
earth.setAttribute("draggable", true);

const buttonLeft = document.createElement("button");
buttonLeft.id = "button-left";
buttonLeft.innerHTML = "◀";

const buttonRight = document.createElement("button");
buttonRight.id = "button-right";
buttonRight.innerHTML = "▶";

earthContainer.appendChild(buttonLeft);
earthContainer.appendChild(earth);
earthContainer.appendChild(buttonRight);

const header = document.querySelector("header");
header.parentNode.insertBefore(earthContainer, header.nextSibling);

//Creating a list of the articles/cards to be rotated along with the earth rotation
const articleContainer = document.getElementsByTagName("section")[0];
const articles = [];
articleContainer.childNodes.forEach((node) => {
  if (node.nodeType === 1) {
    articles.push(node);
  }
});

//Global Variables
let startDragX;
let x = 0;
let articleIndex = 0;

//Functions
function rotate(direction) {
  earth.classList.add("bounce");
  let currentArticle = articles[articleIndex];
  articleIndex = Math.abs(x / 200) % 4;
  if (direction === "right") {
    currentArticle.classList.remove("rotateInFromRight");
    currentArticle.classList.remove("rotateInFromLeft");
    x = x + 200;
    earth.style.backgroundPosition = `${x}px 0px`;
    articles[articleIndex].classList.add("rotateInFromLeft");
  } else if (direction === "left") {
    currentArticle.classList.remove("rotateInFromLeft");
    currentArticle.classList.remove("rotateInFromRight");
    x = x - 200;
    earth.style.backgroundPosition = `${x}px 0px`;
    articles[articleIndex].classList.add("rotateInFromRight");
  }
  setTimeout(() => {
    earth.classList.remove("bounce");
  }, 500);
}

//Event listeners
earth.addEventListener("dragstart", (event) => {
  startDragX = event.clientX;
});

buttonLeft.onclick = () => rotate("left");
buttonRight.onclick = () => rotate("right");

earth.addEventListener("dragend", (event) => {
  const endDragX = event.clientX;
  const deltaX = endDragX - startDragX;

  if (deltaX > 0) {
    rotate("right");
  } else {
    rotate("left");
  }
});

window.onload = () => {
  setTimeout(() => {
    rotate("right");
  }, 500);
};
