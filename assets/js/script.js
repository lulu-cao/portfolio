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
  navIconX.style.opacity = "1";
  navIcon.style.opacity = "0.5";
  navIcon.style.width = 0;
  navIcon.style.height = 0;
  navIconX.style.width = 26;
  navIconX.style.height = 26;
}

function navHide() {
  navBar.style.display = "none";
  navIconX.style.opacity = "0.5";
  navIcon.style.opacity = "1";
  navIconX.style.width = 0;
  navIconX.style.height = 0;
  navIcon.style.width = 26;
  navIcon.style.height = 26;
}

navIcon.addEventListener("click", navShow);
navIconX.addEventListener("click", navHide);
