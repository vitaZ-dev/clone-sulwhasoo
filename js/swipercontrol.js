// carousel slide
let carouselSwiper = new Swiper(".sw-carousel", {
  // fade 기능 구현
  effect: "fade",
  spaceBetween: 24,
  slidesPerView: 1,
  speed: 1000, //1s
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".carousel .sw-next",
    prevEl: ".carousel .sw-prev",
  },
  //progress bar ~> 너비랑 색깔만 다시주면 됨+위치도
  pagination: {
    el: ".carousel .swiper-pagination",
    type: "progressbar",
  },
});
let stop = document.querySelector(".slide-control");
let box = document.querySelector(".sw-carousel");
//해결
stop.addEventListener("click", () => {
  box.classList.toggle("slides--stop");
  if (box.classList.contains("slides--stop")) {
    carouselSwiper.autoplay.stop();
    stop.style.backgroundImage = `url("../../images/carousel_play.png")`;
  } else {
    carouselSwiper.autoplay.start();
    stop.style.backgroundImage = `url("../../images/carousel_stop.png")`;
  }
});

// recommend Swiper
let recommendSwiper = new Swiper(".sw-recommend", {
  slidesPerView: 1,
  slidesPerGroup: 1, // 한번에 슬라이드할 아이템 개수
  spaceBetween: 24,
  speed: 1000, //1s
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".recommend .sw-next",
    prevEl: ".recommend .sw-prev",
  },
  //progress bar
  pagination: {
    el: ".recommend .swiper-pagination",
    type: "progressbar",
  },
  //반응형
  breakpoints: {
    720: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },
  },
});
// stop & play 버튼 동작
let stopBtn = document.querySelector(".sw-stop");
let container = document.querySelector(".sw-recommend");
stopBtn.addEventListener("click", () => {
  container.classList.toggle("slide--stop");
  if (container.classList.contains("slide--stop")) {
    recommendSwiper.autoplay.stop();
    stopBtn.style.backgroundImage = `url("../../images/play.png")`;
  } else {
    recommendSwiper.autoplay.start();
    stopBtn.style.backgroundImage = `url("../../images/stop.png")`;
  }
});
