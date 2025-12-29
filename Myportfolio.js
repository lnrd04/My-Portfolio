const box = document.querySelector('.about-text');

window.addEventListener('scroll', () => {
  const boxTop = box.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

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

const cards = document.querySelectorAll('.project-card');

window.addEventListener('scroll', () => {
  cards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight * 0.8) {
      card.style.transitionDelay = `${index * 0.2}s`; 
      card.classList.add('show');
    }
  });
});


const carousel = document.querySelectorAll('.my-skills-card');

window.addEventListener('scroll', () => {
  carousel.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight * 0.9) {
      card.style.transitionDelay = `${index * 0.3}s`; 
      card.classList.add('show');
    }
  });
});

// mutiple img/text show 
const skills = document.querySelectorAll('.type-skills');

window.addEventListener('scroll', () => {
  skills.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight * 0.7) {
      card.style.transitionDelay = `${index * 0.2}s`; 
      card.classList.add('show');
    }
  });
});

const container = document.querySelector('.contact-form');

window.addEventListener('scroll', () => {
  const boxTop = container.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (boxTop < windowHeight * 0.6) {
    container.classList.add('show');
  }
});