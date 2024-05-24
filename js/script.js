// create a star following mouse movement
// const navItems = document.querySelector("body");
// navItems.addEventListener("mouseover", (e) => {
//   const { x, y } = navItems.getBoundingClientRect();
//   console.log("clientX is " + e.clientX);
//   console.log("clientY is " + e.clientY);
//   console.log("X is " + x);
//   console.log("Y is " + y);
//   console.log(e.clientX - x);
//   console.log(e.clientY - y);
//   navItems.style.setProperty("--x", e.clientX - x);
//   navItems.style.setProperty("--y", e.clientY - y);
// });

// show navbar when the hamburger icon is clicked
// hide navbar when the "x" icon is clicked
const navBar = document.querySelector(".nav-container-sm");
const header = document.querySelector(".header-container");
const hamburgerBtn = document.getElementById("hamburger-button");
const navCloseBtn = document.getElementById("nav-close-button");

function navShow() {
  header.style.height = "16rem";
  navBar.style.display = "flex";
  navBar.style.height = "fit-content";
  navCloseBtn.style.display = "block";
  hamburgerBtn.style.display = "none";
}

function navHide() {
  header.style.height = "4rem";
  navBar.style.display = "none";
  navCloseBtn.style.display = "none";
  hamburgerBtn.style.display = "block";
}

hamburgerBtn.addEventListener("click", navShow);
navCloseBtn.addEventListener("click", navHide);

// set time out for greetings
// const myTimeout = setTimeout(greetings, 1000);

// function greetings() {
//   document.getElementById("line2").innerHTML =
//     "I'm a full-stack web developer.";
// }
