let popup = document.getElementById('mypopup');
let popupToggle = document.getElementById('registration__button');
let popupClose = document.querySelector('.close');


popupToggle.onclick = function(){
    popup.style.display="block";
    
}

popupClose.onclick = function(){
    popup.style.display="none";
}

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

function updateSlider() {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
      slide.classList.add("flash")
    });
}

updateSlider();