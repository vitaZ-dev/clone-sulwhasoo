// header _ select-language
let langBtn = document.querySelector(".language-toggle");
let langBtn_con = document.querySelector(".select-language");
langBtn.addEventListener("click", () => {
  langBtn.classList.toggle("language-selected");
  langBtn_con.classList.toggle("language-selected-active");
});

// nav 보이기
let gnbWrap = document.querySelector(".gnb");
let gnbBg = document.querySelector(".gnb-sub-list-bg");
let gnbList = document.querySelector(".gnb-list");
let gnbItems = document.querySelectorAll(".gnb-list > li");
gnbItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    // gnbBg.style.display = "block";
    gnbWrap.setAttribute("style", "border-bottom: 1px solid #d5d5d5;");
    gnbBg.setAttribute("style", "display: block;");
  });
});
gnbItems.forEach((item) => {
  item.addEventListener("mouseleave", () => {
    // gnbBg.style.display = "none";
    gnbWrap.setAttribute("style", "border-bottom: none;");
    gnbBg.setAttribute("style", "display: none;");
  });
});
//mouseover-mouseout

// 검색 영역
let modalWrap = document.querySelector(".modal");
let topSearchBtn = document.querySelector(".search-btn");
let searchCloseBtn = document.querySelector(".search-close-btn");
let searchArea = document.querySelector(".header-top-search");
topSearchBtn.addEventListener("click", () => {
  searchArea.style.display = "block";
  modalWrap.style.display = "block";
  //스크롤 금지
  document.body.style.overflow = "hidden";
});
searchCloseBtn.addEventListener("click", () => {
  searchArea.style.display = "none";
  modalWrap.style.display = "none";
  // 다시 스크롤
  document.body.style.overflow = "unset";
});

// side navigation
let sideNavBtn = document.querySelector(".side-nav-btn");
let sideNavClose = document.querySelector(".sidenav-close");
let sideNavArea = document.querySelector("section.sidenav");
// let sideNavWrap = document.querySelector(".sidenav-wrap");
sideNavBtn.addEventListener("click", function () {
  sideNavArea.style.display = "block";
  //스크롤 금지
  // document.body.style.overflow = "hidden";
});
sideNavClose.addEventListener("click", function () {
  sideNavArea.style.display = "none";
  // 다시 스크롤
  // document.body.style.overflow = "unset";
});

// chapGPT 참고...
const menuItems = document.querySelectorAll(".sidenav-gnb-list > li > a");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const submenu = item.nextElementSibling;
    if (submenu.classList.contains("active")) {
      submenu.classList.remove("active");
    } else {
      const activeMenu = document.querySelector(".sidenav-gnb-sub-list.active");
      if (activeMenu) {
        activeMenu.classList.remove("active");
      }
      submenu.classList.add("active");
    }
  });
});
