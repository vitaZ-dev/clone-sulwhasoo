window.onload = function () {
  let snsSwiper = new Swiper(".sw-sns", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".sns .sw-next",
      prevEl: ".sns .sw-prev",
    },
    breakpoints: {
      1510: {
        slidesPerView: 5,
      },

      1480: {
        slidesPerView: 4,
      },

      970: {
        slidesPerView: 3,
      },

      680: {
        slidesPerView: 2,
      },
    },
  });
};
