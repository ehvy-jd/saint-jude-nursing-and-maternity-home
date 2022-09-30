// Notification close button event handler
let notice = document.getElementById("notice");
let noticeBtn = document.getElementById("notice-button");
let ft = document.getElementById("foot");

const remove = (notice) => {
  notice.remove();
};

const footHeight = (ft) => {
  ft.style.height = "auto";
};

// Photo slide handler
let slideIndex = 0;
const showSlides = () => {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000);
};
showSlides();

// Scroll header handler
let scrollDown = document.getElementById("scroll-header");
let mainHeader = document.getElementById("landing");

window.addEventListener(
  "scroll",
  (showMiniHeader = () => {
    let offHeight = mainHeader.offsetHeight;
    if (window.scrollY > offHeight - 50) {
      scrollDown.style.display = "flex";
    } else {
      scrollDown.style.display = "none";
      dropNav.style.display = "none";
    }
  })
);

let dropNav = document.getElementById("dropdown-nav");
let navToggle = document.getElementById("nav-toggle");

let dropDownMenu = () => {
  if (dropNav.style.display === "none") {
    dropNav.style.display = "block";
  } else {
    dropNav.style.display = "none";
  }
};

navToggle.addEventListener("click", dropDownMenu);
