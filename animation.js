const box = document.querySelector('.box');

window.addEventListener('scroll', () => {
  const boxTop = box.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  // Trigger animation when element is 100px inside viewport
  if (boxTop < windowHeight - 100) {
    box.classList.add('show');
  }
});
