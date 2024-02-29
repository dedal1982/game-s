const btnSearch = document.querySelector(".nav-search");
const navtSearch = document.querySelector(".nav-search");
const inputSearch = document.querySelector(".input-search");

btnSearch.addEventListener("click", () => {
  navtSearch.classList.add("active");
  inputSearch.classList.add("active");
});

//бургер + мобильное меню
const burgerClick = document.querySelector(".header__burger");
const burgerOpenMobile = document.querySelector(".mobile-menu");
const scrollLock = document.querySelector(".page");

burgerClick.addEventListener("click", () => {
  burgerClick.classList.toggle("active");
  burgerOpenMobile.classList.toggle("active");
  scrollLock.classList.toggle("lock");
});

let tabButton = document.querySelectorAll(".tab-button");
let tabContent = document.querySelectorAll(".tabs-content");

tabButton.forEach((button) =>
  button.addEventListener("click", function () {
    tabButton.forEach((activeButton) => {
      activeButton.classList.remove("tab-active");
    });

    button.classList.add("tab-active");

    tabContent.forEach((content) => {
      content.classList.add("tab-hidden");
    });

    let findId = document.querySelector("#" + button.dataset.tab);
    findId.classList.remove("tab-hidden");
  })
);

// tabs

// buttons tabs

const tabButtons = document.querySelectorAll(".tab-button");
const buttonPrev = document.getElementById("button-prev");
const buttonNext = document.getElementById("button-next");

let activeTabIndex = 0;

buttonPrev.addEventListener("click", function () {
  if (activeTabIndex > 0) {
    activeTabIndex--;
    updateActiveTab();
  }
});

buttonNext.addEventListener("click", function () {
  if (activeTabIndex < tabButtons.length - 1) {
    activeTabIndex++;
    updateActiveTab();
  }
});

function updateActiveTab() {
  tabButtons.forEach((button, index) => {
    if (index === activeTabIndex) {
      button.classList.add("tab-active");
    } else {
      button.classList.remove("tab-active");
    }
  });

  const tabContentId = tabButtons[activeTabIndex].getAttribute("data-tab");
  tabContent.forEach((content) => {
    if (content.id === tabContentId) {
      content.classList.remove("tab-hidden");
    } else {
      content.classList.add("tab-hidden");
    }
  });
}

//menu;
// function toggleActiveClass() {
//   const authList = document.querySelector(".header__auth-list");
//   const authIconBtn = document.querySelector(".header__auth-tringle");
//   authList.classList.toggle("active");
//   authIconBtn.classList.toggle("active");
// }

// document
//   .querySelector("#myButton")
//   .addEventListener("click", toggleActiveClass);

// const itemBox = document.querySelector(".bids__item-box");
// const itemBoxFull = document.querySelector(".bids__item-box-full");

// document.getElementById("toggleButton").addEventListener("click", () => {
//   itemBox.classList.toggle("active");
//   itemBoxFull.classList.toggle("active");
// });

const arrowBtn = document.querySelector(".toggleButton");
const itemBox = document.querySelector(".bids__item-box");
const itemBoxFull = document.querySelector(".bids__item-box-full");

arrowBtn.addEventListener("click", () => {
  itemBox.classList.toggle("active");
  itemBoxFull.classList.toggle("active");
  arrowBtn.classList.toggle("active");
});

const popupModal = document.querySelector(".how-to-play");
const popupModalContainer = document.querySelector(".how-to-play__container");

function openPopupModal() {
  popupModal.classList.add("active");
  popupModalContainer.classList.add("active");
}

function closePopupModal() {
  popupModal.classList.remove("active");
  popupModalContainer.classList.remove("active");
}

function closeAllPopupModal() {
  const containers = document.querySelectorAll(".how-to-play__container");
  containers.forEach((container) => {
    container.classList.remove("active");
    popupModal.classList.remove("active");
  });
}

//функция перехода между модальными окнами
function toggleActiveClass() {
  const elements = document.querySelectorAll(".how-to-play__container");

  elements.forEach((element) => {
    if (element.classList.contains("active")) {
      element.classList.remove("active");
    } else {
      element.classList.add("active");
    }
  });
}
