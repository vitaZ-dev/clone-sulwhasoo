window.onload = function () {
  let snsSwiper = new Swiper(".sw-sns", {
    slidesPerView: 5,
    spaceBetween: 10,
    navigation: {
      nextEl: ".sns .sw-next",
      prevEl: ".sns .sw-prev",
    },
  });
};
