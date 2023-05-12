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
    // gnbBg.setAttribute("style", "display: block;");
    gnbBg.classList.add("gnb-sub-list-bg-active");
  });
});
gnbItems.forEach((item) => {
  item.addEventListener("mouseleave", () => {
    // gnbBg.style.display = "none";
    gnbWrap.setAttribute("style", "border-bottom: none;");
    // gnbBg.setAttribute("style", "display: none;");
    gnbBg.classList.remove("gnb-sub-list-bg-active");
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
  $body.classList.add("body-hide");
  gnbNav.classList.add("gnb-hide");
});
searchCloseBtn.addEventListener("click", () => {
  // searchArea.style.display = "none";
  searchArea.classList.remove("header-top-search-active");
  dimArea.style.display = "none";
  // 다시 스크롤
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

/* ---------------------------------------------- */

// side navigation
let sideNavBtn = document.querySelector(".side-nav-btn");
let sideNavClose = document.querySelector(".sidenav-close");
let sideNavArea = document.querySelector("section.sidenav");
sideNavBtn.addEventListener("click", function () {
  sideNavArea.classList.add("sidenav-active");
  //스크롤 금지
  document.body.style.overflow = "hidden";
});
sideNavClose.addEventListener("click", function () {
  sideNavArea.classList.remove("sidenav-active");
  // 다시 스크롤
  document.body.style.overflow = "unset";
});

// sidenav - li 선택 시 sublist 보이기
const sideNavGnbList = document.querySelectorAll(".sidenav-gnb-list>li");
sideNavGnbList.forEach((item) => {
  item.addEventListener("click", () => {
    const submenu = item.children[1];
    if (submenu.classList.contains("is--active")) {
      submenu.classList.remove("is--active");
    } else {
      const activeMenu = document.querySelector(
        ".sidenav-gnb-sub-list.is--active"
      );
      if (activeMenu) {
        activeMenu.classList.remove("is--active");
      }
      submenu.classList.add("is--active");
    }
  });
});
// sidenav li 선택 시 + 아이콘
sideNavGnbList.forEach((icon) => {
  icon.addEventListener("click", function () {
    const iconChecked = this.querySelector(".icon-checked");
    // 다른 요소에서 icon-checked 클래스 제거
    const activeIcon = document.querySelector(".icon-checked");
    if (activeIcon) {
      activeIcon.classList.remove("icon-checked");
    }
    // 클릭한 요소의 icon-checked 클래스 추가/제거
    if (iconChecked) {
      iconChecked.classList.remove("icon-checked");
    } else {
      this.querySelector("a>i").classList.add("icon-checked");
    }
  });
});
// sidenav li 선택 시 fontWeight
sideNavGnbList.forEach((item) => {
  item.addEventListener("click", (event) => {
    // 이전에 선택된 요소 찾기
    const previousSelected = document.querySelector(
      ".sidenav-gnb-list > li.show"
    );
    // 클릭한 요소에 show 클래스 추가
    event.currentTarget.classList.add("show");

    // 이전에 선택된 요소에서 show 클래스 제거
    if (previousSelected) {
      previousSelected.classList.remove("show");
    }

    // 같은 요소를 두 번 클릭한 경우 show 클래스 제거
    if (previousSelected === event.currentTarget) {
      event.currentTarget.classList.remove("show");
    }
  });
});
