/* Слайдер */
let slideIndex = 1;
showSlides("projects_build", slideIndex);
showSlides("projects_inside_slider", slideIndex);

function plusSlide(projectName) {
  showSlides(projectName, (slideIndex += 1));
}

function minusSlide(projectName) {
  showSlides(projectName, (slideIndex -= 1));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(projectName, n) {
  let i;
  let project = document.querySelector(`.${projectName} .slider`);
  let slides = project.getElementsByClassName("slider-item");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

/* tabs */
function openProject(event, projectName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active-tab");
  }
  tablinks = document.getElementsByClassName("tablink__block");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  let els = document.getElementsByClassName(projectName);
  for (let el of els) {
    el.classList.add("active-tab");
  }
  event.currentTarget.parentNode.classList.add("active");
  //включаем слайдер на моб.
  showSlides(projectName, 1);
}

/* Таблица accordeon */
let acc = document.getElementsByClassName("column-left");
let i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
/* Sticky header */
/*
window.onscroll = function() {stickyHeader()};

let navbar = document.querySelector(".header-nav");
let mobNavbar = document.querySelector(".mob-header-nav");

let sticky = navbar.offsetTop;
let mobSticky = mobNavbar.offsetTop;

function stickyHeader() {
    
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
  if (window.pageYOffset > mobSticky) {
    mobNavbar.classList.add("sticky")
    } else {
    mobNavbar.classList.remove("sticky");
  }
}
*/

/* Анимация */
let isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function () {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

let listItems = document.querySelectorAll(".animate__block");

function scrolling(e) {
  for (let i = 0; i < listItems.length; i++) {
    let listItem = listItems[i];

    if (isPartiallyVisible(listItem)) {
      listItem.classList.add("active");
    } else {
      listItem.classList.remove("active");
    }
  }
}

function isPartiallyVisible(el) {
  let elementBoundary = el.getBoundingClientRect();

  let top = elementBoundary.top;
  let bottom = elementBoundary.bottom;
  let height = elementBoundary.height;

  return top + height >= 0 && height + window.innerHeight >= bottom;
}

function isFullyVisible(el) {
  let elementBoundary = el.getBoundingClientRect();

  let top = elementBoundary.top;
  let bottom = elementBoundary.bottom;

  return top >= 0 && bottom <= window.innerHeight;
}
/* Mobile menu */
function openNav(e) {
  e.preventDefault();
  document.getElementById("myNav").style.width = "100%";
}

document
  .querySelector(".openMobileNav")
  .addEventListener("click", openNav, false);

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

document
  .querySelector(".overlay-content")
  .addEventListener("click", function (e) {
    let target = e.target;
    if (target) {
      closeNav();
    }
  });
