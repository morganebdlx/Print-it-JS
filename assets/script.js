const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



let arrowRight = document.querySelector('.arrow_right');
let arrowLeft = document.querySelector('.arrow_left');
let bannerImage = document.getElementById('banner-img');
let bannerText = document.querySelector('#banner p');
let bannerDots = document.querySelector('.dots');

let currentSlide = 0;


// Dots section

slides.forEach ((slide, index) => {
  let dot = document.createElement('div');
  dot.classList.add('dot');
  if (index === 0) {
    dot.classList.add('dot_selected');
  }
  bannerDots.appendChild(dot);
});



// Activation des boutons au clic

arrowRight.addEventListener('click', function() {
  changeSlide(1);
});

arrowLeft.addEventListener('click', function() {
  changeSlide(-1);
});


// Fontion de changement de slide

function changeSlide(direction) {

  let bannerDotsList = document.querySelectorAll('.dot');

  bannerDotsList[currentSlide].classList.remove('dot_selected');

  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = slides.length -1;
  } else if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  bannerDotsList[currentSlide].classList.add('dot_selected');

  bannerImage.src = `assets/images/slideshow/${slides[currentSlide].image}`;
  bannerText.innerHTML = slides[currentSlide].tagLine;

}

