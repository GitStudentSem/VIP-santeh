// Burger menu
var burger = document.querySelector(".burger");
burger.addEventListener("click", function () {
  document
    .querySelector(".header__navigation")
    .classList.toggle("header__navigation-visible");
});

// Company swiper
const company = new Swiper(".company__container", {
  grabCursor: true, // Показывает руку для перемещеня слайдов
  slideToClickedSlide: false, // При нажатии на слайд делает его активным
  spaceBetween: 20,
  speed: 1000,
  loop: false,

  navigation: {
    nextEl: ".company__button-next",
    prevEl: ".company__button-prev",
  },

  pagination: {
    clickable: true,
    el: ".company__pagination",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      //slidesPerColumnFill: "column", //как слайды должны заполнять строки, по столбцу или по строке
      //slidesPerColumn: 1, //Количесвтво слайдов в столбце
    },
    500: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});
