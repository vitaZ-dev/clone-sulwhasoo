// footer 반응형
const footerShow = document.querySelector(".footer-copy-mo");
const footerBottomWrap = document.querySelector(".footer-bottom-mo");

footerShow.addEventListener("click", () => {
  footerBottomWrap.classList.toggle("show");
  footerShow.classList.toggle("is-active");
});
