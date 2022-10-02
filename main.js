// Bottom window notification close button event handler
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

// mini header handler
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
      hamTwo.style.display = "block";
      hamOne.style.transform = "rotate(0deg)";
      hamOne.style.top = "0px";
      hamThree.style.transform = "rotate(0deg)";
      hamThree.style.bottom = "0px";
      hamOne.style.transition = ".15s ease-in-out";
      hamThree.style.transition = ".15s ease-in-out";
      hamTwo.style.transition = ".15s ease-in-out";
    }
  })
);

// hamburger menu
let navToggle = document.getElementById("nav-toggle");
let dropNav = document.getElementById("dropdown-nav");
let hamOne = document.getElementById("ham-one");
let hamTwo = document.getElementById("ham-two");
let hamThree = document.getElementById("ham-three");

let dropDownMenu = () => {
  if (dropNav.style.display === "block") {
    dropNav.style.display = "none";
    hamTwo.style.display = "block";
    hamOne.style.transform = "rotate(0deg)";
    hamOne.style.top = "0px";
    hamThree.style.transform = "rotate(0deg)";
    hamThree.style.bottom = "0px";
    hamOne.style.transition = ".15s ease-in-out";
    hamThree.style.transition = ".15s ease-in-out";
    hamTwo.style.transition = ".15s ease-in-out";
  } else {
    dropNav.style.display = "block";
    hamTwo.style.display = "none";
    hamOne.style.transform = "rotate(45deg)";
    hamThree.style.bottom = "4px";
    hamOne.style.top = "4px";
    hamThree.style.transform = "rotate(-45deg)";
    hamOne.style.transition = ".15s ease-in-out";
    hamThree.style.transition = ".15s ease-in-out";
    hamTwo.style.transition = ".15s ease-in-out";
  }
};

navToggle.addEventListener("click", dropDownMenu);
