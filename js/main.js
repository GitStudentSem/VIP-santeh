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

// Price swiper
const price = new Swiper(".pricelist__container", {
  direction: "horizontal",
  speed: 1000,
  loop: false,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".pricelist__button-next",
    prevEl: ".pricelist__button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      allowTouchMove: true,
    },
    500: {
      slidesPerView: 2,
      allowTouchMove: true,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 20,
      allowTouchMove: false,
    },
    1201: {
      slidesPerView: 3,
      spaceBetween: 30,
      allowTouchMove: false,
    },
  },
});

// Accordeon
var acc = document.getElementsByClassName("pricelist__more-button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("pricelist__more-button-active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// Examples swiper
const examples = new Swiper(".examples__container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".examples__button-next",
    prevEl: ".examples__button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
