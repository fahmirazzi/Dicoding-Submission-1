let menu = document.querySelector("header .nav--list");
let menuButton = [...document.querySelectorAll(".hamburger-menu")];
let popUp = document.querySelector(".popup-signup_container");
let bgPopup = document.querySelector(".bg-popup");
let cancelPopup = document.querySelector(".cancel-popup");
let PopUpOpened = false;

menuButton.map((btn) => {
  btn.addEventListener("click", () => {
    menu.classList.toggle("hide--menu");
  });
});

cancelPopup.addEventListener("click", () => {
  popUp.classList.add("hide-popup");
});

bgPopup.addEventListener("click", () => {
  popUp.classList.add("hide-popup");
});

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let docHeight = document.body.offsetHeight;
  let winHeight = window.innerHeight;
  let scrollPercent = scrollTop / (docHeight - winHeight);
  let scrollPercentRounded = Math.round(scrollPercent * 100);

  if (scrollPercentRounded > 50 && PopUpOpened == false) {
    hidePopup();
    PopUpOpened = true;
  }
  // percentLabel.innerHTML = scrollPercentRounded;
  // document.title = `(${scrollPercentRounded}%) ${originalTitle}`;
});

function hidePopup() {
  popUp.classList.remove("hide-popup");
}
