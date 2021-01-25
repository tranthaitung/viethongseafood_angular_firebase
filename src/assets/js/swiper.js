// var swiper = new Swiper('.swiper-container-certificated', {
//     slidesPerView: 4,
//     centeredSlides: true,
//     spaceBetween: 30,
//     grabCursor: true,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   });

// var swiper = new Swiper('.swiper-container', {
//     effect: 'coverflow',
//     // grabCursor: true,
//     // centeredSlides: true,
//     slidesPerView: 'auto',
//     spaceBetween: 10,
//     autoplay: {
//         delay: 5000,
//         disableOnInteraction: false,
//     },
//     coverflowEffect: {
//         rotate: 40,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows: true,
//     },
//     // pagination: {
//     //     el: '.swiper-pagination',
//     // },
// });

var swiper_cer = new Swiper('.swiper-containers', {
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