const menumobile = document.querySelector(".menu-mobile");
const menu = document.querySelector(".menu");
const marquee = document.querySelector(".marquee");

let menuToggle = document.querySelector(".menuToggle");
let navigation = document.querySelector(".navigation");

menuToggle.addEventListener("click", function () {
  navigation.classList.toggle("active");
  menu.classList.toggle("active");
});
