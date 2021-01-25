var swiper = new Swiper('.swiper-container', {
  slidesPerView: "auto",
  spaceBetween: 10,
  // centeredSlides: true,
  // init: false,
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    370: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  }
});