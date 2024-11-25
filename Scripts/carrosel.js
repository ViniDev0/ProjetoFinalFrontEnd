let currentSlide = 0;

function mudarSlide(direction) {
  const slides = document.querySelector('.slides');
  const totalSlides = slides.children.length;

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  slides.style.transform = `translateX(-${(currentSlide * 100)}%)`;
}

function mudarSlide2(direction) {
  const slides = document.querySelector('.slides02');
  const totalSlides = slides.children.length;

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  slides.style.transform = `translateX(-${(currentSlide * 100)}%)`;
}