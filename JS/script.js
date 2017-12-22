  var carousels = document.querySelectorAll('#started .carousel');
  var currentCarousel = 0;
  var carouselInterval = setInterval(nextCarousel,3000); /* Интервал между картинками */

  function nextCarousel(){
  carousels[currentCarousel].className = 'carousel';
  currentCarousel = (currentCarousel+1)%carousels.length;
  carousels[currentCarousel].className = 'carousel demonstration';
}
