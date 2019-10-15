const carouselSLide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSLide.style.transform = 'translateX(' + (-size * counter) + 'px)'

//button listenrs

nextBtn.addEventListener('click', () =>{
  if(counter >= carouselImages.length-1) return;
  carouselSLide.style.transition = '0.4s ease-in-out';
  ++counter;
  carouselSLide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click', () =>{
  if(counter <= 0 ) return;
  carouselSLide.style.transition = '0.4s ease-in-out';
  --counter;
  carouselSLide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

carouselSLide.addEventListener('transitionend', () => {
  if(carouselImages[counter].id==='lastClone'){
    carouselSLide.style.transition = 'none';
    counter = carouselImages.length-2;
    carouselSLide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }

  if(carouselImages[counter].id==='firstClone'){
    carouselSLide.style.transition = 'none';
    counter = carouselImages.length-counter;
    carouselSLide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});
