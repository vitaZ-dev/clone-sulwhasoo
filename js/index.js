// 모달창 처리
const bodyTag = document.querySelector("body");
bodyTag.classList.add("modal-active");
const modal = document.querySelector(".modal");
modal.onclick = function () {
  bodyTag.classList.remove("modal-active");
  this.style.display = "none";
};
