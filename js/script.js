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

// show detailed navbar on click for small screens
const navBar = document.querySelector("nav");
const header = document.querySelector("header");
const navIcon = document.getElementById("navIcon");
const navIconX = document.getElementById("navIconX");

function navShow() {
  header.style.height = "5rem";
  navBar.style.display = "block";
  navIconX.style.display = "block";
  navIcon.style.display = "none";
}

function navHide() {
  header.style.height = "2.5rem";
  navBar.style.display = "none";
  navIconX.style.display = "none";
  navIcon.style.display = "block";
}

navIcon.addEventListener("click", navShow);
navIconX.addEventListener("click", navHide);

// set time out for greetings
// const myTimeout = setTimeout(greetings, 1000);

// function greetings() {
//   document.getElementById("line2").innerHTML =
//     "I'm a full-stack web developer.";
// }
