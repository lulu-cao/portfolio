const navItems = document.querySelector("body");
navItems.addEventListener("mouseover", (e) => {
  const { x, y } = navItems.getBoundingClientRect();
  console.log("clientX is " + e.clientX);
  console.log("clientY is " + e.clientY);
  console.log("X is " + x);
  console.log("Y is " + y);
  console.log(e.clientX - x);
  console.log(e.clientY - y);
  navItems.style.setProperty("--x", e.clientX - x);
  navItems.style.setProperty("--y", e.clientY - y);
});

const navBar = document.querySelector("nav");
const navIcon = document.getElementById("navIcon");
const navIconX = document.getElementById("navIconX");

function navShow() {
  navBar.style.display = "flex";
  navIconX.style.display = "block";
  navIcon.style.display = "none";
}

function navHide() {
  navBar.style.display = "none";
  navIconX.style.display = "none";
  navIcon.style.display = "block";
}

navIcon.addEventListener("click", navShow);
navIconX.addEventListener("click", navHide);
