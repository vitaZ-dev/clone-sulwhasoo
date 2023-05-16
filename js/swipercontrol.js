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
