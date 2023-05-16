let recommendData;
const recommendXhttp = new XMLHttpRequest();
recommendXhttp.onreadystatechange = function (event) {
  let req = event.target;
  if (req.readyState === XMLHttpRequest.DONE) {
    recommendData = JSON.parse(req.response);
    makeRecommendSlide();
  }
};
recommendXhttp.open("GET", "recomdata.json");
recommendXhttp.send();
function makeRecommendSlide() {
  let swRecommendHtml = ``;
  for (let i = 0; i < recommendData.recommend_total; i++) {
    let obj = recommendData[`recommend_${i + 1}`];
    let temp = `
		<div class="swiper-slide">
			<a href="${obj.link}">
				<div class="goods-img">
					<img src="./images/${obj.img}" alt="${obj.imgAlt}" />
				</div>
				<div class="goods-info">
					<p class="goods-info-title">${obj.title}</p>
					<p class="goods-info-desc">${obj.desc}</p>
					<p class="goods-info-price">${obj.price}원</p>
				</div>
			</a>
		</div>
		`;
    swRecommendHtml += temp;
  }
  let swRecommendlWrapper = document.querySelector(
    ".sw-recommend .swiper-wrapper"
  );
  swRecommendlWrapper.innerHTML = swRecommendHtml;
  // recommend Swiper
  let recommendSwiper = new Swiper(".sw-recommend", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 24,
    speed: 1000,
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
}
