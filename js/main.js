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
    },
    501: {
      slidesPerView: 2,
    },
    1001: {
      slidesPerView: 3,
    },
  },
});

// Pricelist swiper
const price = new Swiper(".pricelist__container", {
  direction: "horizontal",
  speed: 1000,
  loop: false,

  pagination: {
    el: ".pricelist__pagination",
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
    601: {
      slidesPerView: 2,
      allowTouchMove: true,
      spaceBetween: 20,
    },
    1001: {
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

// Accordeon pricelist
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
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".examples__pagination",
  },

  navigation: {
    nextEl: ".examples__button-next",
    prevEl: ".examples__button-prev",
  },
});

// Revievs swiper
const reviews = new Swiper(".reviews__container", {
  grabCursor: true, // Показывает руку для перемещеня слайдов
  slideToClickedSlide: false, // При нажатии на слайд делает его активным
  spaceBetween: 20,
  speed: 1000,
  loop: true,

  navigation: {
    nextEl: ".reviews__button-next",
    prevEl: ".reviews__button-prev",
  },

  pagination: {
    clickable: true,
    el: ".reviews__pagination",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1001: {
      slidesPerView: 2,
    },
  },
});

// Accordeon faq
var acc = document.getElementsByClassName("question__question");
var j = 0;

for (j = 0; j < acc.length; j++) {
  acc[j].addEventListener("click", function () {
    this.classList.toggle("question__more-active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
