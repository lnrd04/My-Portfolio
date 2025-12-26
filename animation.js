const box = document.querySelector('.about-text');

window.addEventListener('scroll', () => {
  const boxTop = box.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  // Trigger animation when element is 100px inside viewport
  if (boxTop < windowHeight * 0.4) {
    box.classList.add('show');
  }
});

const img = document.querySelector('.about-me img');

window.addEventListener('scroll', () => {
  const imgTop = img.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (imgTop < windowHeight * 0.5) {
    img.classList.add('show');
  }
});
