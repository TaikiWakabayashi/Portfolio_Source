'use strict'
let swiper1 = new Swiper(".mySwiper1", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    speed: 1000,
    centeredSlides: true,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
  });

let swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    centeredSlides: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });