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



  
