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

const navIcon = document.getElementById("navIcon");
navIcon.addEventListener("click", navShow);
function navShow() {
  const navBar = document.querySelector("nav");
  if (navBar.style.display == "flex") {
    navBar.style.display = "none";
  } else {
    navBar.style.display = "flex";
  }
}
