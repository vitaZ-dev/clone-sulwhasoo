const $body = document.querySelector("body");

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
let dimArea = document.querySelector(".dim");
let topSearchBtn = document.querySelector(".search-btn");
let searchCloseBtn = document.querySelector(".search-close-btn");
let searchArea = document.querySelector(".header-top-search");
let gnbNav = document.querySelector(".gnb");
topSearchBtn.addEventListener("click", () => {
  // searchArea.style.display = "block";
  searchArea.classList.add("header-top-search-active");
  dimArea.style.display = "block";
  //스크롤 금지
  // document.body.style.overflow = "hidden";
  $body.classList.add("body-hide");

  gnbNav.classList.add("gnb-hide");
});
searchCloseBtn.addEventListener("click", () => {
  // searchArea.style.display = "none";
  searchArea.classList.remove("header-top-search-active");
  dimArea.style.display = "none";
  // 다시 스크롤
  // document.body.style.overflow = "unset";
  $body.classList.remove("body-hide");

  gnbNav.classList.remove("gnb-hide");
});
// 검색폼 사라지는 컨셉 변경
const $header = document.querySelector(".header");
$header.addEventListener("mouseleave", () => {
  searchArea.classList.remove("header-top-search-active");
  dimArea.style.display = "none";
  $body.classList.remove("body-hide");
  gnbNav.classList.remove("gnb-hide");
});

// side navigation
let sideNavBtn = document.querySelector(".side-nav-btn");
let sideNavClose = document.querySelector(".sidenav-close");
let sideNavArea = document.querySelector("section.sidenav");
// let sideNavWrap = document.querySelector(".sidenav-wrap");
sideNavBtn.addEventListener("click", function () {
  // sideNavArea.style.display = "block";
  sideNavArea.classList.add("sidenav-active");

  //스크롤 금지
  $body.classList.add("body-hide");
  // document.body.style.overflow = "hidden";
});
sideNavClose.addEventListener("click", function () {
  // sideNavArea.style.display = "none";
  sideNavArea.classList.remove("sidenav-active");

  // 다시 스크롤
  $body.classList.remove("body-hide");
  // document.body.style.overflow = "unset";
});

// sidenav - li 선택 시 sublist 애니메이션
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
// const menuLiItems = document.querySelectorAll(".sidenav-gnb-list > li");
// menuLiItems.forEach((items) => {
//   items.addEventListener("click", () => {
//     let submenu = items.querySelector(".sidenav-gnb-sub-list");
//     if (items.classList.contains("active")) {
//       items.classList.remove("active");
//     } else {
//       const activeMenu = document.querySelector(".sidenav-gnb-sub-list.active");
//       if (activeMenu) {
//         activeMenu.classList.remove("active");
//       }
//       items.classList.add("active");
//     }
//   });
// });

// sidenav - 선택 시 + 모양 아이콘 애니메이션
const menuSelected = document.querySelectorAll(".sidenav-gnb-list > li > a");
menuSelected.forEach((select) => {
  select.addEventListener("click", () => {
    let icon = select.querySelector(".icon-select");
    icon.classList.toggle("icon-checked");
  });
});
