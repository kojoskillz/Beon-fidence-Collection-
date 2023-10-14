// auto-slide
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;


function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentSlide++;
  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

setInterval(nextSlide, 4000); // Change slide every 3 seconds


// hamburger_menu
function openNav() {
  document.querySelector("#mySidenav").style.width = "250px";
  }

  function closeNav(){
    document.querySelector("#mySidenav").style.width = "0";

  }

  // loader
let loader;
function loadNow(opacity){
  if(opacity <= 0) {
    displayContent();
    }
    else {
      loader.style.opacity = opacity;
      window.setTimeout(function(){
        loadNow(opacity - 0.5)
      },100);
    }
  }

  function displayContent() {
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
  }

  document.addEventListener("DOMContentLoaded",function() {
    loader = document.getElementById('loader');
    loadNow(1);
  });



