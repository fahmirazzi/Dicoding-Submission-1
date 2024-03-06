let menu = document.querySelector("header .nav--list");
let menuButton = [...document.querySelectorAll(".hamburger-menu")];
// let cancelMenu = document.querySelector(".cancel--button");

// console.log(typeof menuButton);
// console.log(menuButton);

menuButton.map((btn) => {
  console.log(btn);
  btn.addEventListener("click", () => {
    menu.classList.toggle("hide--menu");
  });
});

// cancelMenu.addEventListener("click", () => {
//   menu.classList.toggle("hide--menu");
// });
