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
        loadNow(opacity - 1.5)
      },250);
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


// search_button;
// user clicks on search button and displays search bar;
function expandMe() {
   let showMe = document.querySelector("#show_search_btnX");  
    
   if(showMe.style.display === "none"){
    showMe.style.display = "block";
   } else{
       showMe.style.display = "none";
   }
}


// search_filter;
// user searches an item;

function searchMe(){

  // declaring variables
  let input, filter, ul, a, li, txtValue;
  input = document.querySelector('#show_search_btnX');
  filter = input.value.toUpperCase();
  ul = document.querySelector('myUl');
  li = ul.getElementsByTagName ('li');

// looping through listed items
for (i = 0; i < li.length; i++) {
  a = li[i].getElementsByTagName("a")[0];txtValue = a.textContent || a.innerText;
  if(txtValue.toUpperCase().indexOf(filter) > -1) {
    li[i].style.display = ""
  }else{
    li[i].style.display = 'none'
   }

 }

}


// scroll_to_top
let btn = document.querySelector(".top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = 'block';
  } else{
    btn.style.display = 'none'
  }

}

function scrollToTop(){
  window,scrollTo(0,0)
}