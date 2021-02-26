// Бургер меню
var burger = document.querySelector(".burger");
burger.addEventListener("click", function () {
  document
    .querySelector(".header__navigation")
    .classList.toggle("header__navigation-visible");
});
