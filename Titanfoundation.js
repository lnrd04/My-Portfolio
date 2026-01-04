// section2 //
const title = document.querySelector ('.about-header');

window.addEventListener('scroll', () => {
  const titleTop =title.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (titleTop < windowHeight * 0.5) {
    title.classList.add('show');
  } else {
      title.classList.remove('show');
      title.style.transitionDelay = '0s'; 
    }
});


const stats = document.querySelector ('.about-stats');

window.addEventListener('scroll', () => {
  const titleTop =stats.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (titleTop < windowHeight * 0.5) {
    stats.classList.add('show');
  } else {
      stats.classList.remove('show');
      stats.style.transitionDelay = '0s'; 
    }
});

const img = document.querySelector ('.about-image');

window.addEventListener('scroll', () => {
  const titleTop =img.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (titleTop < windowHeight * 0.5) {
    img.classList.add('show');
  } else {
      img.classList.remove('show');
      img.style.transitionDelay = '0s'; 
    }
});


//section3//

const context = document.querySelector ('.context');

window.addEventListener('scroll', () => {
  const titleTop =context.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (titleTop < windowHeight * 0.5) {
    context.classList.add('show');
  } else {
      context.classList.remove('show');
      context.style.transitionDelay = '0s'; 
    }
});

const picright = document.querySelector ('.pic-right img');

window.addEventListener('scroll', () => {
  const titleTop =picright.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (titleTop < windowHeight * 0.5) {
    picright.classList.add('show');
  } else {
      picright.classList.remove('show');
      picright.style.transitionDelay = '0s'; 
    }
});

//section4//

const title4 = document.querySelector ('.title4');

window.addEventListener('scroll', () => {
  const titleTop =title4.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (titleTop < windowHeight * 0.5) {
    title4.classList.add('show');
  } else {
      title4.classList.remove('show');
      title4.style.transitionDelay = '0s'; 
    }
});

const cards = document.querySelectorAll('.info-card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight * 0.85) {
      card.classList.add('show');
    } else {
      card.classList.remove('show');
    }
  });
});

//section5// 



const chunk = document.querySelector ('.chunk');

window.addEventListener('scroll', () => {
  const titleTop =chunk.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (titleTop < windowHeight * 0.5) {
    chunk.classList.add('show');
  } else {
      chunk.classList.remove('show');
      chunk.style.transitionDelay = '0s'; 
    }
});

const gallery = document.querySelector ('.gallery-container');

window.addEventListener('scroll', () => {
  const titleTop =gallery.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (titleTop < windowHeight * 0.6) {
    gallery.classList.add('show');
  } else {
      gallery.classList.remove('show');
      gallery.style.transitionDelay = '0s'; 
    }
});

//section6//

const section6 = document.querySelector ('.section6-title');

window.addEventListener('scroll', () => {
  const titleTop =section6.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (titleTop < windowHeight * 0.6) {
     section6.classList.add('show');
  } else {
      section6.classList.remove('show');
      section6.style.transitionDelay = '0s'; 
    }
});

const grid = document.querySelector ('.section6-grid');

window.addEventListener('scroll', () => {
  const titleTop =grid.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (titleTop < windowHeight * 0.6) {
     grid.classList.add('show');
  } else {
      grid.classList.remove('show');
      grid.style.transitionDelay = '0s'; 
    }
});

//section7//

const team = document.querySelector ('.team');

window.addEventListener('scroll', () => {
  const titleTop =team.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (titleTop < windowHeight * 0.6) {
     team.classList.add('show');
  } else {
      team.classList.remove('show');
      team.style.transitionDelay = '0s'; 
    }
});


const carousel = document.querySelectorAll('.pictures img');

window.addEventListener('scroll', () => {
  carousel.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight * 0.9) {
      card.style.transitionDelay = `${index * 0.3}s`; 
      card.classList.add('show');
    } else {
      card.classList.remove('show');
    }
  });
});


//section8//

const header = document.querySelector ('.section8-header');

window.addEventListener('scroll', () => {
  const titleTop =header.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (titleTop < windowHeight * 0.6) {
     header.classList.add('show');
  } else {
      header.classList.remove('show');
      header.style.transitionDelay = '0s'; 
    }
});


const testimonial = document.querySelectorAll('.testimonial-card');

window.addEventListener('scroll', () => {
  testimonial.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight * 0.9) {
      card.style.transitionDelay = `${index * 0.1}s`; 
      card.classList.add('show');
    } else {
      card.classList.remove('show');
    }
  });
});

//section8//

const container = document.querySelector ('.section9-content');

window.addEventListener('scroll', () => {
  const titleTop =container.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (titleTop < windowHeight * 0.6) {
     container.classList.add('show');
  } else {
      container.classList.remove('show');
      container.style.transitionDelay = '0s'; 
    }
});