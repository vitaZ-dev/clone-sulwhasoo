let carouselData;
const carouselXhttp = new XMLHttpRequest();
carouselXhttp.onreadystatechange = function (event) {
  let req = event.target;
  if (req.readyState === XMLHttpRequest.DONE) {
    carouselData = JSON.parse(req.response);
    makeCarouselSlide();
  }
};
carouselXhttp.open("GET", "carouseldata.json");
carouselXhttp.send();
function makeCarouselSlide() {
  let swCarouselHtml = ``;
  for (let i = 0; i < carouselData.carousel_total; i++) {
    let obj = carouselData[`carousel_${i + 1}`];
    let temp = `
		<div class="swiper-slide">
			<a href="${obj.link}">
				<picture>
					<source
						srcset="./images/${obj.img_720}"
						media="(max-width: ${obj.media_720})"
					/>
					<source
						srcset="./images/${obj.img_1024}"
						media="(max-width: ${obj.media_1024})"
					/>
					<img src="./images/${obj.img}" alt="${obj.imgAlt}" />
				</picture>
				<div class="slide-info">
					<div class="inner">
						<p>${obj.title_top}</p>
						<p>${obj.title_main}</p>
					</div>
				</div>
			</a>
		</div>
		`;
    swCarouselHtml += temp;
  }
  let swCarouselWrapper = document.querySelector(
    ".sw-carousel .swiper-wrapper"
  );
  swCarouselWrapper.innerHTML = swCarouselHtml;
  // carousel slide
  let carouselSwiper = new Swiper(".sw-carousel", {
    // fade 기능 구현
    effect: "fade",
    spaceBetween: 24,
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".carousel .sw-next",
      prevEl: ".carousel .sw-prev",
    },
    pagination: {
      el: ".carousel .swiper-pagination",
      type: "progressbar",
    },
  });
  // stop & play 버튼 동작
  let stop = document.querySelector(".slide-control");
  let box = document.querySelector(".sw-carousel");
  stop.addEventListener("click", () => {
    box.classList.toggle("slides--stop");
    if (box.classList.contains("slides--stop")) {
      carouselSwiper.autoplay.stop();
      stop.classList.add("carousel-slide-play");
    } else {
      carouselSwiper.autoplay.start();
      stop.classList.remove("carousel-slide-play");
    }
  });
}
