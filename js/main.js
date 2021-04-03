$(document).ready(function () {
  // Burger menu
  var burger = document.querySelector(".burger");
  burger.addEventListener("click", function () {
    document
      .querySelector(".header__navigation")
      .classList.toggle("header__navigation-visible");
  });

  // Smooth scroll
  (function () {
    const scrollLinks = document.querySelectorAll("a.scroll-link");

    for (const scrollLink of scrollLinks) {
      scrollLink.addEventListener("click", (event) => {
        event.preventDefault();
        const id = scrollLink.getAttribute("href");
        document.querySelector(id).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  })();

  // Company swiper
  const company = new Swiper(".company__container", {
    grabCursor: true, // Показывает руку для перемещеня слайдов
    slideToClickedSlide: false, // При нажатии на слайд делает его активным
    spaceBetween: 20,
    speed: 1000,
    loop: false,

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

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

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

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

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

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

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

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
      this.classList.toggle("question__question-active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  // Modal form
  const form = $(".form"),
    funcForm = () => {
      swal({
        title: "Внимание!",
        text:
          "Это учебный сайт, поэтому вы не можете отправить заявку. В Вашем проете такая возможность обязательно будет!",
        icon: "warning",
        button: "Хорошо!",
      });
    };
  form.on("click", funcForm);

  // modal Phone
  const phone = $(".phone"),
    funcPhone = () => {
      swal({
        title: "Внимание!",
        text:
          "Это учебный сайт, поэтому вы не можете позвонить по этому номеру. В Вашем проете такая возможность обязательно будет!",
        icon: "warning",
        button: "Хорошо!",
      });
    };
  phone.on("click", funcPhone);

  // modal Contacts
  const contact = $(".contact"),
    funcContact = () => {
      swal({
        title: "Внимание!",
        text:
          "Это учебный сайт, поэтому вы не можете с нами связаться. Но вы можете написать разработчику этого сайта: www.semen-purnemcev.ru",
        icon: "warning",
        button: "Хорошо!",
      });
    };
  contact.on("click", funcContact);
});
