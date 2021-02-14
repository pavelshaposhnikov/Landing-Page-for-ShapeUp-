/* Mobile Nav */
(function () {
  var toggle = document.querySelector('.nav-toggle');
        
  toggle.addEventListener('click', function(e) {
  this.classList.toggle('opened');
  });
})();
         
/* Nav Toggle */ 
let nav = $("#nav");
let navToggle = $("#navToggle");
  
$("#navToggle").on("click", function(event) {
  event.preventDefault();
  nav.toggleClass("show");
});

/* Smooth Scroll */
$("[data-scroll]").on("click", function(event) {
  event.preventDefault();
      
    let elementId = $(this).data(`scroll`);
    let elementOffset = $(elementId).offset().top;
              
$("html, body").animate({
  scrollTop: elementOffset - 0
  }, 600);
});

/* Gallery Slider */
$('.gallery__slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 8000,
  arrows: true
});

/* Reviews Slider */
$('.reviews__inner').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
  arrows: false,
}); 

/* Scroll Up Button */
  
$(document).ready(function() { //when document is ready
$(window).scroll(function() { //when webpage is scrolled
  if ($(this).scrollTop() > 500) { //if scroll from top is more than 500
$('.scroll-up').fadeIn(); //display element with class 'top-scroll'; opacity increases
  } else { //if not
$('.scroll-up').fadeOut(); //hide element with class 'top-scroll'; opacity decreases
    }
  });
});