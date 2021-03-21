// Бургер меню
var burger = document.querySelector(".burger");
burger.addEventListener("click", function () {
  document
    .querySelector(".header__navigation")
    .classList.toggle("header__navigation-visible");
});

// Cвайвер
const swiper = new Swiper(".swiper-container", {
  spaceBetween: 20,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".company__button-next",
    prevEl: ".company__button-prev",
  },

  // If we need pagination
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});
