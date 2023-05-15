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
const sideGnbBtn = document.querySelectorAll(".sidenav-gnb-list > li > a"); //li>a
const sideGnbSubList = document.querySelectorAll(".sidenav-gnb-sub-list"); //숨겨진 영역
const selectIcon = document.querySelectorAll(".icon-select"); //+아이콘

sideGnbBtn.forEach((li) => {
  li.addEventListener("click", (item) => {
    let target = item.currentTarget;
    let targetGnbSubArea = item.currentTarget.nextElementSibling;
    let targetSelectIcon = item.currentTarget.children[1];
    console.log(target); // li>a = Btn
    console.log(targetGnbSubArea); //nav-gnb-sub-list
    console.log(targetSelectIcon); //+icon-select
    if (targetGnbSubArea.classList.contains("show-area")) {
      target.classList.remove("li-active");
      targetGnbSubArea.classList.remove("show-area");
      targetSelectIcon.classList.remove("icon-checked");
    } else {
      sideGnbBtn.forEach((li) => {
        //li 버튼 이벤트 제거
        li.classList.remove("li-active");
        //nav-gnb-sub-list 영역 숨기기
        sideGnbSubList.forEach((sub) => {
          sub.classList.remove("show-area");
        });
        //아이콘
        selectIcon.forEach((icon) => {
          icon.classList.remove("icon-checked");
        });
        //그리고 클래스 추가
        target.classList.add("li-active"); //li>a
        targetGnbSubArea.classList.add("show-area"); //nav-sub-gnb-list
        targetSelectIcon.classList.add("icon-checked"); //icon
      });
    }
  });
});
