// footer 반응형
const footerShow = document.querySelector(".footer-copy-mo");
const footerHidden = document.querySelector(".footer-mo-wrap");

footerShow.addEventListener("click", () => {
  footerHidden.classList.toggle("show");
  footerShow.classList.toggle("is-active");
});
